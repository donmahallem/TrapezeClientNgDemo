#!/bin/bash
FOLDER="./TrapezeClientNg"
echo "switch dir"
cd "$FOLDER"
echo "in dir"
#copy envs
cp ./src/environments/environment.example.pwa.ts ./src/environments/environment.prod.ts
sed -i 's/apiEndpoint\x3A\x20\x27\x2F\x27/apiEndpoint\x3A\x20\x27\x2FTrapezeClientNgDemo\x2F\x27/g' ./src/environments/environment.prod.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.dev.ts
cp ./../manifest.json ./src/manifest.json -f
echo "Start Install"
npm install --no-save
echo "Start Build"
#ng build --aot --prod --base-href=/TrapezeClientNgDemo/ --deploy-url=/TrapezeClientNgDemo/
cd ..
npm run build:internal
echo "Copy build files into prerender folder"
yes | cp -rf ./TrapezeClientNg/dist/trapeze-client-ng/* ./prerender/TrapezeClientNgDemo/