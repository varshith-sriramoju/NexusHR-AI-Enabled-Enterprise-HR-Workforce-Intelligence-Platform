# High-level Plan / Checklist

- Setup React + TypeScript frontend
- Configure Tailwind CSS
- Build premium SaaS-style Login UI
- Add glassmorphism + gradients + blur effects
- Add responsive layout
- Configure reusable UI components
- Prepare frontend for authentication integration
- Standardize `.gitignore`
- Prepare routing and preview flow

---

# Files Edited / Created

## `frontend/src/pages/Login.tsx`

Main Login UI implementation.

Includes:
- Split layout
- Marketing section
- Glassmorphism login card
- Gradient buttons
- Icons
- Background image
- Responsive design
- Tailwind styling

---

## `frontend/src/index.css`

Replaced content with:

```css
@import "tailwindcss";
```

This enables Tailwind usage.

---

## `frontend/src/components/ui/*`

Referenced reusable UI components:

- `button.tsx`
- `card.tsx`
- `input.tsx`

These provide:
- Consistent styling
- Variant handling
- Class merging

---

## `.gitignore`

Updated:
- Root `.gitignore`
- Frontend `.gitignore`
- Service `.gitignore`

Improved handling for:
- Maven
- Node modules
- IDE files
- OS artifacts

---

# Login UI Structure

## Main Layout

Uses CSS Grid:

```txt
Left Side  -> Marketing Panel
Right Side -> Login Card
```

Mobile behavior:
- Left section hidden on smaller screens
- Login card centered

---

# Background Design

Uses layered effects:

- Radial gradients
- Background office image
- Blur blobs
- Dark overlays

Main Tailwind classes:

```txt
bg-gradient-to-br
blur-3xl
backdrop-blur-xl
opacity-20
```

---

# Login Card

Glassmorphism effect:

```txt
bg-white/5
border border-white/10
backdrop-blur-3xl
shadow-[...]
rounded-[32px]
```

Features:
- Transparent dark background
- Heavy blur
- Soft glow
- Rounded corners

---

# Form Structure

Includes:

- Email field
- Password field
- Show/hide password
- Forgot password
- Gradient Sign In button
- Social login buttons

Icons are rendered inside inputs.

---

# Tailwind Utility Usage

Examples:

## Gradients

```txt
bg-gradient-to-r from-violet-500 to-blue-500
```

---

## Shadows

```txt
shadow-[0_25px_100px_rgba(0,0,0,0.55)]
```

---

## Blur Effects

```txt
backdrop-blur-3xl
blur-3xl
```

---

## Hover Effects

```txt
hover:-translate-y-1
hover:scale-[1.02]
```

---

# Accessibility

Added:

- Labels
- Button aria labels
- Semantic structure

---

# Commands To Run Locally

## Install dependencies

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\frontend"

npm install
```

---

# Install Tailwind

```powershell
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind:

```powershell
npx tailwindcss init -p
```

---

# Configure Tailwind

Update `tailwind.config.js`

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

# Run Development Server

```powershell
npm run dev
```

---

# Production Build

```powershell
npm run build
```

---

# Notes & Checks

## Tailwind Important

If Tailwind is not configured correctly:
- UI becomes plain HTML
- No styling appears

Make sure content paths are correct.

---

# Possible Missing Packages

If you get missing module errors:

```powershell
npm install class-variance-authority
```

Or Radix packages if required:

```powershell
npm install @radix-ui/react-slot
```

---

# UI Components

Login page depends on:

- `Button`
- `Card`
- `Input`

from:

```txt
src/components/ui/*
```

---

# Routing / Preview

To preview quickly:

## Option 1

Render directly inside:

```txt
src/App.tsx
```

Example:

```tsx
import Login from "./pages/Login";

function App() {
  return <Login />;
}

export default App;
```

---

## Option 2

Use React Router:

```txt
/login
```

through `AppRoutes.tsx`

---

# Next Steps

## Day 9 Goals

- JWT Authentication
- Protected Routes
- Token Storage
- Role-based Access
- Login API integration
- Axios interceptors

---

# Summary

The Login page was rebuilt into a modern enterprise SaaS UI using:

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Glassmorphism
- Gradient styling
- Responsive layout
- Premium visual effects

This aligns with the NexusHR frontend foundation goals from Day 8.

---

# Frontend Directory Structure

## `public/` Directory

Static assets served directly to the browser without processing.

### Contents

- `favicon.svg` — Browser tab icon
- `icons.svg` — SVG sprite with multiple icons

### How It Works

- Files are **not processed** by Tailwind or bundlers
- Copied directly to output folder during build
- Referenced using absolute paths starting with `/`
- Cached separately by browser

### Example Usage

```tsx
// In your components
<img src="/favicon.svg" alt="Logo" />
<use href="/icons.svg#settings-icon" />
```

### When To Use

- Images, fonts, videos
- Media that shouldn't be bundled
- Static resources needed at app start

---

## `src/` Directory

Your entire React application code.

### Full Structure

```
src/
├── App.tsx                  — Main app component (routing entry point)
├── main.tsx                 — React bootstrap (mounts to DOM)
├── index.css                — Global styles (imports Tailwind)
├── api/                     — Backend API communication
│   └── axios.ts             — HTTP client configured for gateway
├── assets/                  — Images, fonts, logos (processed by build)
├── components/              — Reusable React components
│   └── ui/                  — Base UI primitives
│       ├── button.tsx       — Styled button with variants
│       ├── input.tsx        — Styled input field
│       └── card.tsx         — Card container layout
├── lib/                     — Utility functions
│   └── utils.ts             — Helpers (className merging, validation)
├── pages/                   — Full-page components (screens)
│   └── Login.tsx            — Premium login page
└── routes/                  — Navigation & routing
    └── AppRoutes.tsx        — Route definitions
```

### Key Folders

#### `pages/`

Full-screen components that represent complete user views.

Examples:
- `Login.tsx` — authentication page
- `Dashboard.tsx` — main dashboard
- `Settings.tsx` — user settings

#### `components/ui/`

Reusable building blocks used throughout pages.

These are **primitives**:
- `Button` — styled button with sizes/variants
- `Input` — text input with focus states
- `Card` — container with header/footer/content sections

Features:
- Consistent styling
- Variant handling (primary, secondary, outline, etc.)
- Class merging via `cn()` utility

#### `api/`

Backend communication layer.

Contains:
- Axios instance configuration
- API endpoints functions
- Request/response interceptors

Example (`api/axios.ts`):
```tsx
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // API Gateway port
});

export default api;
```

Usage in pages:
```tsx
import api from "@/api/axios";

const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};
```

#### `lib/`

Shared utility functions.

Examples:
- `cn()` — merge Tailwind classes without conflicts
- Validation helpers
- Format functions
- Constants

#### `routes/`

React Router configuration.

`AppRoutes.tsx` defines URL-to-component mapping:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Root Files

#### `App.tsx`

Top-level application component.

Purpose:
- Wraps routing
- Sets up providers
- Renders `AppRoutes`

Example:
```tsx
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
```

#### `main.tsx`

Entry point that boots React.

Purpose:
- Imports `App.tsx`
- Mounts to DOM element with id `root`
- Initializes the application

Example:
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### `index.css`

Global stylesheets.

Now contains only:
```css
@import "tailwindcss";
```

This imports Tailwind and scans all `src/` files for class names.

### How Everything Connects

```
main.tsx (starts app)
    ↓
App.tsx (renders routes)
    ↓
AppRoutes.tsx (maps URL to page)
    ↓
pages/Login.tsx (renders Login page)
    ↓
components/ui/* (uses Button, Input, Card)
    ↓
api/axios.ts (calls backend when user clicks Sign In)
    ↓
lib/* (helpers for validation, formatting)
    ↓
index.css (Tailwind styles all elements)
```

### Tailwind in `src/`

Every `.tsx` file can use Tailwind classes.

Examples from Login.tsx:

```tsx
// Gradients
<span className="bg-gradient-to-r from-violet-500 to-blue-500">
  Text with gradient
</span>

// Shadows
<div className="shadow-[0_25px_100px_rgba(0,0,0,0.55)]">
  Card with custom shadow
</div>

// Blur effects
<div className="backdrop-blur-3xl">
  Blurred background
</div>

// Hover effects
<button className="hover:-translate-y-1 hover:scale-[1.02]">
  Button with hover animation
</button>

// Responsive
<div className="hidden lg:flex">
  Hidden on mobile, visible on large screens
</div>
```

### Import Paths

Use `@/` alias to import from `src/`:

```tsx
// ✅ Recommended
import { Button } from "@/components/ui/button";
import api from "@/api/axios";
import { cn } from "@/lib/utils";

// ❌ Avoid
import { Button } from "../../../components/ui/button";
import api from "../../../api/axios";
```

The `@/` alias is configured in `tsconfig.json`.

---
