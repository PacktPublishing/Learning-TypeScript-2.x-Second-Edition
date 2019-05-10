const { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const corePlugins = [
    new CheckerPlugin(),
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    }),
    new ExtractTextPlugin({
        filename: "[name]main.css",
        allChunks: true
    })
];

const devPlugins = [];

const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })
];

const isProduction = process.env.NODE_ENV === "production";
const plugins = isProduction ? corePlugins.concat(prodPlugins) : corePlugins.concat(devPlugins);

module.exports = {
    entry: {
        "app/": "./src/frontend/main.tsx"
    },
    devServer: {
        inline: true
    },
    output: {
        filename: "[name]bundle.js",
        path: __dirname + "/public",
        publicPath: "/public"
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx",".json"],
        plugins: [
            new TsConfigPathsPlugin({ configFileName: "tsconfig.json" })
        ]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "resolve-url-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: plugins
};