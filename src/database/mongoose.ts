import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

class Database {
  private static instance: Database
  private isConnected = false

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  public async connectDB() {
    if (this.isConnected) {
      return
    }

    try {
      if (process.env.NODE_ENV === 'development') {
        mongoose.set('debug', true)
        mongoose.set('debug', { color: true })
      }
      console.log({ MONGODB_URI })

      await mongoose.connect(MONGODB_URI, {
        maxPoolSize: 50 // Tối 50 connections và có thể tái sử dụng connect. Default: 100
      })
      this.isConnected = true
      console.log('Database connected successfully')
    } catch (error) {
      console.error(error)
      throw new Error('Database connection failed')
    }
  }
}

export default Database.getInstance()
