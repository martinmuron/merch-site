import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, productId } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create contact inquiry
    const inquiry = await db.contactInquiry.create({
      data: {
        name,
        email,
        message,
        productId: productId || null
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Contact inquiry submitted successfully',
      inquiry
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating contact inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact inquiry' },
      { status: 500 }
    )
  }
} 