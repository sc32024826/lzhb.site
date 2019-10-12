// 类似于定义数据库 news
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let productschema = new Schema({
    name: String, // 产品名称
    url: String, // 产品图片地址
    date: {
        type: Date, // 产品发布日期
        default: Date.now()
    },
    count: Number, // 阅读次数
    author: String, // 文章作者
    text: String, // 正文
    type: Number, // 产品类别编号
    effect: String, // 产品简介
    specification: String, // 产品规格
    isso: Boolean, // 是否为解决方案
    classify: Number // 解决方案分类编号
})

let product = mongoose.model('products', productschema, 'products')

module.exports = product
