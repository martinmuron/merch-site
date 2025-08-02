"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "sonner"

export default function AdminSetupPage() {
  const [isSettingUp, setIsSettingUp] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const setupAdmin = async () => {
    setIsSettingUp(true)
    try {
      const response = await fetch('/api/admin/setup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        toast.success(data.message)
        setIsComplete(true)
      } else {
        const data = await response.json()
        toast.error(data.message || 'Failed to setup admin')
      }
    } catch (error) {
      toast.error('Failed to setup admin user')
    } finally {
      setIsSettingUp(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Admin Setup</CardTitle>
          <CardDescription>
            Set up the admin user for your merchandise site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isComplete ? (
            <>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Admin Credentials:</h4>
                <p className="text-sm text-red-700">
                  Email: admin@merchsite.com<br />
                  Password: 123456
                </p>
              </div>
              
              <Button 
                onClick={setupAdmin}
                className="w-full bg-red-700 hover:bg-red-800"
                disabled={isSettingUp}
              >
                {isSettingUp ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Setting up...
                  </>
                ) : (
                  "Create Admin User"
                )}
              </Button>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Admin User Created!
              </h3>
              <p className="text-gray-600 mb-4">
                You can now log in to the admin dashboard.
              </p>
              <Button 
                onClick={() => window.location.href = '/admin/login'}
                className="bg-red-700 hover:bg-red-800"
              >
                Go to Admin Login
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 