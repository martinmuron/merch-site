import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock, Award, Package, Palette } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Get Your Custom Quote
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Ready to create branded merchandise for your business? Let&apos;s discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Business Inquiries</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600">sales@merchsite.com</p>
                  <p className="text-xs sm:text-sm text-gray-500">For quotes and business inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-xs sm:text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Location</h3>
                  <p className="text-sm sm:text-base text-gray-600">123 Business Ave, Suite 100</p>
                  <p className="text-sm sm:text-base text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-sm sm:text-base text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-xs sm:text-sm text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Why Choose Us?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              We specialize in creating high-quality branded merchandise for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="border-0 shadow-lg bg-red-50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3 px-3 sm:px-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-700" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg text-red-900">Quality Materials</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 px-3 sm:px-4">
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">Premium fabrics and materials for lasting quality</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-red-50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3 px-3 sm:px-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-700" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg text-red-900">Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 px-3 sm:px-4">
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">Quick production and delivery for urgent orders</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-red-50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3 px-3 sm:px-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Package className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-700" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg text-red-900">Bulk Pricing</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 px-3 sm:px-4">
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">Competitive rates for large quantity orders</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-red-50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3 px-3 sm:px-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Palette className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-700" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg text-red-900">Custom Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 px-3 sm:px-4">
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">Professional design services included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 