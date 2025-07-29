import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, ArrowRight, Building2, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Custom Branded Products
              <span className="block text-red-700 mt-2">for Your Business</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Professional merchandise solutions for restaurants, offices, and businesses. 
              High-quality branded products that represent your company with style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/products">
                <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-6 sm:px-8 py-3 border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-purple-50/50" />
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.1)_2px,transparent_2px)] bg-[length:60px_60px]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Building2 className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Solutions</h3>
              <p className="text-gray-600">Custom branded products for restaurants, offices, and retail businesses</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Award className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and professional printing for lasting impressions</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Users className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bulk Orders</h3>
              <p className="text-gray-600">Competitive pricing for large orders and ongoing business relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Popular Business Products
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Our most requested items for restaurants, offices, and promotional campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Business Product Cards */}
            {[
              {
                name: "Custom T-Shirts",
                description: "Premium cotton shirts with your logo",
                price: "299 CZK",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
                category: "Apparel"
              },
              {
                name: "Branded Mugs",
                description: "Ceramic mugs perfect for coffee shops",
                price: "199 CZK",
                image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
                category: "Drinkware"
              },
              {
                name: "Logo Pens",
                description: "Professional pens with custom branding",
                price: "49 CZK",
                image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b92?w=400&h=400&fit=crop",
                category: "Office"
              }
            ].map((product, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden transform hover:-translate-y-1">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-red-700 font-medium">{product.category}</span>
                    <span className="text-lg font-semibold text-red-700">
                      {product.price}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href="/contact">
                    <Button className="w-full mt-4 bg-red-700 hover:bg-red-800 transform hover:scale-105 transition-all duration-200">
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-700 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Brand Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-6 sm:mb-8 leading-relaxed">
            Let&apos;s create custom merchandise that represents your brand perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-6 sm:px-8 py-3 bg-white text-red-700 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" className="px-6 sm:px-8 py-3 border-2 border-white bg-transparent text-white hover:bg-white hover:text-red-700 transform hover:scale-105 transition-all duration-200">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">MerchSite</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional branded merchandise for businesses.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
