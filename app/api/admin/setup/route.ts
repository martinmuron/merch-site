import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { message: 'Admin credentials not configured' },
        { status: 500 }
      )
    }

    // Check if admin user already exists
    const existingAdmin = await db.adminUser.findUnique({
      where: {
        email: adminEmail
      }
    })

    if (existingAdmin) {
      return NextResponse.json(
        { message: 'Admin user already exists' },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 12)

    // Create admin user
    const adminUser = await db.adminUser.create({
      data: {
        email: adminEmail,
        name: 'CURLO Admin',
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