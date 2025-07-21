"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track.
            </p>
          </div>

          <Card className="max-w-md mx-auto border-0 shadow-lg">
            <CardHeader>
              <CardTitle>What would you like to do?</CardTitle>
              <CardDescription>
                Choose an option below to continue browsing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Products
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 