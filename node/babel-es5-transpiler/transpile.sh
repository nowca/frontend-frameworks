#!/bin/bash

if [ ! -f ./package.json ]; then
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
fi
if [ ! -d directory ]; then
	npm install
fi
npx babel $1 -d ./build