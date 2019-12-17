const { resolve } = require("path");

module.exports = {
    entry: "./app/main.ts",
    output: {
        path: resolve(__dirname, "public"),
        publicPath: "/public/",
        filename: "bundle.js"
    },
    devtool: "inline",
    module: {
        rules: [
            {
                test: /\.riot$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "@riotjs/webpack-loader",
                        options: {
                            hot: true
                        }
                    }
                ]
            },
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    resolve: {
        extensions: [".ts", ".riot", ".js"]
    }
};
