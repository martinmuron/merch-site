import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@merchsite.com'
  const adminPassword = process.env.ADMIN_PASSWORD || '123456'

  // Check if admin user already exists
  const existingAdmin = await prisma.adminUser.findUnique({
    where: {
      email: adminEmail
    }
  })

  if (existingAdmin) {
    console.log('Admin user already exists')
    return
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(adminPassword, 12)

  // Create admin user
  const adminUser = await prisma.adminUser.create({
    data: {
      email: adminEmail,
      name: 'CURLO Admin',
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