# Crown Interactive - Torus Mara FX Transfer & Dashboard Assessment

A modern, responsive financial transfer dashboard and authentication interface built as part of the **Crown Interactive Frontend Engineering Assessment**.

This project implements the **Torus Mara FX Transfer** application, featuring real-time currency conversion calculations, interactive multi-step transfer workflow, currency selection modals, responsive collapsible navigation, dark mode support, and an authentication module.

---

## 🚀 Live Repository

- **GitHub Repository**: [https://github.com/lawrenceime/crown_interactive_assessment](https://github.com/lawrenceime/crown_interactive_assessment)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Bundler & Tooling**: Turbopack & ESLint 9
- **Icons**: Custom lightweight SVG vector system

---

## ✨ Features & Capabilities

### 1. 💱 FX Transfer Multi-Step Workflow
- **Step 1: Amount & Currency Selection**
  - Instant bi-directional currency conversion calculations.
  - Dynamic rate calculation against USD base rates (USD, NGN, EUR, GBP, KES, CAD).
  - Configurable fee calculation (0.5%) and net converted sum.
  - One-click currency swap with smooth rotation animation.
  - Interactive **Currency Selector Modal** with real-time search filtering, country flag icons, currency symbols, and exchange rates.
- **Step 2: Recipient Information**
  - Recipient bank selection, account number, and recipient full name inputs with validation.
- **Step 3: Review & Confirmation**
  - Comprehensive transfer summary detailing send amount, recipient payout, live FX rate, fees, and recipient account details.
  - Interactive confirmation feedback and state reset.
- **Interactive Step Navigation**: Breadcrumb/stepper tracking active progress with the ability to step back or advance smoothly.

### 2. 🖥️ Torus Mara Dashboard Layout & Shell
- **Collapsible Desktop Sidebar**: Smooth transition between expanded menu and icon-only collapsed mode.
- **Mobile Responsive Drawer**: Off-canvas sliding navigation menu with overlay backdrop on smaller viewports.
- **Top Sticky Header**: Displays breadcrumbs, screen title, subtitle, notifications indicator, and user profile avatar.
- **Theme Toggle**: Light / Dark mode toggle integrated directly into the sidebar.
- **Navigation State Management**: Seamless tab switching between dashboard sections (*FX Transfer, Send Money, Manage, Accounts, Beneficiaries, Settings*).

### 3. 🔐 Authentication Interface
- Accessible via `/login`.
- Clean sign-in card with email and password validation.
- Interactive toggle to reveal/hide password.
- Loading states and simulated authentication lifecycle.

---

## 🏗️ Architecture & Project Structure

The project follows a **Feature-Driven Modular Architecture**, ensuring clean separation of concerns, scalability, and ease of unit/integration testing:


### Key Architectural Decisions

1. **Feature-First Organization (`app/feature/*`)**:
   - High-level screens and domain workflows are encapsulated in dedicated feature directories rather than bloated page files.
   - Route handlers (`(dashboard)/page.tsx` and `(auth)/login/page.tsx`) act as lightweight orchestrators.

2. **Centralized UI State via Context (`DashboardShell`)**:
   - `DashboardShell` exposes `DashboardContext` and a custom `useDashboard()` hook.
   - Manages global layout states: active navigation item, desktop sidebar collapsed state, mobile drawer visibility, theme toggle, and page header titles.

3. **Atomic & Composable Components**:
   - Components like `Button`, `Input`, and `Icons` are modular, accept standard HTML element props, and are decoupled from domain logic.

4. **Performance & Bundle Optimization**:
   - All icons are inline SVGs with zero external icon library overhead.
   - Static prerendering via Next.js App Router for instant initial load times.

---

## ⚙️ Getting Started & Local Development

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lawrenceime/crown_interactive_assessment.git
   cd crown_interactive_assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧪 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack at `localhost:3000` |
| `npm run build` | Compiles the production build and verifies type-checking |
| `npm run start` | Starts the production server using the built application |
| `npm run lint` | Runs ESLint to check for code formatting and potential issues |

---

## 🧭 Routes Overview

- **`/` (Root)**: Torus Mara Dashboard & FX Transfer multi-step interface.
- **`/login`**: Authentication screen with validation and credential inputs.

---

## 👤 Author

- **Lawrence Ime**
- **GitHub**: [@lawrenceime](https://github.com/lawrenceime)
