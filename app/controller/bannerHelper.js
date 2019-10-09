let banner = require('../models/banner')


// 按条件查询
const find = async (ctx) => {
    let res = await banner.find({ json })
    return res
}
//查询全部
const findall = async (ctx) => {
    let list = await banner.find()
    return list
}
//插入
const insert = async (ctx) => {
    let res = banner.save(obj)

}
// 按条件删除
const del = async (ctx) => {

}
//改
const update = async (ctx) => {

}


module.exports = {
    find,
    findall,
    insert,
    del,
    update
}