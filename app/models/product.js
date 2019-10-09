// 类似于定义数据库 news
let mongoose = require('mongoose')
let schema = mongoose.Schema

let productschema = new schema({
    name:String,    //产品名称
    url:String,     //产品图片地址
    date:date,      //产品发布日期
    count:Integer,   //阅读次数
    author:String,  //文章作者
    text:code,      //正文
    type:Integer,    //产品类别编号
    effect:String,      //产品简介
    specification:String,   //产品规格
    isso:Boolean,   //是否为解决方案
    classify:Integer,    //解决方案分类编号


})

let product = mongoose.model('product', productschema)

module.exports = product