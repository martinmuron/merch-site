"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ArrowLeft, ShoppingBag, Heart, Share2, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<{
    id: string
    name: string
    description: string
    price: number
    rating: number
    reviews: number
    category: string
    features: string[]
    specifications: Record<string, string>
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      const { id } = await params
      // Mock product data - in a real app this would come from a database
      const productData = {
        id: id,
        name: `Premium Product ${id}`,
        description: "This exceptional product showcases our commitment to quality and innovative design. Crafted with premium materials and attention to detail, it represents the perfect blend of functionality and aesthetic appeal. Whether you're looking for style, performance, or both, this product delivers on all fronts.",
        price: 299,
        rating: 4.8,
        reviews: 127,
        category: "Electronics",
        features: [
          "Premium build quality",
          "Advanced technology",
          "Elegant design",
          "Long-lasting performance",
          "Easy to use"
        ],
        specifications: {
          "Dimensions": "10.5\" x 7.2\" x 0.8\"",
          "Weight": "1.2 lbs",
          "Material": "Aluminum & Glass",
          "Warranty": "2 years",
          "Color": "Space Gray"
        }
      }
      setProduct(productData)
      setLoading(false)
    }
    loadProduct()
  }, [params])

  if (loading || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const placeholderImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Link href="/products" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-3 sm:space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={placeholderImages[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {placeholderImages.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">{product.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-700 rounded-full mr-2 sm:mr-3"></div>
                  <span className="text-xs sm:text-sm text-gray-600">In Stock</span>
                </div>
                <span className="hidden sm:inline text-sm text-gray-500">|</span>
                <span className="text-xs sm:text-sm text-gray-600">Free shipping on orders over $50</span>
              </div>
              
              <div className="flex items-baseline space-x-2 mb-4 sm:mb-6">
                <p className="text-xl sm:text-2xl font-bold text-red-700">{product.price} CZK</p>
                <span className="text-xs sm:text-sm text-gray-500">per unit</span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <Button size="lg" className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-sm sm:text-base">
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-600" />
                    <span>Bulk pricing available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-600" />
                    <span>Custom branding</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                    <div className="w-2 h-2 bg-red-700 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Specifications</h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {Object.entries(product.specifications).map(([key, value]: [string, string]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-sm sm:text-base text-gray-600">{key}</span>
                    <span className="text-sm sm:text-base font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link href="/contact" className="w-full">
                <Button size="lg" className="w-full bg-red-700 hover:bg-red-800 text-sm sm:text-base">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Inquire About This Product
                </Button>
              </Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-sm sm:text-base"
                  onClick={() => {
                    // Save to localStorage for demo purposes
                    const savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]')
                                       if (!savedProducts.find((p: { id: string; name: string; price: number }) => p.id === product.id)) {
                      savedProducts.push({ id: product.id, name: product.name, price: product.price })
                      localStorage.setItem('savedProducts', JSON.stringify(savedProducts))
                      toast.success("Product saved for later!")
                    } else {
                      toast.info("Product already saved!")
                    }
                  }}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Save for Later
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-sm sm:text-base"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: product.name,
                        text: `Check out this product: ${product.name}`,
                        url: window.location.href,
                      })
                    } else {
                      // Fallback: copy to clipboard
                      navigator.clipboard.writeText(window.location.href)
                      toast.success("Link copied to clipboard!")
                    }
                  }}
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 px-4 sm:px-0">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={placeholderImages[i % placeholderImages.length]}
                    alt={`Related Product ${i}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Related Product {i}</CardTitle>
                  <CardDescription>
                    Similar quality and design
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-red-700">
                      {(i + 1) * 99} CZK
                    </span>
                  </div>
                  <Link href={`/products/${i + 10}`}>
                    <Button className="w-full mt-4 bg-red-700 hover:bg-red-800">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 