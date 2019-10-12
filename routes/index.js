const router = require('koa-router')()
const indexHandle = require('../controller/index')
const newsHandle = require('../controller/news')
const proHandle = require('../controller/products')

router.get('/', indexHandle.lzlt)
router.get('/manager', indexHandle.showManager)
router.get('/story', indexHandle.showStory)
router.get('/social', indexHandle.showSocial)
router.get('/culture', indexHandle.showCulture)
router.get('/honor', indexHandle.showHonor)
router.get('/HR', indexHandle.showHR)
router.get('/develop', indexHandle.showDevelop)
router.get('/contact', indexHandle.showContact)
router.get('/service', indexHandle.showService)
router.get('/business', indexHandle.showBusiness)

// type 为 产品的分类号 0为 尿素溶液  1为 加注设备
router.get('/product', proHandle.getAllProducts)
router.get('/solution', proHandle.geyAllSolutions)
router.get('/detail', proHandle.detail)

router.get('/news', newsHandle.getnews)
router.get('/new_detail', newsHandle.detail)

module.exports = router
