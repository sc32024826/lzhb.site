const Product = require('../models/product')

async function getAllProducts(ctx, next) {
    var classfiy = ctx.query.type // products?type=1   classfy=  'type=1'

    var list = await Product.where({ 
        type: classfiy,
        isso: false
    }).limit(30)
    // tudo 
    // 分页查询
    let name = ''
    if (classfiy === '2') {
        name = '加注设备系列'
    } else if (classfiy === '1') {
        name = '车用尿素溶液'
    } else {
        name = '所有产品'
    }
    await ctx.render('products', {
        title: name,
        type: classfiy,
        products_list: list
    })
}
async function geyAllSolutions(ctx, next) {
    var classfiy = ctx.query.type

    let name = ''
    if (classfiy === '1') {
        name = 'SCR系统解决方案'
    } else if (classfiy === '2') {
        name = '燃油系统解决方案'
    } else if (classfiy === '3') {
        name = '润滑系统决方案'
    } else if (classfiy === '4') {
        name = 'EGR系统解决方案'
    } else {
        name = '解决方案'
    }
    await ctx.render('products', {
        title: name,
        type: classfiy,
        products_list: null
    })
}

module.exports = {
    getAllProducts,
    geyAllSolutions
}
