const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const logger = require('koa-logger')
const render = require('koa-art-template')
const path = require('path')
const fs = require('fs')
const cors = require('koa2-cors')


// error handler
onerror(app)

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})

// middlewares
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

// routes 遍历routers文件夹下内容  
fs.readdirSync('./routes').forEach(route=> {
    let api = require(`./routes/${route}`)  //需要注意此处的符号 ` 为数字1前边的按键  而非单引号
    // console.log(`${route}`)
    app.use(api.routes(), api.allowedMethods())
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})


module.exports = app
