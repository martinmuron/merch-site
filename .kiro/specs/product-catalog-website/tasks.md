# Project Tasks – Product Catalog Website

> This task list is derived from the Design and Requirements documents. Tick items off (✔️) as they are completed.

## 1. Repository & Version Control
- [x] **Initialize local repo**: ensure the current workspace is a git repository.
- [x] **Set remote origin**: `git remote add origin git@github.com:martinmuron/merch-site.git`.
- [x] **Remove remote contents**: after first commit, force-push to overwrite existing files: `git push -f origin main`.
- [ ] **Set up default branch protection rules** *(optional)*.

## 2. Development Environment
- [x] Install **Node.js ≥18**, **pnpm** or **npm**.
- [x] Install **PostgreSQL client** locally for migrations.
- [x] Install **Railway CLI** and log in.
- [x] Create a new Railway project & **PostgreSQL service** (already added → verify credentials).
- [x] Add `.env` file with:
  - `DATABASE_URL` (from Railway)
  - `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
  - `CLOUDINARY_*` (or Railway file storage variables)

## 3. Next.js Boilerplate & Tooling
- [x] `npx create-next-app@latest merch-site --ts --app --tailwind --eslint`.
- [x] Install **ShadCN UI**: `npx shadcn-ui@latest init` and configure Tailwind theme.
- [x] Install **Prisma** & **@prisma/client**.
- [x] Install **NextAuth.js** & Prisma adapter.
- [x] Configure **Prettier** & **lint-staged** hooks.

## 4. Database & Prisma Setup
- [x] `npx prisma init` → configure `schema.prisma` with PostgreSQL provider.
- [x] Model entities: `Product`, `Category`, `ContactInquiry`, `AdminUser`.
- [x] Run `prisma migrate dev` to generate the initial migration.
- [x] Seed sample data with `prisma db seed`.

## 5. Public Features
### 5.1 Pages
- [x] **Homepage** (`/`): hero, featured products, category nav.
- [x] **Product Catalog** (`/products`): grid, category filter, search.
- [x] **Product Detail** (`/products/[slug]`): gallery, details, related products.
- [x] **Contact** (`/contact`): contact form with validation & success state.

### 5.2 API routes
- [x] `GET /api/products` (filters, pagination).
- [x] `GET /api/products/[id|slug]`.
- [x] `GET /api/categories`.
- [x] `POST /api/contact` → persist inquiry & send notification (email or dashboard).

## 6. Admin Features
- [x] Protect `/admin/**` routes with **NextAuth** (role-based guard).
- [x] **Dashboard** overview widgets.
- [x] **Product CRUD** pages with image upload.
- [x] **Category CRUD** pages.
- [x] **Contact inquiries** list & status update.

## 7. Image/File Storage
- [x] Decide between Railway file storage vs Cloudinary.
- [x] Implement upload endpoint (`/api/admin/upload`).
- [x] Store image URLs in Prisma models.

## 8. Global UI/UX
- [x] Apply Apple-style typography & spacing.
- [x] Configure Tailwind custom colors.
- [x] Add shared components: Navbar, Footer, ProductCard, Button, Input, Dialog.
- [x] Implement loading & error states.

## 9. Error Handling & Validation
- [x] Client-side validation with **React Hook Form + Zod**.
- [x] API error handling with proper HTTP codes.
- [x] Prisma error trapping & logging.

## 10. Testing
- [x] **Unit tests** (Jest + React Testing Library).
- [x] **API tests** (Jest / Supertest).
- [x] **E2E tests** (Playwright) for critical flows.

## 11. CI/CD & Quality Gates
- [x] Configure **GitHub Actions** workflow: install deps, run lint, test, build.
- [x] Add **CodeQL** or similar security scan *(optional)*.
- [x] Enable **Railway GitHub integration** for automatic deploys on main.

## 12. Deployment
- [x] `railway up` to provision environment.
- [x] Set Railway variables (`DATABASE_URL`, etc.).
- [x] Verify build & runtime logs.
- [x] Run DB migrations in Railway: `railway run prisma migrate deploy`.
- [x] Smoke-test production URL.

## 13. Documentation
- [x] Update `README.md` with setup, scripts, and architecture diagram.
- [x] Add API docs (OpenAPI or MD tables).

---
**Legend**: ☐ = pending ✔️ = completed
