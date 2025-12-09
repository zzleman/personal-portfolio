# Project Folder Structure

This document describes the improved folder structure of the personal portfolio project.

## Directory Structure

```
personal-portfolio/
├── public/                          # Static assets (Next.js convention)
│   └── images/
│       ├── icons/                   # Icon images
│       ├── projects/                # Project images
│       ├── tech/                    # Technology logos
│       └── mainIconsdark.svg       # Main icon
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # API route handler
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/                   # React components organized by feature
│   │   ├── layout/                  # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── index.ts             # Barrel export
│   │   ├── contact/                 # Contact feature components
│   │   │   ├── contact-form.tsx
│   │   │   ├── contact-result.tsx
│   │   │   └── index.ts
│   │   ├── about/                   # About feature components
│   │   │   ├── personal-info.tsx
│   │   │   └── index.ts
│   │   ├── projects/                # Projects feature components
│   │   │   ├── project.tsx
│   │   │   └── index.ts
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── code.tsx
│   │   │   └── index.ts
│   │   └── index.ts                 # Main barrel export
│   │
│   ├── features/                     # Feature-based organization
│   │   └── contact/
│   │       ├── types.ts             # Feature-specific types
│   │       ├── utils.ts             # Feature-specific utilities
│   │       └── index.ts             # Barrel export
│   │
│   ├── lib/                         # Third-party integrations & configs
│   │   ├── resend.ts                # Resend email client
│   │   └── index.ts
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useToggle.ts
│   │   ├── useTransition.ts
│   │   └── index.ts                 # Barrel export
│   │
│   ├── utils/                       # Utility functions
│   │   ├── classNames.ts
│   │   ├── validation.ts
│   │   └── index.ts                 # Barrel export
│   │
│   ├── types/                       # Global TypeScript types
│   │   └── index.ts
│   │
│   ├── constants/                   # Application constants
│   │   └── index.ts
│   │
│   └── data/                        # Mock data & static data
│       ├── mock.ts
│       └── index.ts                 # Barrel export
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Key Improvements

### 1. **Component Organization**
- Components are organized by feature/domain (layout, contact, about, projects)
- UI components are separated for reusability
- Each feature folder has its own barrel export (`index.ts`)

### 2. **Feature-Based Structure**
- `features/` directory for feature-specific code (types, utils)
- Promotes better code organization and maintainability
- Makes it easier to locate feature-related code

### 3. **Library Directory**
- `lib/` for third-party integrations (Resend, etc.)
- Centralized configuration for external services

### 4. **Public Assets**
- All static assets moved to `public/` (Next.js convention)
- Organized by type (images/icons, images/projects, images/tech)

### 5. **Barrel Exports**
- `index.ts` files for clean imports
- Reduces import path complexity
- Example: `import { Header, Footer } from '@/components/layout'`

### 6. **Separation of Concerns**
- Types, constants, utils, and hooks are clearly separated
- Each directory has a single responsibility
- Easier to navigate and maintain

## Import Examples

```typescript
// Components
import { Header, Footer } from '@/components/layout';
import { ContactForm, ContactResult } from '@/components/contact';
import { PersonalInfo } from '@/components/about';
import { Project } from '@/components/projects';
import { CodeSnippet } from '@/components/ui';

// Features
import { ContactFormData, ContactApiError } from '@/features/contact';

// Utilities
import { classNames } from '@/utils';
import { isValidEmail } from '@/utils/validation';

// Hooks
import { useToggle, useTransition } from '@/hooks';

// Constants
import { ROUTES, EXTERNAL_LINKS } from '@/constants';

// Types
import { PersonalInfoOption, ProjectData } from '@/types';

// Library
import { resend } from '@/lib';
```

## Benefits

1. **Scalability**: Easy to add new features without cluttering
2. **Maintainability**: Clear structure makes code easy to find
3. **Reusability**: Components and utilities are well-organized
4. **Type Safety**: Centralized types with feature-specific types
5. **Clean Imports**: Barrel exports simplify import statements
6. **Best Practices**: Follows Next.js and React conventions

