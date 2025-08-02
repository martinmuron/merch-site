import { NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// File upload limits
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      )
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { 
          error: "Invalid file type. Please upload a JPEG, PNG, WebP, or GIF image.",
          allowedTypes: ALLOWED_TYPES
        },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { 
          error: `File too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)}MB.`,
          maxSize: MAX_FILE_SIZE,
          fileSize: file.size
        },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Cloudinary with additional optimizations
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "merchsite-products",
          resource_type: "auto",
          transformation: [
            { width: 1200, height: 1200, crop: "limit" }, // Max dimensions
            { quality: "auto:good" }, // Optimize quality
            { format: "auto" } // Auto-format (WebP if supported)
          ],
          eager: [
            { width: 400, height: 400, crop: "fill", gravity: "auto" }, // Thumbnail
            { width: 800, height: 800, crop: "limit" } // Medium size
          ],
          eager_async: true
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)
    })

    return NextResponse.json({
      success: true,
      url: (result as { secure_url: string; public_id: string }).secure_url,
      public_id: (result as { secure_url: string; public_id: string }).public_id,
      fileSize: file.size,
      fileName: file.name
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    )
  }
} 