# Budget Tracking System

A modern and responsive budget tracking frontend application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dashboard**: Overview of income, expenses, balance, and debts
- **Transactions**: Manage income and expenses with filtering and search
- **Utang Dashboard**: Track debts and borrowers
- **Responsive Design**: Mobile-friendly interface
- **Charts**: Visual analytics with Recharts
- **Mock Data**: Static JSON data for demonstration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── login/             # Login page
│   ├── dashboard/         # Main dashboard
│   ├── transactions/      # Transactions management
│   └── utang/            # Debt tracking
├── components/            # Reusable components
│   ├── layout/           # Layout components (Sidebar, Header)
│   ├── cards/            # Card components
│   ├── charts/           # Chart components
│   └── ui/               # UI components
├── data/                 # Mock data files
└── lib/                  # Utility functions
```

## Pages

- **Login** (`/login`): Authentication page
- **Dashboard** (`/dashboard`): Main overview with summary cards and charts
- **Transactions** (`/transactions`): Income and expense management
- **Utang** (`/utang`): Debt tracking dashboard

## Components

- **Layout**: Main layout with sidebar navigation and header
- **SummaryCard**: Dashboard summary cards
- **Charts**: Various chart components using Recharts
- **Sidebar**: Responsive navigation sidebar
- **Header**: Top navigation bar

## Mock Data

The application uses static mock data stored in `src/data/`:
- `transactions.ts`: Sample income and expense transactions
- `debts.ts`: Sample debt/borrower data

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Deployment

This is a frontend-only application that can be deployed to Vercel, Netlify, or any static hosting service.

```bash
npm run build
```

The built files will be in the `.next` directory.