
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const eslintFormatter = require('eslint-friendly-formatter') //让eslint的错误信息出现在终端上
const IncludeAssetsPlugin = require('html-webpack-include-assets-plugin') //将js css资源添加到html中 扩展html插件的功能
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'
const envDevelopment = NODE_ENV === 'development' //开发
const envProduction = NODE_ENV === 'production' //生产

let sourceMap =  NODE_ENV === 'development' ? true : false
const devtool = sourceMap ? 'cheap-source-map' : false

const isEsLint = true //默认开启eslint检查

const SRC_DIR = path.join(__dirname, '../src')

const eslintRule = () => ({
    test: /(\.jsx|\.js)$/,
    use: {
        loader: 'eslint-loader?cacheDirectory',
        options: {
            formatter: eslintFormatter
        }
    },
    enforce: 'pre',
    include: SRC_DIR,
    exclude: /node_modules/
})

const config = {
    entry: {
        main: [SRC_DIR]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: envDevelopment ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
        publicPath: '../'
    },
    mode: NODE_ENV,
    devtool: devtool,
    resolve: {
        modules: [ //引用第三方组件的区域，默认只有node_modules
            '../src',
            'node_modules'
        ],
        alias: {
            '@': SRC_DIR
        },
        extensions: ['*', '.js', '.jsx', '.json', '.less', '.css']
    },
    module: {
        rules: [
            ...(isEsLint ? [eslintRule()] : []),
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader?cacheDirectory'
                },
                // use: {
                //     loader: 'babel-loader?cacheDirectory',
                //     options: {
                //       presets: ['@babel/preset-env']
                //     }
                // }            
                include: SRC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'images'
                    }
                }
            }
        ]
    },
    optimization: {
        sideEffects: false,
        minimize: NODE_ENV === 'production' ? true : false, //production 模式下，这里默认是 true
        splitChunks: { //webpack4以上的分包方式
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            cacheGroups: {
                common: {
                    name: 'common',
                    test: /node_modules/,
                    chunks: 'initial',
                    priority: -10,
                    enforce: true
                },
                styles: {
                    name: 'styles',
                    test: /(\.less|\.css)$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    performance: {
        hints: false
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //     context: '../',
        //     manifest: path.resolve('dll', 'manifest.json')
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true,
            favicon: path.resolve('public', 'favicon.ico'),
            minify: {
                collapseWhitespace: true
            }
        }),
        new IncludeAssetsPlugin({
            assets: [{
                path: 'dll',
                glob: '*.js',
                globPath: path.join(__dirname, 'dll')
            }],
            append: false
        })
    ]
}

const fontLoader = [['woff', 'application/font-woff'], ['woff2', 'application/font-woff2'], ['otf', 'font/opentype'], ['ttf', 'application/octet-stream'], ['eot', 'application/vnd.ms-fontobject'], ['svg', 'image/svg+xml']]
fontLoader.forEach(font => {
    let extension = font[0]
    let mimetype = font[1]
    config.module.rules.push({
        test: new RegExp(`\\.${extension}$`),
        loader: 'url-loader',
        options: {
            name: 'fonts/[name].[ext]',
            limit: 10000,
            mimetype
        }
    })
})

if (envDevelopment) {
    config.module.rules.push({
        test: /(\.less|\.css)$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }, {
            loader: 'less-loader',
            options: {
                javascriptEnabled: true
            }
        }]
    })
    config.entry.main.push(
        'webpack-hot-middleware/client?path=./__webpack_hmr'
    )
    config.plugins.push(
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    )
}

if (envProduction) {
    config.module.rules.push({
        test: /(\.less|\.css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    minimize: {
                        autoprefixer: {
                            add: true,
                            remove: true,
                            browsers: ['last 2 versions']
                        },
                        discardComments: {
                            removeAll: true
                        },
                        discardUnused: false,
                        mergeIdents: false,
                        reduceIdents: false,
                        safe: true
                    }
                }
            },
            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    })
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'css/main.[chunkhash:5].css',
            chunkFilename: 'css/main.[contenthash:5].css'
        }),
        new CopyWebpackPlugin([{
            from: path.join('dll'),
            to: path.join('dist', 'dll')
        }])
    )
}
module.exports = config