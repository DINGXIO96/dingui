
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:"development",
    entry:'./src/main.js',
    output:{
        path:__dirname,
        filename:'build.js'
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jsx?|babel|es6|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }

}
