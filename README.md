# HRMS Frontend

> **Human Resource Management System — Next.js Frontend**

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

## Overview

Frontend application for the HRMS platform built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It covers attendance, leave, employee onboarding, resignation, transfer, salary configuration & processing, master data, dashboards and reporting.

**Backend Repo:** [HRMS_BE](https://github.com/DhvanitDodiyatatva/HRMS_BE)

---

## Technology Stack

| Technology      | Version | Purpose                         |
|-----------------|---------|---------------------------------|
| Next.js         | 15.x    | React framework (App Router)    |
| TypeScript      | 5.x     | Type safety                     |
| Tailwind CSS    | 3.x     | Utility-first styling           |
| React Query     | 5.x     | Server state management         |
| Zustand         | 4.x     | Client state management         |
| React Hook Form | 7.x     | Form management                 |
| Zod             | 3.x     | Schema validation               |
| Axios           | 1.x     | HTTP client                     |
| Recharts        | 2.x     | Data visualizations             |
| date-fns        | 3.x     | Date utilities                  |

---

## Folder Structure

```
HRMS_FE/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (auth)/                 # Unauthenticated route group
│   │   │   ├── login/
│   │   │   └── logout/
│   │   └── (dashboard)/            # Protected route group
│   │       ├── layout.tsx          # AppShell (Sidebar + Navbar + Breadcrumbs)
│   │       ├── hr-dashboard/
│   │       ├── employee-dashboard/
│   │       ├── attendance/
│   │       ├── leave/
│   │       ├── resignation/
│   │       ├── salary-configuration/
│   │       ├── salary-processing/
│   │       ├── employee-onboarding/
│   │       ├── employee-transfer/
│   │       ├── master-data/
│   │       │   ├── blood-group/
│   │       │   ├── caste-category/
│   │       │   ├── designation/
│   │       │   ├── employee-type/
│   │       │   ├── employment-title/
│   │       │   ├── employment-type/
│   │       │   ├── gender/
│   │       │   ├── holiday/
│   │       │   ├── marital-status/
│   │       │   ├── operational-department/
│   │       │   ├── physical-handicap-type/
│   │       │   └── religion/
│   │       ├── reporting/
│   │       └── settings/
│   ├── components/
│   │   ├── ui/                     # Base UI primitives
│   │   ├── forms/                  # Reusable form components
│   │   ├── tables/                 # Table, filters, pagination, export
│   │   ├── charts/                 # Recharts wrappers
│   │   ├── layouts/                # AppShell, Sidebar, Navbar, Breadcrumbs
│   │   ├── modals/                 # Confirmation & detail modals
│   │   ├── selectors/              # Async searchable org/employee selectors
│   │   └── feedback/               # Loading, Empty, Error states, Toasts
│   ├── hooks/                      # Custom React hooks
│   ├── lib/
│   │   ├── api/                    # Axios instance & interceptors
│   │   ├── utils/                  # Utility functions
│   │   ├── validators/             # Zod schemas
│   │   └── constants/              # App-wide constants & enums
│   ├── context/                    # React Context providers
│   ├── store/                      # Zustand stores
│   ├── types/                      # TypeScript type definitions
│   └── styles/                     # Global styles
├── public/
│   ├── images/
│   └── icons/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 10.x

### Installation

```bash
# Clone the repository
git clone https://github.com/DhvanitDodiyatatva/HRMS_FE.git
cd HRMS_FE

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_APP_NAME=HRMS
```

---

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript check
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests (Playwright)
npm run format       # Prettier format
```

---

## Modules

| Module                   | Description                                              |
|--------------------------|----------------------------------------------------------|
| Authentication           | Login, logout, protected routes, session handling        |
| RBAC                     | Role-based access control, org-scoped permissions        |
| HR Dashboard             | Role-aware navigation and dashboard shell                |
| Employee Dashboard       | Clock-in/out, attendance states, leave link              |
| Attendance Management    | Admin dashboard, devices, policy, shifts, timesheets     |
| Master Data              | All reference data (designation, holiday, gender, etc.)  |
| Employee Onboarding      | Employee listing, add/edit, invitation, profile          |
| Leave Management         | Types, rules, templates, balances, applications          |
| Resignation Management   | Apply, track, approve resignation                        |
| Salary Configuration     | Types, heads, templates, calculation rules               |
| Monthly Salary Processing| Salary run, payroll calculation, salary slips            |
| Dashboards & Reporting   | Analytics, attendance reports, salary exports            |
| Employee Transfer        | Transfer workflow with documents and approval            |

---

## Branching Strategy

```
main          ← Production-ready code
develop       ← Integration branch
feature/*     ← Feature branches
bugfix/*      ← Bug fix branches
hotfix/*      ← Production hotfixes
release/*     ← Release preparation
```

---

## License

Private – All rights reserved.
