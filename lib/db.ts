import { PrismaClient } from '@prisma/client'
import Database from 'better-sqlite3'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create SQLite connection
const sqlite = new Database('db/dev.db')

export const db = globalForPrisma.prisma ?? new PrismaClient({
  datasourceUrl: 'file:db/dev.db',
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
