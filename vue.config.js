// vue add style-resources-loader
const path = require("path");

module.exports = {
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/theme/css.less")]
        }
    },
    devServer: {
        port: 8081,
        proxy: {
            '/sqlapi': {
                target: 'http://192.168.20.14:3000/sqlapi',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/sqlapi': ''
                }
            }
        }
        // port: 8081,
        // proxy: {
        //     '/': {
        //         target: 'http://192.168.20.14:3000/',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/': ''
        //         }
        //     }
        // }
    }
};
