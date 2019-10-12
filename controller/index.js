const Banner = require('../models/banner')
const News = require('../models/news')

async function lzlt(ctx, next) {
    // 查询banner 图片
    var list = await Banner.find()
    // console.log(list)
    // 查询 新闻
    // console.time('start')
    var news = await News.find().limit(4)
    // console.timeEnd('start')
    // console.log(news)

    let topvalue = news.shift() // 删除数组的第一个元素 并返回该元素

    await ctx.render('index', {
        title: '力众蓝天',
        banners: list,
        top: topvalue,
        news: news
    })
}

async function showManager(ctx, next) {
    await ctx.render('manager', {
        title: '总经理致辞'
    })
}
async function showStory(ctx, next) {
    await ctx.render('story', {
        title: '品牌故事'
    })
}
async function showSocial(ctx, next) {
    await ctx.render('social', {
        title: '社会责任'

    })
}
async function showCulture(ctx, next) {
    await ctx.render('culture', {
        title: '企业文化'
    })
}
async function showHonor(ctx, next)  {
    await ctx.render('honor', {
        title: '企业荣誉'
    })
}
async function showHR(ctx, next)  {
    await ctx.render('HR', {
        title: '人力资源'
    })
}
async function showDevelop(ctx, next) {
    await ctx.render('develop', {
        title: '发展历程'
    })
}
async function showContact(ctx, next)  {
    await ctx.render('ContactUs', {
        title: '联系我们'
    })
}
async function showService(ctx, next)  {
    await ctx.render('service', {
        title: '服务支持'
    })
}
async function showBusiness(ctx, next)  {
    await ctx.render('business', {
        title: '招商专区'
    })
}

module.exports = {
    lzlt,
    showManager,
    showStory,
    showSocial,
    showCulture,
    showHonor,
    showHR,
    showDevelop,
    showContact,
    showService,
    showBusiness
}
