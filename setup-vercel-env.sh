#!/bin/bash

# Vercel environment variables setup script

echo "Setting up Vercel environment variables..."

# Database URL
echo "postgresql://neondb_owner:npg_1XZvExghT7Ob@ep-purple-dust-a2f18bec-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require" | npx vercel env add DATABASE_URL production 2>/dev/null || echo "DATABASE_URL already exists"

# NextAuth Secret
echo "RmcH44KjGnAbHhAzrvNtvyvQS0sp3aZuYmYTvANxCZU=" | npx vercel env add NEXTAUTH_SECRET production 2>/dev/null || echo "NEXTAUTH_SECRET already exists"

# NextAuth URL
echo "https://merch-site.vercel.app" | npx vercel env add NEXTAUTH_URL production 2>/dev/null || echo "NEXTAUTH_URL already exists"

echo "Environment variables setup complete!"
echo "Please trigger a redeployment for changes to take effect."