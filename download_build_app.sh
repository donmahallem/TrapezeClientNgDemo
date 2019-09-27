#!/bin/bash
if [ ! -d "TrapezeClientNg" ] ; then
    git clone https://github.com/donmahallem/TrapezeClientNg.git
fi
cd TrapezeClientNg
git reset origin/master --hard
git fetch
git pull origin
#copy envs
cp ./src/environments/environment.example.pwa.ts ./src/environments/environment.prod.ts
sed -i 's/apiEndpoint\x3A\x20\x27\x2F\x27/apiEndpoint\x3A\x20\x27\x2FTrapezeClientNgDemo\x2F\x27/g' ./src/environments/environment.prod.ts
sed -i 's/providers\:\x20\[/providers\:\x20\[\{provide\:\x20HTTP_INTERCEPTORS\,useClass\:\x20TokenInterceptor\,multi\:\x20true\}\,/g' ./src/app/app.module.ts
sed -i -e '1s;^;import\x20{TokenInterceptor}\x20from\x20\"./interceptor\"\;\n;' ./src/app/app.module.ts
sed -i -e '1s;^;import\x20{HTTP_INTERCEPTORS}\x20from\x20\"\@angular\/common\/http\"\;\n;' ./src/app/app.module.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.ts
cp ./src/environments/environment.prod.ts ./src/environments/environment.dev.ts
cp ./../interceptor.ts ./src/app/interceptor.ts

echo "Start Install"
npm install
echo "Start Build"
ng build --aot --prod --base-href=/TrapezeClientNgDemo/
cd ..