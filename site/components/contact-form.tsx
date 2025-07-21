"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Building2 } from "lucide-react"
import { toast } from "sonner"

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  businessType: z.string().min(1, "Please select your business type"),
  productInterest: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Contact form data:", data)
    
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    
    toast.success("Quote request sent! We'll get back to you within 2 hours.")
  }

  if (isSuccess) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 sm:p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Quote Request Sent!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest. We'll provide a custom quote within 2 hours 
            and follow up with design consultation options.
          </p>
          <Button 
            onClick={() => setIsSuccess(false)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Request Another Quote
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          Request Custom Quote
        </CardTitle>
        <CardDescription>
          Get a personalized quote for your branded merchandise. We'll respond within 2 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input 
                id="firstName" 
                placeholder="John"
                {...register("firstName")}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input 
                id="lastName" 
                placeholder="Doe"
                {...register("lastName")}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input 
              id="company" 
              placeholder="Your Restaurant or Business"
              {...register("company")}
              className={errors.company ? "border-red-500" : ""}
            />
            {errors.company && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.company.message}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@yourbusiness.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+1 (555) 123-4567"
                {...register("phone")}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type *</Label>
            <Select onValueChange={(value) => setValue("businessType", value)}>
              <SelectTrigger className={errors.businessType ? "border-red-500" : ""}>
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="restaurant">Restaurant / Food Service</SelectItem>
                <SelectItem value="office">Office / Corporate</SelectItem>
                <SelectItem value="retail">Retail Store</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="events">Events / Promotional</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.businessType && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.businessType.message}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="productInterest">Product Interest</Label>
              <Select onValueChange={(value) => setValue("productInterest", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select products" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apparel">Apparel (T-shirts, Hats, Aprons)</SelectItem>
                  <SelectItem value="drinkware">Drinkware (Mugs, Water Bottles)</SelectItem>
                  <SelectItem value="office">Office Supplies (Pens, Notebooks)</SelectItem>
                  <SelectItem value="bags">Bags (Tote Bags, Backpacks)</SelectItem>
                  <SelectItem value="marketing">Marketing Materials (Stickers, Flyers)</SelectItem>
                  <SelectItem value="multiple">Multiple Categories</SelectItem>
                  <SelectItem value="custom">Custom Design</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Estimated Quantity</Label>
              <Select onValueChange={(value) => setValue("quantity", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-50">10-50 pieces</SelectItem>
                  <SelectItem value="50-100">50-100 pieces</SelectItem>
                  <SelectItem value="100-500">100-500 pieces</SelectItem>
                  <SelectItem value="500+">500+ pieces</SelectItem>
                  <SelectItem value="ongoing">Ongoing orders</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your project, timeline, and any specific requirements..."
              rows={4}
              {...register("message")}
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.message.message}
              </p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending Request...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Get Custom Quote
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 