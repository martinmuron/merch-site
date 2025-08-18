import { PrismaClient } from '../app/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create default categories
  const defaultCategories = [
    { name: 'Apparel', description: 'Clothing and wearable items' },
    { name: 'Drinkware', description: 'Cups, mugs, and beverage containers' },
    { name: 'Office', description: 'Office supplies and stationery' },
    { name: 'Bags', description: 'Bags, backpacks, and carrying items' },
    { name: 'Accessories', description: 'Various accessories and small items' },
    { name: 'Marketing', description: 'Marketing and promotional materials' },
    { name: 'Electronics', description: 'Electronic devices and gadgets' }
  ]

  console.log('📂 Creating default categories...')
  for (const category of defaultCategories) {
    const existingCategory = await prisma.category.findFirst({
      where: { name: category.name }
    })

    if (!existingCategory) {
      await prisma.category.create({
        data: category
      })
      console.log(`✅ Created category: ${category.name}`)
    } else {
      console.log(`⏭️  Category already exists: ${category.name}`)
    }
  }

  // Create admin user
  console.log('👤 Creating admin user...')
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@merchsite.com'
  const adminPassword = process.env.ADMIN_PASSWORD || '123456'
  
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail }
  })

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 12)
    
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        name: 'CURLO Admin',
        hashedPassword,
        role: 'ADMIN'
      }
    })
    console.log(`✅ Created admin user: ${adminEmail}`)
  } else {
    console.log('⏭️  Admin user already exists')
  }

  // Create some sample products
  console.log('📦 Creating sample products...')
  const apparelCategory = await prisma.category.findFirst({
    where: { name: 'Apparel' }
  })

  const drinkwareCategory = await prisma.category.findFirst({
    where: { name: 'Drinkware' }
  })

  const officeCategory = await prisma.category.findFirst({
    where: { name: 'Office' }
  })

  if (apparelCategory && drinkwareCategory && officeCategory) {
    const sampleProducts = [
      {
        name: 'Custom T-Shirts',
        description: 'High-quality branded t-shirts for your business',
        price: 15.99,
        mainImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        categoryId: apparelCategory.id,
        featured: true,
        active: true
      },
      {
        name: 'Branded Mugs',
        description: 'Professional coffee mugs with your company logo',
        price: 8.99,
        mainImage: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
        categoryId: drinkwareCategory.id,
        featured: false,
        active: true
      },
      {
        name: 'Company Pens',
        description: 'Premium pens with custom branding',
        price: 2.99,
        mainImage: 'https://images.unsplash.com/photo-1583485088034-697b5bc36b92?w=400',
        categoryId: officeCategory.id,
        featured: false,
        active: true
      }
    ]

    for (const product of sampleProducts) {
      const existingProduct = await prisma.product.findFirst({
        where: { name: product.name }
      })

      if (!existingProduct) {
        await prisma.product.create({
          data: product
        })
        console.log(`✅ Created product: ${product.name}`)
      } else {
        console.log(`⏭️  Product already exists: ${product.name}`)
      }
    }
  }

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 