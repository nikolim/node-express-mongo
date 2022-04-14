const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://173.18.0.2:27017'
const dbName = 'store'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

const insertData = (item) => {
  const collection = db.collection('data')
  return collection.insertOne(item)
}

const getData = () => {
  const collection = db.collection('data')
  return collection.find({}).toArray()
}


module.exports = { init, insertData, getData }
