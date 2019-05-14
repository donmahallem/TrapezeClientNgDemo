#!/bin/bash
git clone https://github.com/donmahallem/TrapezeClientNg.git
cd TrapezeClientNg
cp ./../build.environment.ts ./src/environments/environment.prod.ts
cp ./../build.environment.ts ./src/environments/environment.ts
cp ./../build.environment.ts ./src/environments/environment.dev.ts
npm install
ng build --aot --prod --base-href=/TrapezeClientNgDemo/
cd ..