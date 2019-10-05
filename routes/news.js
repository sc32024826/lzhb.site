const router = require('koa-router')()

router.prefix('/news')

router.get('/', async (ctx, next) => {
    await ctx.render('detail', {
        title: '新闻'
    })
})

router.get('/:type', async (ctx, next) => {
    var classfiy = ctx.params.type
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
    await ctx.render('detail', {
        title: name
    })
})

module.exports = router
