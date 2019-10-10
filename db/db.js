const Mongodb = require('mongodb')
var MongoCient = Mongodb.MongoClient
var ObjectID = Mongodb.ObjectID

var config = require('./config')

class Db {
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db()
        }
        return Db.instance
    }

    constructor() {
        this.dbClient = ''
        this.connect()
    }

    connect() {
        let _that = this
        return new Promise((resolve, reject) => {
            if (!_that.dbClient) {                                        //如果dbclient对象不存在 
                MongoCient.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {           //则 连接数据库
                    if (err) {
                        reject(err)
                    } else {
                        _that.dbClient = client.db(config.name)         //将连接完成的数据库对象赋值给_that.dbclient
                        resolve(_that.dbClient)
                    }
                })
            } else {                                                       //存在 就直接返回数据库对象
                resolve(_that.dbClient)
            }
        })
    }
    // 查找 集合 条件 limt
    find(collectionName, json, limit) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                if (!limit) {                //根据是否携带limit参数来判断调用哪个检索方法

                    var res =  db.collection(collectionName).find(json)

                } else {

                    var res =  db.collection(collectionName).find(json).limit(limit)
                }
                res.toArray((err, docs) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(docs)
                    }
                })
            })

        })
    }
    // 新增对象  集合  obj
    insert(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).insertOne(json,(err,re)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(re)
                    }
                })                
            })
        })
    }
    //删除对象
    remove(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).removeOne(json,(err,re)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(re)
                    }
                })
            })
        })
    }
    //修改对象
    update(collectionName,json1,json2){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).updateOne(json1,{$set:json2},(err,re)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(re)
                    }
                })
            })
        })
        
    }
    //查询id
    getobjectid(id){
        return new ObjectID(id)
    }
}
module.exports = Db.getInstance()