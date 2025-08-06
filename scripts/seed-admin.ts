import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Check if admin user already exists
  const existingAdmin = await prisma.adminUser.findUnique({
    where: {
      email: 'admin@merchsite.com'
    }
  })

  if (existingAdmin) {
    console.log('Admin user already exists')
    return
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash('123456', 12)

  // Create admin user
  const adminUser = await prisma.adminUser.create({
    data: {
      email: 'admin@merchsite.com',
      name: 'Admin User',
      hashedPassword,
      role: 'ADMIN'
    }
  })

  console.log('Admin user created:', adminUser.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 