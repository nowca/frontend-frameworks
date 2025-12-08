const path = require('path');
const fs = require('fs');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimize: true,
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'], // rewrite engine
                use: [
                    { loader: "style-loader", options: { injectType: "linkTag" } },
                    { loader: "file-loader" },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: false,
                            name: 'assets/img/[name].[ext]',
                            publicPath: '.'
                        }
                    },
                ]
            }
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true,
        hot: true,
    },
    stats: {
        colors: true,
        hash: true,
        version: true,
        timings: true,
        assets: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: false
    },
    plugins: [{
        apply: function(compiler) {
            // copy all files from "public" to "dist" folder
            compiler.hooks.done.tap("copyfiles-custom-plugin", () => {
                try { fs.cpSync(__dirname + '/public', __dirname + '/dist', { recursive: true }); }
                catch (error) { console.log(error); }
            })
            // print message on compiler reload
            compiler.hooks.beforeCompile.tap("hmr-message-plugin", () => {
                console.log("\n\x1b[33m[" + new Date().toLocaleString('en-US') + "]\x1b[0m");
            })
        }
    }]
};