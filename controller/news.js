const News = require('../models/news')
const Mongoose = require('mongoose')
const moment = require('moment')

async function getnews(ctx, next) {
    var classify = ctx.query.type
    // console.log(classify)
    var news = await News.where({
        type: classify
    })
    let name = ''
    if (classify === '1') {
        name = '行业新闻'
    } else if (classify === '2') {
        name = '媒体报导'
    } else if (classify === '3') {
        name = '技术交流'
    } else {
        name = '力众蓝天新闻'
        news = await News.find()
    }
    // 根据新闻类别搜索内容 
    // console.log('时间格式处理')
    // var time = news[0].date.toDateString()
    // console.log(time)
    // console.log('类型' + typeof (time))

    await ctx.render('news', {
        title: name,
        news: news
    })
}
// 浏览新闻详情,每次浏览都应该增加浏览次数
async function detail(ctx, next) {
    var id = ctx.query.id
    // console.log(id)

    let _id = Mongoose.Types.ObjectId(id)
    var detail = await News.findOne({
        _id: _id
    })
    // console.log(detail)

    await ctx.render('detail', {
        title: '新闻详情页',
        news: detail
    })
    await News.updateOne({
        _id: _id,
        $inc: { count: 1 }
    })
}
module.exports = {
    getnews,
    detail
}
