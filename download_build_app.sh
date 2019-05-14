#!/bin/bash
git clone https://github.com/donmahallem/TrapezeClientNg.git
cd TrapezeClientNg
npm install
ng build --aot --prod --base-href=/TrapezeClientNgDemo/
cd ..