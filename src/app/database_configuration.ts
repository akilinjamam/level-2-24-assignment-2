import mongoose from 'mongoose'
import config from './config/index'

const connect = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`database connected successfully`)
  } catch (error) {
    console.log(error)
  }
}

const connection = connect()

export default connection
