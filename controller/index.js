const Banner = require('../models/banner')
const News = require('../models/news')

async function lzlt(ctx, next) {
    // 查询banner 图片
    var list = await Banner.find()
    console.log(list)
    // 查询 新闻
    // console.time('start')
    var news = await News.find().limit(4)
    // console.timeEnd('start')
    // console.log(news)

    news.forEach(element => {
        element._id = element._id.toString()
    })

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

module.exports = {
    lzlt,
    showManager,
    showStory
}
