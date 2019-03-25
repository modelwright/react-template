const express = require('express')
const webpack = require('webpack')
const opn = require('opn')
const webpackDevMiddleware = require('webpack-dev-middleware') //使用内存通过watch mode监听资源的变更，然后自动打包
const webpackHotMiddleware = require('webpack-hot-middleware') //打包之后更新在浏览器
const proxy = require('http-proxy-middleware');
const webpackConfig = require('./webpack.config.js')
const compression = require('compression')
const app = express()
const compiler = webpack(webpackConfig)

app.use(compression({ filter: shouldCompress }))
function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
      return false
    }
    return compression.filter(req, res)
}

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    lazy: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'errors-only'
})
devMiddleware.waitUntilValid(() => {
    opn('http://localhost:' + 9000)
})

const hotMiddleware = webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    log: false
})

app.use('/consumer/*',proxy({target: 'http://guguda.net/',changeOrigin: true}));

app.get('/index.html', function(req,res){
    //  res.sendFile(__dirname+'/public/index.html');
     console.log(222222222)
});

app.use(hotMiddleware)
app.use(devMiddleware)
app.use(express.static(__dirname))

app.listen(9000, () => {

})