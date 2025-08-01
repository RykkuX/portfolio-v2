# Project Structure

This document outlines the organized file structure for the portfolio project.

## 📁 Directory Structure

```
src/
├── assets/                    # Static assets
│   ├── images/               # Image files (PNG, JPG, SVG)
│   ├── icons/                # Icon files (SVG, PNG)
│   ├── fonts/                # Custom font files
│   ├── data/                 # Static data files (JSON)
│   └── README.md             # Assets documentation
│
├── components/                # React components
│   ├── common/               # Reusable components
│   │   ├── TypographyDemo.tsx
│   │   └── TypingEffect.tsx
│   ├── sections/             # Page sections
│   │   └── HeroSection.tsx
│   ├── hooks/                # Custom React hooks
│   │   └── README.md
│   └── index.ts              # Component exports
│
├── pages/                    # Page components
│   ├── Home.tsx             # Home page
│   └── index.ts             # Page exports
│
├── styles/                   # CSS and styling
│   ├── App.css              # App-specific styles
│   └── index.css            # Global styles
│
├── utils/                    # Utility functions
│   └── typography.ts        # Typography utility
│
├── App.tsx                   # Main App component
├── index.tsx                 # Application entry point
└── react-app-env.d.ts       # TypeScript declarations
```

## 🎯 Component Organization

### **Common Components** (`src/components/common/`)
Reusable components that can be used across multiple pages:
- `TypographyDemo.tsx` - Typography system showcase
- `TypingEffect.tsx` - Typing animation component

### **Section Components** (`src/components/sections/`)
Large page sections that compose the main content:
- `HeroSection.tsx` - Hero section with typing effect

### **Hook Components** (`src/components/hooks/`)
Custom React hooks for shared logic:
- Future: `useLocalStorage`, `useMediaQuery`, `useScrollPosition`

## 📄 Page Organization

### **Pages** (`src/pages/`)
Main page components that compose the application:
- `Home.tsx` - Home page with hero and typography demo
- Future: `About.tsx`, `Projects.tsx`, `Contact.tsx`

## 🎨 Styling Organization

### **Styles** (`src/styles/`)
CSS files and styling utilities:
- `App.css` - Application-specific styles
- `index.css` - Global styles and Tailwind imports

## 🛠 Utility Organization

### **Utils** (`src/utils/`)
Utility functions and shared logic:
- `typography.ts` - Typography utility classes and constants

## 📦 Asset Organization

### **Assets** (`src/assets/`)
Static files and resources:
- `images/` - Image files (PNG, JPG, SVG)
- `icons/` - Icon files (SVG, PNG)
- `fonts/` - Custom font files
- `data/` - Static data files (JSON)

## 🔄 Import Patterns

### **Component Imports**
```tsx
// From pages
import { HeroSection, TypographyDemo } from '../components';

// From components
import { typographyClasses } from '../../utils/typography';
```

### **Page Imports**
```tsx
// From App.tsx
import Home from './pages/Home';

// From pages
import { HeroSection } from '../components';
```

### **Utility Imports**
```tsx
// From components
import { typographyClasses, colorClasses } from '../../utils/typography';
```

## 🚀 Benefits of This Structure

1. **Scalability** - Easy to add new pages and components
2. **Maintainability** - Clear separation of concerns
3. **Reusability** - Common components can be shared
4. **Organization** - Logical grouping of related files
5. **Type Safety** - Proper TypeScript organization
6. **Performance** - Efficient imports and bundling

## 📋 Future Additions

### **Planned Pages**
- `About.tsx` - About me page
- `Projects.tsx` - Projects showcase
- `Contact.tsx` - Contact form
- `Services.tsx` - Services offered

### **Planned Components**
- `Navigation.tsx` - Navigation component
- `Footer.tsx` - Footer component
- `ProjectCard.tsx` - Project card component
- `ContactForm.tsx` - Contact form component

### **Planned Hooks**
- `useLocalStorage` - Local storage management
- `useMediaQuery` - Responsive design
- `useScrollPosition` - Scroll-based animations
- `useTypingEffect` - Typing animation logic

This structure provides a solid foundation for a scalable, maintainable portfolio application. 