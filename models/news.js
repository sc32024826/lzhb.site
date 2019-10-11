// 类似于定义数据库 news
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let newschema = new Schema({
    title: String, // 新闻标题
    date: { // 新闻发布日期
        type: Date,
        default: Date.now()
    },
    count: Number, // 阅读次数
    author: String, // 作者
    text: String, // 正文
    logo: String, // 新闻logo
    type: Number // 新闻类别编号

})

let news = mongoose.model('news', newschema)

module.exports = news
