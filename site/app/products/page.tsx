import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingBag, Star, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const businessProducts = [
    {
      id: 1,
      name: "Custom T-Shirts",
      description: "Premium cotton shirts with your company logo",
      price: "$12.99",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Branded Mugs",
      description: "Ceramic mugs perfect for coffee shops and offices",
      price: "$8.99",
      category: "Drinkware",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 3,
      name: "Logo Pens",
      description: "Professional pens with custom branding",
      price: "$2.99",
      category: "Office",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b92?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 4,
      name: "Custom Hats",
      description: "Embroidered caps for outdoor businesses",
      price: "$15.99",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 5,
      name: "Water Bottles",
      description: "Reusable bottles with your brand",
      price: "$18.99",
      category: "Drinkware",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 6,
      name: "Notebooks",
      description: "Custom notebooks for meetings and events",
      price: "$6.99",
      category: "Office",
      image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 7,
      name: "Tote Bags",
      description: "Eco-friendly bags with your logo",
      price: "$9.99",
      category: "Bags",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 8,
      name: "Keychains",
      description: "Custom keychains for promotional giveaways",
      price: "$4.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 9,
      name: "Mouse Pads",
      description: "Custom mouse pads for office branding",
      price: "$7.99",
      category: "Office",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 10,
      name: "Aprons",
      description: "Restaurant aprons with your logo",
      price: "$22.99",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 11,
      name: "Stickers",
      description: "Custom stickers for packaging and marketing",
      price: "$1.99",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 12,
      name: "USB Drives",
      description: "Custom USB drives for tech companies",
      price: "$14.99",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Business Merchandise Catalog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Professional branded products for restaurants, offices, and promotional campaigns. 
            Bulk pricing available for large orders.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="apparel">Apparel</SelectItem>
                <SelectItem value="drinkware">Drinkware</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="bags">Bags</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {businessProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden transform hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                </div>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: product.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {Array.from({ length: 5 - product.rating }, (_, i) => (
                      <Star key={i + product.rating} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-blue-600">
                    {product.price}
                  </span>
                </div>
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:block">
              Previous
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:block">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 