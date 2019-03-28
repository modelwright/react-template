const webpack = require('webpack')
const chalk   = require('chalk')
const config  = require('../config/webpack.pro.config')

webpack(config).run((err, stats) => {

    process.stdout.write(stats.toString({
        colors       : true,
        modules      : false,
        children     : false,
        chunks       : false,
        chunkModules : false,
        timings      : false
    }) + '\n\n')

    if (err || stats.hasErrors()) {
        console.log(chalk.red('  Webpack打包错误！\n'))
    } else {
        console.log('Webpack打包成功！ cd dist \n')
    }

})
