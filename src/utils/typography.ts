// Typography utility classes for consistent usage across the application

export const typographyClasses = {
  // Desktop Heading classes with Roboto Mono font
  h1: 'text-h1 font-roboto-mono font-bold',
  h2: 'text-h2 font-roboto-mono font-bold',
  h3: 'text-h3 font-roboto-mono font-bold',
  h4: 'text-h4 font-roboto-mono font-bold',
  h5: 'text-h5 font-roboto-mono font-bold',
  h6: 'text-h6 font-roboto-mono font-bold',
  
  // Mobile Heading classes with Roboto Mono font
  mobileH1: 'text-mobile-h1 font-roboto-mono font-bold',
  mobileH2: 'text-mobile-h2 font-roboto-mono font-bold',
  mobileH3: 'text-mobile-h3 font-roboto-mono font-bold',
  
  // Responsive Heading classes (mobile-first)
  responsiveH1: 'text-mobile-h1 sm:text-h1 font-roboto-mono font-bold',
  responsiveH2: 'text-mobile-h2 sm:text-h2 font-roboto-mono font-bold',
  responsiveH3: 'text-mobile-h3 sm:text-h3 font-roboto-mono font-bold',
  responsiveH4: 'text-mobile-h3 sm:text-h4 font-roboto-mono font-bold',
  responsiveH5: 'text-mobile-h2 sm:text-h5 font-roboto-mono font-bold',
  responsiveH6: 'text-mobile-h1 sm:text-h6 font-roboto-mono font-bold',
  
  // Desktop Body text classes with Inter font
  bodyLg: 'text-body-lg font-inter',
  body: 'text-body font-inter',
  link: 'text-link font-inter',
  caption: 'text-caption font-inter',
  
  // Mobile Body text classes with Inter font
  mobileBodyLg: 'text-mobile-body-lg font-inter',
  mobileBody: 'text-mobile-body font-inter',
  mobileLink: 'text-mobile-link font-inter',
  mobileCaption: 'text-mobile-caption font-inter',
  
  // Responsive Body text classes (mobile-first)
  responsiveBodyLg: 'text-mobile-body-lg sm:text-body-lg font-inter',
  responsiveBody: 'text-mobile-body sm:text-body font-inter',
  responsiveLink: 'text-mobile-link sm:text-link font-inter',
  responsiveCaption: 'text-mobile-caption sm:text-caption font-inter',
  
  // Code/monospace classes
  code: 'font-roboto-mono',
  mono: 'font-roboto-mono',
} as const;

export const colorClasses = {
  primary: 'text-white',
  accent: 'text-accent-yellow',
  accentBright: 'text-accent-bright-yellow',
  muted: 'text-gray-400',
} as const;

export const backgroundClasses = {
  primary: 'bg-primary-dark',
  secondary: 'bg-secondary-dark',
  accent: 'bg-accent-blue',
  yellow: 'bg-accent-yellow',
  brightYellow: 'bg-accent-bright-yellow',
} as const; 