"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import { toast } from "sonner"
import { Navbar } from "@/components/navbar"

interface Product {
  id: string
  name: string
  description: string
  price: number
  mainImage: string
  category: {
    name: string
  }
  active: boolean
  featured: boolean
  createdAt: string
}

export default function AdminProductsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return
    
    if (!session) {
      router.push("/admin/login")
      return
    }
    
    fetchProducts()
  }, [session, status, router])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/products')
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      } else {
        // If API fails, use mock data as fallback
        setProducts([
          {
            id: "1",
            name: "Custom T-Shirts",
            description: "High-quality branded t-shirts for your business",
            price: 15.99,
            mainImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            category: { name: "Apparel" },
            active: true,
            featured: true,
            createdAt: new Date().toISOString()
          },
          {
            id: "2", 
            name: "Branded Mugs",
            description: "Professional coffee mugs with your company logo",
            price: 8.99,
            mainImage: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400",
            category: { name: "Drinkware" },
            active: true,
            featured: false,
            createdAt: new Date().toISOString()
          },
          {
            id: "3",
            name: "Company Pens",
            description: "Premium pens with custom branding",
            price: 2.99,
            mainImage: "https://images.unsplash.com/photo-1583485088034-697b5bc36b92?w=400",
            category: { name: "Office" },
            active: true,
            featured: false,
            createdAt: new Date().toISOString()
          }
        ])
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      // Use mock data as fallback
      setProducts([
        {
          id: "1",
          name: "Custom T-Shirts",
          description: "High-quality branded t-shirts for your business",
          price: 15.99,
          mainImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
          category: { name: "Apparel" },
          active: true,
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: "2", 
          name: "Branded Mugs",
          description: "Professional coffee mugs with your company logo",
          price: 8.99,
          mainImage: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400",
          category: { name: "Drinkware" },
          active: true,
          featured: false,
          createdAt: new Date().toISOString()
        },
        {
          id: "3",
          name: "Company Pens",
          description: "Premium pens with custom branding",
          price: 2.99,
          mainImage: "https://images.unsplash.com/photo-1583485088034-697b5bc36b92?w=400",
          category: { name: "Office" },
          active: true,
          featured: false,
          createdAt: new Date().toISOString()
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/products/${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        setProducts(products.filter(product => product.id !== id))
        toast.success("Product deleted successfully")
      } else {
        toast.error("Failed to delete product")
      }
    } catch (error) {
      toast.error("Failed to delete product")
    }
  }

  const handleToggleStatus = async (id: string) => {
    try {
      const product = products.find(p => p.id === id)
      if (!product) return

      const response = await fetch(`/api/admin/products/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          active: !product.active
        })
      })
      
      if (response.ok) {
        setProducts(products.map(product => 
          product.id === id 
            ? { ...product, active: !product.active }
            : product
        ))
        toast.success("Product status updated")
      } else {
        toast.error("Failed to update product status")
      }
    } catch (error) {
      toast.error("Failed to update product status")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-red-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
            <p className="text-gray-600 mt-2">Manage your merchandise catalog</p>
          </div>
          <Button 
            onClick={() => router.push("/admin/products/new")}
            className="bg-red-700 hover:bg-red-800"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.filter(p => p.active).length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Featured Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.filter(p => p.featured).length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{new Set(products.map(p => p.category.name)).size}</div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  {product.featured && (
                    <Badge className="bg-yellow-500">Featured</Badge>
                  )}
                  <Badge variant={product.active ? "default" : "secondary"}>
                    {product.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <Badge variant="outline">{product.category.name}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-red-700 hover:bg-red-800"
                    onClick={() => router.push(`/admin/products/${product.id}/edit`)}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleStatus(product.id)}
                  >
                    {product.active ? "Deactivate" : "Activate"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products yet</h3>
            <p className="text-gray-600 mb-4">Get started by adding your first product</p>
            <Button 
              onClick={() => router.push("/admin/products/new")}
              className="bg-red-700 hover:bg-red-800"
            >
              Add Your First Product
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 