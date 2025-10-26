# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Wave 2.0 is a music collaboration and workflow tool built with Next.js 15, React 19, and TypeScript. The project uses the Next.js App Router architecture with Turbopack for fast development builds.

## Development Commands

### Core Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Server

- Default port: `http://localhost:3000`
- Hot reload is enabled by default
- Uses Turbopack for faster builds

## Architecture

### Project Structure

- **App Router**: Uses Next.js 15 App Router (`app/` directory)
- **Server Components**: Default to Server Components; use `'use client'` only when necessary (event handlers, browser APIs, state management)
- **Styling**: Tailwind CSS v4 with CSS Modules for component-specific styles
- **Animations**: Motion library (v12) for React animations
- **Type Safety**: Strict TypeScript with CSS Modules plugin

### Component Architecture

- **Components location**: `app/components/`
- **Reusable UI components**:
  - `Button`: Variants (primary, secondary, tertiary) with CSS Modules
  - `Glass`: Glassmorphism effect container
  - `Rotate`: Animated rotating elements using Motion
- **Styling pattern**: CSS Modules (`*.module.css`) for component styles
- **Layout**: Root layout uses Inter font with metadata configuration

### Styling System

- **Primary**: Tailwind CSS v4 (utility-first)
- **Component styles**: CSS Modules for encapsulated component styling
- **Theme**: Custom CSS variables in `globals.css`
- **PostCSS**: Configured with `@tailwindcss/postcss`

## Code Standards

### Naming Conventions

- **Components/Types/Interfaces**: PascalCase
- **Files/Directories**: kebab-case (e.g., `button.tsx`, `auth-wizard/`)
- **Variables/Functions/Hooks**: camelCase
- **Event handlers**: Prefix with `handle` (e.g., `handleClick`)
- **Boolean variables**: Prefix with verbs (e.g., `isLoading`, `hasError`)
- **Custom hooks**: Prefix with `use` (e.g., `useAuth`)
- **Constants/Environment variables**: UPPERCASE

### TypeScript Guidelines

- Strict mode enabled
- Define clear interfaces for component props
- Use type guards for undefined/null handling
- Prefer `interface` over `type` for object structures
- Use TypeScript utility types (`Partial`, `Pick`, `Omit`) where appropriate

### Code Style

- Single quotes for strings
- No semicolons (unless required)
- Strict equality (`===`) always
- Functional and declarative patterns preferred
- 80 character line limit
- Trailing commas in multiline structures

### React Patterns

- Functional components with TypeScript interfaces
- Use `function` keyword for component declarations
- Extract reusable logic into custom hooks
- Implement proper cleanup in `useEffect`
- Use `React.memo()` strategically
- Avoid inline function definitions in JSX

### Server vs Client Components

- **Default to Server Components** for better performance
- **Use `'use client'` only for**:
  - Event listeners and interactivity
  - Browser APIs (localStorage, window, etc.)
  - State management (useState, useReducer)
  - Client-side-only libraries (Motion animations)

### Next.js Best Practices

- Use `Image` component for optimized images
- Use `Link` component for client-side navigation
- Implement proper metadata in layouts
- Use URL query parameters for server state
- Implement error boundaries for error handling

### Editor Configuration

VSCode settings include:

- Auto-organize imports on save
- Auto-fix ESLint on save
- TypeScript SDK from local node_modules

## Path Aliases

- `@/*` maps to project root for cleaner imports

## Key Dependencies

- **Framework**: Next.js 15.3.4
- **React**: 19.1.0
- **Animation**: motion 12.23.0
- **Styling**: Tailwind CSS 4.1.11
- **Utilities**: clsx for conditional classnames
- **Type checking**: TypeScript 5 (strict mode)
