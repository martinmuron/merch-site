import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST() {
  try {
    // Check if admin user already exists
    const existingAdmin = await db.adminUser.findUnique({
      where: {
        email: 'admin@merchsite.com'
      }
    })

    if (existingAdmin) {
      return NextResponse.json(
        { message: 'Admin user already exists' },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('123456', 12)

    // Create admin user
    const adminUser = await db.adminUser.create({
      data: {
        email: 'admin@merchsite.com',
        name: 'Admin User',
        hashedPassword,
        role: 'ADMIN'
      }
    })

    return NextResponse.json(
      { 
        message: 'Admin user created successfully',
        email: adminUser.email 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating admin user:', error)
    return NextResponse.json(
      { message: 'Failed to create admin user' },
      { status: 500 }
    )
  }
} 