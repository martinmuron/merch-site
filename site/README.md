# MerchSite - Premium Product Catalog

A beautiful, modern product catalog website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, featuring Apple-style design and smooth animations. This is a pure catalog website with no checkout functionality - designed to showcase products and facilitate customer inquiries.

![MerchSite Preview](https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop)

## ✨ Features

- **Beautiful Design**: Apple-inspired minimalistic design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Product Catalog**: Browse products with filtering and search capabilities
- **Product Details**: Detailed product pages with image galleries and specifications
- **Contact System**: Form validation and success states for customer inquiries
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
- **Deployment**: Railway
- **Database**: PostgreSQL (ready for future use)

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
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

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

### Homepage (`/`)
- Hero section with call-to-action
- Featured products showcase
- Company information and contact CTA

### Products (`/products`)
- Product grid with filtering
- Search functionality
- Pagination support
- Category filtering

### Product Detail (`/products/[id]`)
- Product image gallery
- Detailed specifications
- Related products
- Contact inquiry button

### Contact (`/contact`)
- Contact form with validation
- Company information
- Business hours
- Success/error states

### 404 Page
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
npm run type-check   # Run TypeScript check
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
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
   - `DATABASE_URL` (for future database integration)

### Build Process

The build process includes:
- TypeScript compilation
- ESLint checking
- Static optimization
- Image optimization
- Bundle analysis

## 🔮 Future Enhancements

### Planned Features
- [ ] Database integration with Prisma
- [ ] Admin dashboard for content management
- [ ] Product search and filtering
- [ ] Image upload functionality
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] PWA capabilities

### Database Schema (Ready)
The project includes a complete Prisma schema for:
- Products with categories
- Contact inquiries
- Admin users
- User roles and permissions

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
