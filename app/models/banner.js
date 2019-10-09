// 类似于定义数据库 bannner表
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let bannerschema = new Schema({
    url:String
})

let Banner = mongoose.model('banner', bannerschema)

module.exports = Banner