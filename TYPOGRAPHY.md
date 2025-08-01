# Typography & Color System

This project uses a custom typography and color system built with Tailwind CSS.

## Typography Scale

### Headings (Roboto Mono)
- **H1**: 177px, 195px line-height, -3.5px letter-spacing, 700 weight
- **H2**: 132px, 145px line-height, -2.6px letter-spacing, 700 weight
- **H3**: 99px, 109px line-height, -2px letter-spacing, 700 weight
- **H4**: 73px, 80px line-height, -1.5px letter-spacing, 700 weight
- **H5**: 55px, 61px line-height, -1.1px letter-spacing, 700 weight
- **H6**: 41px, 45px line-height, -0.8px letter-spacing, 700 weight

### Body Text (Inter)
- **Body Large**: 30px, 39px line-height, -0.4px letter-spacing, 400 weight
- **Body**: 16px, 24px line-height, 0.1px letter-spacing, 400 weight
- **Link**: 17px, 26px line-height, 0.1px letter-spacing, 400 weight
- **Caption**: 13px, 21px line-height, 0.1px letter-spacing, 400 weight

## Color Palette

- **Primary Dark**: `#000814` - Main background color
- **Secondary Dark**: `#001d3d` - Secondary background
- **Accent Blue**: `#003566` - Accent color
- **Accent Yellow**: `#ffc300` - Primary accent
- **Accent Bright Yellow**: `#ffd60a` - Bright accent

## Font Families

- **Headings**: Roboto Mono (monospace)
- **Body Text**: Inter (sans-serif)
- **Code/Monospace**: Roboto Mono (monospace)

## Usage

### Tailwind Classes

```jsx
// Headings
<h1 className="text-h1 font-roboto-mono">Main Heading</h1>
<h2 className="text-h2 font-roboto-mono">Section Heading</h2>

// Body Text
<p className="text-body-lg font-inter">Large body text</p>
<p className="text-body font-inter">Regular body text</p>
<p className="text-link font-inter">Link text</p>
<p className="text-caption font-inter">Caption text</p>

// Colors
<div className="bg-primary-dark text-accent-yellow">
  Content with dark background and yellow text
</div>
```

### Utility Classes

Import the utility classes for consistent usage:

```jsx
import { typographyClasses, colorClasses, backgroundClasses } from './utils/typography';

// Usage
<h1 className={typographyClasses.h1}>Heading</h1>
<p className={`${typographyClasses.body} ${colorClasses.accent}`}>Text</p>
```

## Components

The `TypographyDemo` component showcases all typography styles and colors. Run the development server to see it in action:

```bash
npm start
```

## Configuration

The typography system is configured in `tailwind.config.js` with custom font sizes, families, and colors. The fonts are loaded from Google Fonts in `src/index.css`. 