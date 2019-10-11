// 类似于定义数据库 bannner表
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let bannerschema = new Schema({
    url: String
})

let banner = mongoose.model('banner', bannerschema, 'banner') // 第三个参数 制定集合,否则会由于自动加s 导致无法查询出数据

module.exports = banner
