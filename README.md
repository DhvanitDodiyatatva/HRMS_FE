# HRMS Frontend (HRMS_FE)

> **Human Resource Management System — Next.js Frontend**

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

## 📋 Project Overview

Frontend application for the HRMS platform built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It covers attendance, leave, employee onboarding, resignation, transfer, salary configuration & processing, master data, dashboards and reporting.

**Backend Repo:** [HRMS_BE](https://github.com/Dhvanit_Dodiya/HRMS_BE)

---

## 🛠️ Technology Stack

| Technology     | Version  | Purpose                          |
|----------------|----------|----------------------------------|
| Next.js        | 15.x     | React framework (App Router)     |
| TypeScript     | 5.x      | Type safety                      |
| Tailwind CSS   | 3.x      | Utility-first styling            |
| React Query    | 5.x      | Server state management          |
| Zustand        | 4.x      | Client state management          |
| React Hook Form| 7.x      | Form management                  |
| Zod            | 3.x      | Schema validation                |
| Axios          | 1.x      | HTTP client                      |
| Recharts       | 2.x      | Data visualizations              |
| date-fns       | 3.x      | Date utilities                   |

---

## 📂 Folder Structure

```
HRMS_FE/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (auth)/                 # Auth route group (unauthenticated)
│   │   │   ├── login/
│   │   │   └── logout/
│   │   ├── (dashboard)/            # Protected route group
│   │   │   ├── hr-dashboard/       # HR Analytics Dashboard
│   │   │   ├── employee-dashboard/ # Employee self-service
│   │   │   ├── attendance/         # Attendance management
│   │   │   ├── leave/              # Leave management
│   │   │   ├── resignation/        # Resignation management
│   │   │   ├── salary-configuration/
│   │   │   ├── salary-processing/
│   │   │   ├── employee-onboarding/
│   │   │   ├── employee-transfer/
│   │   │   ├── master-data/        # All reference data masters
│   │   │   │   ├── blood-group/
│   │   │   │   ├── caste-category/
│   │   │   │   ├── designation/
│   │   │   │   ├── employee-type/
│   │   │   │   ├── employment-title/
│   │   │   │   ├── employment-type/
│   │   │   │   ├── gender/
│   │   │   │   ├── holiday/
│   │   │   │   ├── marital-status/
│   │   │   │   ├── operational-department/
│   │   │   │   ├── physical-handicap-type/
│   │   │   │   └── religion/
│   │   │   ├── reporting/
│   │   │   └── settings/
│   │   └── api/                    # Next.js API routes (if needed)
│   ├── components/
│   │   ├── ui/                     # Base UI primitives (Button, Input, Badge…)
│   │   ├── forms/                  # Reusable form components
│   │   ├── tables/                 # Table, filters, pagination, export
│   │   ├── charts/                 # Recharts wrappers (pie, bar, line)
│   │   ├── layouts/                # AppShell, Sidebar, Navbar, Breadcrumbs
│   │   ├── modals/                 # Confirmation, detail modals
│   │   ├── selectors/              # Async searchable org/employee selectors
│   │   └── feedback/               # Loading, Empty, Error states, Toasts
│   ├── hooks/                      # Custom React hooks
│   ├── lib/
│   │   ├── api/                    # Axios instance, interceptors, API helpers
│   │   ├── utils/                  # Utility functions
│   │   ├── validators/             # Zod schemas
│   │   └── constants/              # App-wide constants & enums
│   ├── context/                    # React Context providers
│   ├── store/                      # Zustand stores
│   ├── types/                      # TypeScript type definitions
│   └── styles/                     # Global styles, Tailwind overrides
├── public/
│   ├── images/
│   └── icons/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                           # Architecture decisions, API notes
├── .husky/                         # Git hooks
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 10.x

### Installation

```bash
# Clone the repository
git clone https://github.com/Dhvanit_Dodiya/HRMS_FE.git
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

## 🧪 Scripts

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

## 📦 Phase-wise Modules (HRMS-001 – HRMS-071)

| Phase | Module | Task IDs |
|-------|--------|----------|
| 01 | Analysis & Planning | HRMS-001, HRMS-002 |
| 02 | Project Setup | HRMS-003, HRMS-004 |
| 03 | Authentication & Authorization | HRMS-005, HRMS-006 |
| 04 | Shared UI & APIs | HRMS-007 |
| 05 | HR Dashboard Navigation | HRMS-008 |
| 06 | Information Management | HRMS-009, HRMS-010 |
| 07 | Employee Dashboard | HRMS-011, HRMS-012, HRMS-013 |
| 08 | Attendance Management | HRMS-014–HRMS-020, HRMS-069 |
| 09 | Master Data Management | HRMS-021–HRMS-033 |
| 10 | Employee Onboarding | HRMS-034–HRMS-037, HRMS-068 |
| 11 | Leave Management | HRMS-038–HRMS-047, HRMS-070 |
| 12 | Resignation Management | HRMS-048–HRMS-050 |
| 13 | Salary Configuration | HRMS-051–HRMS-055 |
| 14 | Monthly Salary Processing | HRMS-056–HRMS-058, HRMS-071 |
| 15 | Dashboards & Reporting | HRMS-059, HRMS-060, HRMS-067 |
| 16 | Employee Transfer | HRMS-061 |
| 17 | Integration & System Testing | HRMS-062, HRMS-063 |
| 18 | Bug Fixing & Stabilization | HRMS-064 |
| 19 | Deployment & Documentation | HRMS-065, HRMS-066 |

---

## 🌿 Branching Strategy

```
main          ← Production-ready code
develop       ← Integration branch
feature/*     ← Feature branches (e.g., feature/HRMS-005-auth)
bugfix/*      ← Bug fix branches
hotfix/*      ← Production hotfixes
release/*     ← Release preparation
```

---

## 📄 License

Private – All rights reserved.
