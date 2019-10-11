const mongoose = require('mongoose')
const Koa = require('koa')
const fs = require('fs')
const path = require('path')
// 链接数据库一定放在koa前面
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// 获取数据库表对应的js对象所在的路径
const modelsPath = path.join(__dirname, './models')
// 已递归的形式，读取models文件夹下的js模型文件，并require
var walk = function(modelPath) {
    fs
        .readdirSync(modelPath)
        .forEach(function(file) {
            var filePath = path.join(modelPath, '/' + file)
            var stat = fs.statSync(filePath)
            if (stat.isFile()) {
                if (/(.*)\.(js|coffee)/.test(file)) {
                    require(filePath)
                }
            } else if (stat.isDirectory()) {
                walk(filePath)
            }
        })
}

walk(modelsPath)

const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const logger = require('log4js').getLogger()
const render = require('koa-art-template')

const router = require('./routes/index')
const cors = require('koa2-cors')
const app = new Koa()
// 数据库
// const MongoClient = require('mongodb').MongoClient
// const dbConfig = require('./db/config')
// 数据库报错 优化
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// async function startApiService() {
// const client = await MongoClient.connect(dbConfig.url, options)

// const db = client.db(dbConfig.name)
// app.context.$client = client
// app.context.$db = db
// app.use(async(ctx)=>{
//     ctx.db = db
// })

// error handler
onerror(app)

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})

// middle wares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
// app.use(logger())
app.use(cors())

// eslint-disable-next-line no-path-concat
app.use(require('koa-static')(__dirname + '/public'))

// logger
// app.use(async (ctx, next) => {
//     const start = new Date()
//     await next()
//     const ms = new Date() - start
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})
// }

// startApiService()
module.exports = app
