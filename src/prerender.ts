import * as puppeteer from 'puppeteer';
import * as express from 'express';
import { join, dirname } from 'path';
import { createTrapezeApiRoute } from '@donmahallem/trapeze-api-express-route';
import { readFile, exists, writeFile, mkdir } from 'mz/fs';
import { uniq, difference } from 'lodash';
import { Server } from 'http';

// Defining some configuration
const PORT = 4000;
const HOST = `http://localhost:${PORT}`;

let PAGES: string[] = ['stops'];
let RENDERED_PAGES: string[] = [];

async function main() {

    // Starting an Express.js server to serve the static files while puppeter prerender the pages
    const app = express();

    // Getting the html content from the index.html file
    const index = (await readFile(join(process.cwd(), "node_modules", "@donmahallem", "trapeze-client-ng", "dist", 'trapeze-client-ng', 'index.html'))).toString();

    // Serving the static files.
    app.get('*.*', express.static(join(process.cwd(), "node_modules", "@donmahallem", "trapeze-client-ng", "dist", 'trapeze-client-ng')));

    app.use("/api", createTrapezeApiRoute("https://kvg-kiel.de"))
    // Serving index.html, when a puppeters request the index page
    app.get('*', (req, res) => res.send(index));

    // Starting the express server
    const server: Server = await (new Promise((resolve, reject) => {
        const s = app.listen(PORT, e => e ? reject(e) : resolve(s));
    }));

    console.log(`Started server ${HOST}!`);

    // Launching Puppeteer
    const browser = await puppeteer.launch();

    console.log(`Started browser!`);

    // Creating a new Tap/Page
    const page = await browser.newPage();

    do {
        const p = PAGES[0];

        // Requesting the first page in PAGES array
        await page.goto(`${HOST}/${p}`, { waitUntil: 'networkidle0' });

        // Getting the html content after the Chromium finish rendering.
        let result = await page.evaluate(() => document.documentElement.outerHTML);
        result = await page.content();
        // Defining the html file name that will be created
        const file = join(process.cwd(), 'dist', (p || 'index') + '.html');

        const dir = dirname(file);

        // Test if the directory exist, if not create the directory
        if (!(await exists(dir)))
            await mkdir(dir);

        // Write the rendered html file
        await writeFile(file, result);

        console.log(`Writed ${file}`);

        // Add this page to the RENDERED PAGES array
        RENDERED_PAGES = [...RENDERED_PAGES, p];

        // Set PAGES with the pages that still need to be rendered

        ///uniq(PAGES.concat(result.match(/href="\/[\/\w\d\-]*"/g).map(s => s.match(/\/([\/\w\d\-]*)/)[1]))),
        const matchedUrls: RegExpMatchArray | null = result.match(/href="\/[\/\w\d\-]*"/g);
        console.log(matchedUrls);
        if (matchedUrls) {
            const matchedPath = matchedUrls.map((s: string) => {
                const match = s.match(/\/([\/\w\d\-]*)/);
                if (match)
                    return match[1];
                return "";
            });
            PAGES = difference(
                uniq(PAGES.concat(matchedPath)),
                RENDERED_PAGES
            );
        }

    } while (PAGES.length > 0);

    // Closes Chromium and finishes the express server.
    browser.close();
    server.close();
}

// Run the main asyn function
main()
    .then(() => console.log('All right!'))
    .catch(err => {
        console.error('Err', err);
        process.exit(1);
    });