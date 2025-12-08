<h1>Simple React Node Live Server</h1>

This is a simple React server configuration with Babel and Webpack.

It uses the basic modules needed to run React with the JSX transpiler without extra plugins.

<h2>How to run</h2>

<h3>Installation</h3>

Install all the packages from `package.json` file:

```console
npm install
```

<h3>Run live server</h3>

After installing, you can run the server with live reload:

```console
 npm start
```

The server is now open on `http://localhost:3000` and will be reloaded automatically on file-change.

<h3>Build files</h3>

You can build a production setup for deployment use:

```console
 npm build
```

<h2>Project</h2>

The jsx-sourcefiles are in the  `./src/` folder and the static-assets in the `./public` folder.

On building, all files will be copied into the `./dist` folder.

<h2>Webpack</h2>

The webpack configuration file `webpack.config.js` contains two custom plugins.

Instead of a extra copy-plugin we just use an own custom piece of code, for copiyng all the needed files into the distribution-folder:

```javascript
plugins: [{
        apply: function(compiler) {
            // copy all files from "public" to "dist" folder
            compiler.hooks.done.tap("copyfiles-custom-plugin", () => {
                try { fs.cpSync(__dirname + '/public', __dirname + '/dist', { recursive: true }); }
                catch (error) { console.log(error); }
            })
...
```

The other part prints the date-time on (hot module replacement) live reload instantly.

```javascript
			// print message on compiler reload
            compiler.hooks.beforeCompile.tap("hmr-message-plugin", () => {
                console.log("\n\x1b[33m[" + new Date().toLocaleString('en-US') + "]\x1b[0m");
            })
```

<h2>Test</h2>

The Server was tested in Dec 2025 with Node.js version v24.0.0 with the following module configuration:

```javascript
"dependencies": {
	"react": "^19.2.0",
	"react-dom": "^19.2.0"
},
"devDependencies": {
	"@babel/core": "^7.28.5",
	"@babel/preset-env": "^7.28.5",
	"@babel/preset-react": "^7.28.5",
	"babel-loader": "^10.0.0",
	"css-loader": "^7.1.2",
	"file-loader": "^6.2.0",
	"style-loader": "^4.0.0",
	"webpack": "^5.103.0",
	"webpack-cli": "^6.0.1",
	"webpack-dev-server": "^5.2.2"
}
```