const webpack = require('webpack')
const chalk   = require('chalk')
const config  = require('../config/webpack.dll.config')

webpack(config).run((err, stats) => {
    if (err || stats.hasErrors()) {
        console.log(chalk.red('  Webpack 生成dll失败！\n'))
    } else {
        console.log(chalk.green('  Webpack 生成dll成功！ cd dll \n'))
    }
})
