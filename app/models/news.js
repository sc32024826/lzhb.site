// 类似于定义数据库 news
let mongoose = require('mongoose')
let schema = mongoose.Schema

let newschema = new schema({
    title:String,   //新闻标题
    date:date,      //新闻发布日期
    count:Int32,   //阅读次数
    author:String,  //作者
    text:String,      //正文
    logo:String,    //新闻logo
    type:Int32    //新闻类别编号

})

let news = mongoose.model('news', newschema)

module.exports = news