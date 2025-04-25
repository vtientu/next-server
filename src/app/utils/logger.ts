import path from 'node:path'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import fs from 'fs'

const logFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'HH:mm:ss DD-MM-YYYY'
  }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`
  })
)

const infoLogDir = path.join(process.cwd(), 'logs', 'info')
const errorLogDir = path.join(process.cwd(), 'logs', 'error')

if (!fs.existsSync(infoLogDir)) fs.mkdirSync(infoLogDir, { recursive: true })
if (!fs.existsSync(errorLogDir)) fs.mkdirSync(errorLogDir, { recursive: true })

const logger = winston.createLogger({
  level: 'debug',
  format: logFormat,
  transports: [
    ...(process.env.NODE_ENV === 'development' ? [new winston.transports.Console()] : []),
    new DailyRotateFile({
      filename: path.join('src', 'logs', 'info', '%DATE%.log'),
      datePattern: 'DD-MM-YYYY',
      maxFiles: '14d',
      zippedArchive: true,
      handleExceptions: true
    }),
    new DailyRotateFile({
      level: 'error',
      filename: path.join('src', 'logs', 'error', '%DATE%.log'),
      datePattern: 'DD-MM-YYYY',
      maxFiles: '14d',
      zippedArchive: true,
      handleExceptions: true
    })
  ]
})

export default logger
