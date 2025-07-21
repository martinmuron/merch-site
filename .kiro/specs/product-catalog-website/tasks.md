# Project Tasks – Product Catalog Website

> This task list is derived from the Design and Requirements documents. Tick items off (✔️) as they are completed.

## 1. Repository & Version Control
- [ ] **Initialize local repo**: ensure the current workspace is a git repository.
- [ ] **Set remote origin**: `git remote add origin git@github.com:martinmuron/merch-site.git`.
- [ ] **Remove remote contents**: after first commit, force-push to overwrite existing files: `git push -f origin main`.
- [ ] **Set up default branch protection rules** *(optional)*.

## 2. Development Environment
- [ ] Install **Node.js ≥18**, **pnpm** or **npm**.
- [ ] Install **PostgreSQL client** locally for migrations.
- [ ] Install **Railway CLI** and log in.
- [ ] Create a new Railway project & **PostgreSQL service** (already added → verify credentials).
- [ ] Add `.env` file with:
  - `DATABASE_URL` (from Railway)
  - `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
  - `CLOUDINARY_*` (or Railway file storage variables)

## 3. Next.js Boilerplate & Tooling
- [ ] `npx create-next-app@latest merch-site --ts --app --tailwind --eslint`.
- [ ] Install **ShadCN UI**: `npx shadcn-ui@latest init` and configure Tailwind theme.
- [ ] Install **Prisma** & **@prisma/client**.
- [ ] Install **NextAuth.js** & Prisma adapter.
- [ ] Configure **Prettier** & **lint-staged** hooks.

## 4. Database & Prisma Setup
- [ ] `npx prisma init` → configure `schema.prisma` with PostgreSQL provider.
- [ ] Model entities: `Product`, `Category`, `ContactInquiry`, `AdminUser`.
- [ ] Run `prisma migrate dev` to generate the initial migration.
- [ ] Seed sample data with `prisma db seed`.

## 5. Public Features
### 5.1 Pages
- [ ] **Homepage** (`/`): hero, featured products, category nav.
- [ ] **Product Catalog** (`/products`): grid, category filter, search.
- [ ] **Product Detail** (`/products/[slug]`): gallery, details, related products.
- [ ] **Contact** (`/contact`): contact form with validation & success state.

### 5.2 API routes
- [ ] `GET /api/products` (filters, pagination).
- [ ] `GET /api/products/[id|slug]`.
- [ ] `GET /api/categories`.
- [ ] `POST /api/contact` → persist inquiry & send notification (email or dashboard).

## 6. Admin Features
- [ ] Protect `/admin/**` routes with **NextAuth** (role-based guard).
- [ ] **Dashboard** overview widgets.
- [ ] **Product CRUD** pages with image upload.
- [ ] **Category CRUD** pages.
- [ ] **Contact inquiries** list & status update.

## 7. Image/File Storage
- [ ] Decide between Railway file storage vs Cloudinary.
- [ ] Implement upload endpoint (`/api/admin/upload`).
- [ ] Store image URLs in Prisma models.

## 8. Global UI/UX
- [ ] Apply Apple-style typography & spacing.
- [ ] Configure Tailwind custom colors.
- [ ] Add shared components: Navbar, Footer, ProductCard, Button, Input, Dialog.
- [ ] Implement loading & error states.

## 9. Error Handling & Validation
- [ ] Client-side validation with **React Hook Form + Zod**.
- [ ] API error handling with proper HTTP codes.
- [ ] Prisma error trapping & logging.

## 10. Testing
- [ ] **Unit tests** (Jest + React Testing Library).
- [ ] **API tests** (Jest / Supertest).
- [ ] **E2E tests** (Playwright) for critical flows.

## 11. CI/CD & Quality Gates
- [ ] Configure **GitHub Actions** workflow: install deps, run lint, test, build.
- [ ] Add **CodeQL** or similar security scan *(optional)*.
- [ ] Enable **Railway GitHub integration** for automatic deploys on main.

## 12. Deployment
- [ ] `railway up` to provision environment.
- [ ] Set Railway variables (`DATABASE_URL`, etc.).
- [ ] Verify build & runtime logs.
- [ ] Run DB migrations in Railway: `railway run prisma migrate deploy`.
- [ ] Smoke-test production URL.

## 13. Documentation
- [ ] Update `README.md` with setup, scripts, and architecture diagram.
- [ ] Add API docs (OpenAPI or MD tables).

---
**Legend**: ☐ = pending ✔️ = completed
