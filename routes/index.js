const router = require('koa-router')()
const DB = require('../db/db')

router.get('/', async (ctx, next) => {
    //查询banner 图片
    let list = await DB.find('banner', {})

    // 查询 新闻
    var news = await DB.find('news', {}, 4)
    // console.log('数据库查询结果:');
    
    // console.log(news)                                   //打印数据 有一条数据为undefined  不明所以

    // 将objectid 转成字符串
    news.forEach(element => {
        element._id = element._id.toString()
    });

    let topvalue = news.shift() //删除数组的第一个元素 并返回该元素
    // console.log(typeof(topvalue));
    
    // console.log(news);
    
    // news.push(topvalue)
    // console.error('在数组末尾push 之前删除的元素:');
    
    // console.log(news);
    
    // news.shift()
    // console.log('再次移除数组首位元素:');
    
    // console.log(news);
    
    
    await ctx.render('index', {
        title: '力众蓝天',
        banners: list,
        top: topvalue,
        news: news
    })
})


router.get('/product/:type', async (ctx, next) => {
    let type = ctx.params.type
    console.log(type);

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
