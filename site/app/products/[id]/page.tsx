import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ArrowLeft, ShoppingBag, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  // Mock product data - in a real app this would come from a database
  const product = {
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

  const placeholderImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/products" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={placeholderImages[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
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
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-600">${product.price}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Inquire About This Product
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Heart className="w-5 h-5 mr-2" />
                Save for Later
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <span className="text-lg font-semibold text-blue-600">
                      ${(i + 1) * 99}
                    </span>
                  </div>
                  <Link href={`/products/${i + 10}`}>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
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