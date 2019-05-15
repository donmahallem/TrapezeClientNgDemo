#!/bin/bash
FOLDER="./TrapezeClientNg"
echo "switch dir"
ls
cd "$FOLDER"
echo "in dir"
ls
#copy envs
cp ./src/environments/environment.example.pwa.ts ./src/environments/environment.prod.ts
sed -i 's/apiEndpoint\x3A\x20\x27\x2F\x27/apiEndpoint\x3A\x20\x27\x2FTrapezeClientNgDemo\x2F\x27/g' ./src/environments/environment.prod.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.dev.ts
echo "Start Install"
npm install
echo "Start Build"
ng build --aot --prod --base-href=/TrapezeClientNgDemo/
cd ..