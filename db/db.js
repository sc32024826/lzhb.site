var MongoCient = require('mongodb').MongoClient

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
                if (!limt) {
                    console.log('limt为空');

                    var res = db.collection(collectionName).find(json)

                } else {
                    console.log('limt 不空');

                    var res = db.collection(collectionName).find(json).limit(limit)
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
}
module.exports = Db.getInstance()