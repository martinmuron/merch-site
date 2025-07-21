import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Hardcoded admin user for now
        const adminEmail = "admin@merchsite.com"
        const adminPassword = "123456"
        
        if (credentials.email === adminEmail) {
          // For now, we'll do a simple password comparison
          // In production, you should hash the password properly
          if (credentials.password === adminPassword) {
            return {
              id: "1",
              email: adminEmail,
              name: "Admin User",
              role: "admin",
            }
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/admin/login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
      }
      return session
    }
  }
})

export { handler as GET, handler as POST } 