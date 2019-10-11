const router = require('koa-router')()
const controller = require('../controller/index')
const newsHandle = require('../controller/news')
const proHandle = require('../controller/products')

router.get('/', controller.lzlt)

// type 为 产品的分类号 0为 尿素溶液  1为 加注设备
router.get('/product', proHandle.getAllProducts)
router.get('/manager', controller.showManager)
router.get('/story', controller.showStory)

router.get('/news', newsHandle.getnews)

router.get('/product', proHandle.getAllProducts)
router.get('/solution', proHandle.geyAllSolutions)
/*
router.get('/social', async (ctx, next) => {
    await ctx.render('social', {
        title: '社会责任'

    })
})
router.get('/culture', async (ctx, next) => {
    await ctx.render('culture', {
        title: '企业文化'
    })
})

router.get('/honor', async (ctx, next) => {
    await ctx.render('honor', {
        title: '企业荣誉'
    })
})

router.get('/HR', async (ctx, next) => {
    await ctx.render('HR', {
        title: '人力资源'
    })
})
router.get('/develop', async (ctx, next) => {
    await ctx.render('develop', {
        title: '发展历程'
    })
})

router.get('/contact', async (ctx, next) => {
    await ctx.render('ContactUs', {
        title: '联系我们'
    })
})

router.get('/service', async (ctx, next) => {
    await ctx.render('service', {
        title: '服务支持'
    })
})

router.get('/business', async (ctx, next) => {
    await ctx.render('business', {
        title: '招商专区'
    })
})
*/
module.exports = router
