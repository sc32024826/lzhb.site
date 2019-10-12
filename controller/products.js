const Product = require('../models/product')
const Mongoose = require('mongoose')

async function getAllProducts(ctx, next) {
    var classify = ctx.query.type // products?type=1   classfy=  'type=1'
    console.log(classify)
    // 根据情况可分为 classify 为空 =0 =1 三种情况
    var list = await Product.where({
        type: classify,
        isso: false
    }).limit(30)
    // tudo 
    // 分页查询
    let name = ''
    if (classify === '1') {
        name = '加注设备系列'
    } else if (classify === '0') {
        name = '车用尿素溶液'
    } else {
        name = '所有产品'
        list = await Product.where({
            isso: false
        }).limit(30)
    }

    await ctx.render('products', {
        title: name,
        type: classify,
        products_list: list
    })
}

// 解决方案
async function geyAllSolutions(ctx, next) {
    var classfiy = ctx.query.type
    var list = await Product.where({
        classfiy: classfiy,
        isso: true
    }).limit(30)
    // tudo 
    // 分页查询
    let name = ''
    if (classfiy === '0') {
        name = 'SCR系统解决方案'
    } else if (classfiy === '1') {
        name = '燃油系统解决方案'
    } else if (classfiy === '2') {
        name = '润滑系统决方案'
    } else if (classfiy === '3') {
        name = 'EGR系统解决方案'
    } else {
        name = '解决方案'
        list = await Product.where({
            isso: true
        }).limit(30)
    }

    await ctx.render('products', {
        title: name,
        type: classfiy,
        products_list: list
    })
}
async function detail(ctx, next) {
    var id = ctx.query.id
    var objID = Mongoose.Types.ObjectId(id)
    var res = await Product.findOne({
        _id: objID
    })
    console.log(res)

    await ctx.render('detail', {
        title: '产品详情页',
        product: res
    })
    
    await Product.updateOne({
        _id: objID,
        $inc: { count: 1 }
    })

}
module.exports = {
    getAllProducts,
    geyAllSolutions,
    detail
}
