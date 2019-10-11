
async function getnews (ctx, next) {
    var classfiy = ctx.query.type
    console.log(classfiy)
    let name = ''
    if (classfiy === '1') {
        name = '行业新闻'
    } else if (classfiy === '2') {
        name = '媒体报导'
    } else if (classfiy === '3') {
        name = '技术交流'
    } else {
        name = '力众蓝天新闻'
    }
    await ctx.render('news', {
        title: name,
        type: classfiy
    })
}
module.exports = {
    getnews
}
