const router = require('koa-router')()

router.get('/news', async (ctx, next) => {
    var classfiy = ctx.query.type
    console.log(classfiy)
    let name = ''
    if (classfiy === '1') {
        name = '行业新闻'
    } else if (classfiy === '2') {
        name = '媒体报导'
    } else if (classfiy === '3') {
        name = '技术交流'
    } else {
        name = '力众蓝天新闻'
    }
    await ctx.render('news', {
        title: name,
        type: classfiy
    })
})

router.get('/product', async (ctx, next) => {
    var classfiy = ctx.query.type
    console.log(classfiy)
    let name = ''
    if (classfiy === '2') {
        name = '加注设备系列'
    } else if (classfiy === '1') {
        name = '车用尿素溶液'
    } else {
        name = '所有产品'
    }
    await ctx.render('products', {
        title: name,
        type: classfiy,
        products_list: null
    })
})

router.get('/solution', async (ctx, next) => {
    var classfiy = ctx.query.type
    console.log(classfiy)
    let name = ''
    if (classfiy === '1') {
        name = 'SCR系统解决方案'
    } else if (classfiy === '2') {
        name = '燃油系统解决方案'
    } else if (classfiy === '3') {
        name = '润滑系统决方案'
    } else if (classfiy === '4') {
        name = 'EGR系统解决方案'
    } else {
        name = '解决方案'
    }
    await ctx.render('products', {
        title: name,
        type: classfiy,
        products_list: null
    })
})

module.exports = router
