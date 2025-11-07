import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building2, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Custom Branded Products
              <span className="block text-red-700 mt-1 sm:mt-2">for Your Business</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Professional merchandise solutions for restaurants, offices, and businesses. 
              High-quality branded products that represent your company with style.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
              <Link href="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Browse Products
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center group px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-red-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Business Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Custom branded products for restaurants, offices, and retail businesses</p>
            </div>
            <div className="text-center group px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-red-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">High-quality materials and professional printing for lasting impressions</p>
            </div>
            <div className="text-center group px-4 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-red-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Bulk Orders</h3>
              <p className="text-gray-600">Competitive pricing for large orders and ongoing business relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Popular Business Products
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Our most requested items for restaurants, offices, and promotional campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Business Product Cards */}
            {[
              {
                id: 1,
                name: "Custom T-Shirts",
                description: "Premium cotton shirts with your logo",
                price: "299 CZK",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
                category: "Apparel"
              },
              {
                id: 2,
                name: "Branded Mugs",
                description: "Ceramic mugs perfect for coffee shops",
                price: "199 CZK",
                image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop&crop=center",
                category: "Drinkware"
              },
              {
                id: 3,
                name: "Logo Pens",
                description: "Professional pens with custom branding",
                price: "49 CZK",
                image: "https://images.unsplash.com/photo-1583485088034-697b5bc36b92?w=400&h=400&fit=crop&crop=center",
                category: "Office"
              }
            ].map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden transform hover:-translate-y-1">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3 px-4 sm:px-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-red-700 font-medium">{product.category}</span>
                    <span className="text-base sm:text-lg font-semibold text-red-700">
                      {product.price}
                    </span>
                  </div>
                  <CardTitle className="text-base sm:text-lg leading-tight">{product.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 px-4 sm:px-6">
                  <Link href="/contact">
                    <Button className="w-full mt-3 sm:mt-4 bg-red-700 hover:bg-red-800 text-sm sm:text-base transform hover:scale-105 transition-all duration-200">
                      Get Quote
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-700 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Ready to Brand Your Business?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-red-100 mb-6 sm:mb-8 leading-relaxed px-4 max-w-3xl mx-auto">
            Let&apos;s create custom merchandise that represents your brand perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg bg-white text-red-700 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg border-2 border-white bg-transparent text-white hover:bg-white hover:text-red-700 transform hover:scale-105 transition-all duration-200">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
