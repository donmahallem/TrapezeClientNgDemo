#!/bin/bash
if [ ! -d "TrapezeClientNg" ] ; then
    git clone https://github.com/donmahallem/TrapezeClientNg.git
fi
git submodule init
git submodule update --recursive --remote
cd TrapezeClientNg
git reset origin/master --hard
git fetch
git pull origin master
#copy envs
echo "$environment_config" > ./src/environments/environment.prod.ts
sed -i 's/providers\:\x20\[/providers\:\x20\[\{provide\:\x20HTTP_INTERCEPTORS\,useClass\:\x20TokenInterceptor\,multi\:\x20true\}\,/g' ./src/app/app.module.ts
sed -i -e '1s;^;import\x20{TokenInterceptor}\x20from\x20\"./interceptor\"\;\n;' ./src/app/app.module.ts
sed -i -e '1s;^;import\x20{HTTP_INTERCEPTORS}\x20from\x20\"\@angular\/common\/http\"\;\n;' ./src/app/app.module.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.dev.ts
#cp ./../interceptor.ts ./src/app/interceptor.ts
openssl aes-256-cbc -salt -md sha256 -a -d -in "./../interceptor.enc" -out "./src/app/interceptor.ts" -k $interceptor_key
echo "Start Install"
npm install --no-save
echo "Start Build"
ng build --aot --prod --base-href=/TrapezeClientNgDemo/ --deploy-url=/TrapezeClientNgDemo/
cp ./dist/trapeze-client-ng/index.html ./dist/trapeze-client-ng/404.html
cd ..
#npm run build:internal
#echo "mkdir"
mkdir -p ./prerender/TrapezeClientNgDemo/
#echo "Copy build files into prerender folder"
yes | cp -rf ./TrapezeClientNg/dist/trapeze-client-ng/* ./prerender/TrapezeClientNgDemo/