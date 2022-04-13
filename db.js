const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
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
