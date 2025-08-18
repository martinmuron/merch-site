# CURLO - Business Merchandise Catalog

A professional, modern merchandise catalog website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, designed specifically for B2B customers. Perfect for restaurants, offices, and businesses looking for custom branded products. This is a pure catalog website with no checkout functionality - designed to showcase products and facilitate quote requests.

![CURLO Preview](https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop)

## ✨ Features

- **Professional Design**: Clean, business-focused design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Business Catalog**: Browse merchandise with filtering and search capabilities
- **Product Details**: Detailed product pages with specifications and pricing
- **Quote System**: Form validation and success states for quote requests
- **Admin Dashboard**: Complete admin panel for product and category management
- **Image Upload**: Cloudinary integration for product image management
- **Authentication**: NextAuth.js integration for admin access
- **Database**: PostgreSQL with Prisma ORM for data persistence
- **Error Handling**: Graceful error boundaries and 404 pages
- **Performance**: Optimized images and fast loading times
- **SEO Ready**: Meta tags and structured data for search engines

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Image Storage**: Cloudinary
- **Deployment**: Railway

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/martinmuron/merch-site.git
   cd merch-site/site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file with the following variables:
   DATABASE_URL="postgresql://username:password@localhost:5432/merchandise_site"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key-here"
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run seed-admin
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)
   
   **Admin Access**: Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
   - Credentials are configured via environment variables (ADMIN_EMAIL and ADMIN_PASSWORD)

## 🏗️ Project Structure

```
site/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Page components
│   ├── api/               # API routes (if needed)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # ShadCN UI components
│   ├── navbar.tsx        # Navigation component
│   ├── contact-form.tsx  # Contact form with validation
│   ├── loading.tsx       # Loading states
│   └── error-boundary.tsx # Error handling
├── lib/                  # Utility functions
│   ├── db.ts            # Database client
│   └── utils.ts         # Helper functions
├── types/               # TypeScript type definitions
└── prisma/              # Database schema (ready for future use)
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) - Used for buttons and accents
- **Secondary**: Gray scale - Used for text and backgrounds
- **Success**: Green (#16a34a) - Used for success states
- **Error**: Red (#dc2626) - Used for error states

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Blue primary, outline secondary
- **Forms**: Clean inputs with validation states
- **Navigation**: Sticky header with backdrop blur

## 📱 Pages

### Public Pages

#### Homepage (`/`)
- Hero section with call-to-action
- Featured products showcase
- Company information and contact CTA

#### Products (`/products`)
- Product grid with filtering
- Search functionality
- Pagination support
- Category filtering

#### Product Detail (`/products/[id]`)
- Product image gallery
- Detailed specifications
- Related products
- Contact inquiry button

#### Contact (`/contact`)
- Contact form with validation
- Company information
- Business hours
- Success/error states

### Admin Pages

#### Admin Dashboard (`/admin`)
- Overview statistics
- Quick actions for product management
- Navigation to product and category management

#### Product Management (`/admin/products`)
- Product list with search and filters
- Add/Edit product form with image upload
- Delete confirmation modals
- Status toggle functionality

#### Category Management (`/admin/categories`)
- Category list and CRUD operations
- Category assignment interface

#### Admin Login (`/admin/login`)
- Secure authentication for admin access

### Error Pages
- Custom error page
- Navigation options
- User-friendly messaging

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run seed-admin   # Seed admin user and sample data
```

### Adding New Components

1. Create component in `components/` directory
2. Use TypeScript for type safety
3. Follow ShadCN UI patterns
4. Add proper error handling
5. Test on multiple screen sizes

### Styling Guidelines

- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic color names
- Optimize for accessibility

## 🚀 Deployment

### Railway Deployment

This project is configured for Railway deployment:

1. **Connect to Railway**
   ```bash
   railway login
   railway link
   ```

2. **Deploy**
   ```bash
   railway up
   ```

3. **Environment Variables**
   Set the following in Railway:
   - `DATABASE_URL` - PostgreSQL connection string
   - `NEXTAUTH_SECRET` - NextAuth.js secret key
   - `NEXTAUTH_URL` - Your production URL
   - `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
   - `CLOUDINARY_API_KEY` - Your Cloudinary API key
   - `CLOUDINARY_API_SECRET` - Your Cloudinary API secret

### Build Process

The build process includes:
- TypeScript compilation
- ESLint checking
- Static optimization
- Image optimization
- Bundle analysis

## 🔮 Future Enhancements

### Planned Features
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Advanced product filtering
- [ ] Bulk product import/export
- [ ] Email notifications for inquiries
- [ ] Product variants and options

### Current Features
- ✅ Database integration with Prisma
- ✅ Admin dashboard for content management
- ✅ Product search and filtering
- ✅ Image upload functionality with Cloudinary
- ✅ Authentication system
- ✅ Contact inquiry management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful component library
- **Lucide** - Icon library
- **Unsplash** - Placeholder images

---

**Built with ❤️ using Next.js and Tailwind CSS**

Visit the live site: [merchandise-site-production.up.railway.app](https://merchandise-site-production.up.railway.app)
