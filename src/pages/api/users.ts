import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDb: Db = null

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = url.parse(uri).pathname.substr(1)

  const db = client.db(dbName)

  cachedDb = db

  return db
}

export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('users')

  return new Promise((resolve, reject) => {
    collection
      .find()
      .sort({ totalExp: -1 })
      .toArray((err, docs) => {
        if (err)
          return response
            .status(400)
            .json({ success: false, error: reject(err) })

        return response.status(200).json({ success: true, users: docs })
      })
  })
}
