#!/bin/bash
FOLDER="TrapezeClientNg"
TEMP_FOLDER="temp"
if [ -d "$TEMP_FOLDER/.git" ]
then
    echo "Needs to download Git Repo"
    rm -rf "$TEMP_FOLDER"
fi
git clone https://github.com/donmahallem/TrapezeClientNg.git "$TEMP_FOLDER"
echo "Copy from $TEMP_FOLDER to $FOLDER"
mv -f "$TEMP_FOLDER" "$FOLDER"
echo "switch dir"
ls
cd "$FOLDER"
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