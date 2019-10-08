const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: '力众蓝天'
    })
})

router.get('/manager', async (ctx, next) => {
    await ctx.render('manager', {
        title: '总经理致辞'
    })
})

router.get('/story', async (ctx, next) => {
    await ctx.render('story', {
        title: '品牌故事'
    })
})

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

module.exports = router
