// Typography utility classes for consistent usage across the application

export const typographyClasses = {
  // Desktop Heading classes with Roboto Mono font
  h1: 'text-h1 font-roboto-mono font-bold',
  h2: 'text-h2 font-roboto-mono font-bold',
  h3: 'text-h3 font-roboto-mono font-bold',
  h4: 'text-h4 font-roboto-mono font-bold',
  h5: 'text-h5 font-roboto-mono font-bold',
  h6: 'text-h6 font-roboto-mono font-bold',
  
  // Mobile Heading classes with Roboto Mono font (shifted down one level)
  mobileH1: 'text-mobile-h1 font-roboto-mono font-bold', // Desktop h5 size
  mobileH2: 'text-mobile-h2 font-roboto-mono font-bold', // Desktop h6 size
  mobileH3: 'text-mobile-h3 font-roboto-mono font-bold', // Desktop body-lg size with bold
  
  // Medium screen Heading classes (md: breakpoint)
  mediumH1: 'text-medium-h1 font-roboto-mono font-bold', // Desktop h2 size
  mediumH2: 'text-medium-h2 font-roboto-mono font-bold', // Desktop h3 size
  mediumH3: 'text-medium-h3 font-roboto-mono font-bold', // Desktop h4 size
  mediumH4: 'text-medium-h4 font-roboto-mono font-bold', // Desktop h5 size
  mediumH5: 'text-medium-h5 font-roboto-mono font-bold', // Desktop h6 size
  mediumH6: 'text-medium-h6 font-roboto-mono font-bold', // Desktop body-lg size with bold
  
  // Responsive Heading classes (mobile-first with medium breakpoint)
  responsiveH1: 'text-mobile-h1 md:text-medium-h1 lg:text-h1 font-roboto-mono font-bold',
  responsiveH2: 'text-mobile-h2 md:text-medium-h2 lg:text-h2 font-roboto-mono font-bold',
  responsiveH3: 'text-mobile-h3 md:text-medium-h3 lg:text-h3 font-roboto-mono font-bold',
  responsiveH4: 'text-mobile-h3 md:text-medium-h4 lg:text-h4 font-roboto-mono font-bold',
  responsiveH5: 'text-mobile-h2 md:text-medium-h5 lg:text-h5 font-roboto-mono font-bold',
  responsiveH6: 'text-mobile-h1 md:text-medium-h6 lg:text-h6 font-roboto-mono font-bold',
  
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
  
  // Medium screen Body text classes (md: breakpoint)
  mediumBodyLg: 'text-medium-body-lg font-inter',
  mediumBody: 'text-medium-body font-inter',
  mediumLink: 'text-medium-link font-inter',
  mediumCaption: 'text-medium-caption font-inter',
  
  // Enhanced Responsive Body text classes (mobile-first with medium breakpoint)
  responsiveBodyLg: 'text-mobile-body-lg md:text-medium-body-lg lg:text-body-lg font-inter',
  responsiveBody: 'text-mobile-body md:text-medium-body lg:text-body font-inter',
  responsiveLink: 'text-mobile-link md:text-medium-link lg:text-link font-inter',
  responsiveCaption: 'text-mobile-caption md:text-medium-caption lg:text-caption font-inter',
  
  // Code/monospace classes
  code: 'font-roboto-mono',
  mono: 'font-roboto-mono',
  
  // Specialized responsive classes for different use cases
  heroTitle: 'text-mobile-h1 md:text-medium-h1 lg:text-h1 xl:text-h1 font-roboto-mono font-bold leading-tight',
  sectionTitle: 'text-mobile-h2 md:text-medium-h2 lg:text-h2 font-roboto-mono font-bold',
  cardTitle: 'text-mobile-h3 md:text-medium-h3 lg:text-h4 font-roboto-mono font-bold',
  navigation: 'text-mobile-link md:text-medium-link lg:text-link font-inter font-medium',
  button: 'text-mobile-body md:text-medium-body lg:text-link font-inter font-medium',
  footer: 'text-mobile-caption md:text-medium-caption lg:text-caption font-inter',
} as const;

export const colorClasses = {
  primary: 'text-white',
  accent: 'text-accent-yellow',
  accentBright: 'text-accent-bright-yellow',
  muted: 'text-gray-400',
  success: 'text-green-400',
  warning: 'text-yellow-300',
  error: 'text-red-400',
  info: 'text-blue-400',
} as const;

export const backgroundClasses = {
  primary: 'bg-primary-dark',
  secondary: 'bg-secondary-dark',
  accent: 'bg-accent-blue',
  yellow: 'bg-accent-yellow',
  brightYellow: 'bg-accent-bright-yellow',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
} as const;

// Spacing utilities for consistent typography spacing
export const spacingClasses = {
  // Vertical spacing for typography elements
  titleSpacing: 'mb-4 sm:mb-6 md:mb-8 lg:mb-10',
  subtitleSpacing: 'mb-3 sm:mb-4 md:mb-6 lg:mb-8',
  bodySpacing: 'mb-2 sm:mb-3 md:mb-4 lg:mb-6',
  captionSpacing: 'mb-1 sm:mb-2 md:mb-3 lg:mb-4',
  
  // Section spacing
  sectionSpacing: 'py-8 sm:py-12 md:py-16 lg:py-20',
  sectionTopSpacing: 'pt-8 sm:pt-12 md:pt-16 lg:pt-20',
  sectionBottomSpacing: 'pb-8 sm:pb-12 md:pb-16 lg:pb-20',
  
  // Component spacing
  cardSpacing: 'p-4 sm:p-6 md:p-8 lg:p-10',
  buttonSpacing: 'px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4',
} as const;

// Combined utility classes for common use cases
export const combinedClasses = {
  // Hero section
  heroTitle: `${typographyClasses.heroTitle} ${colorClasses.accent} ${spacingClasses.titleSpacing}`,
  heroSubtitle: `${typographyClasses.responsiveBodyLg} ${colorClasses.primary} ${spacingClasses.bodySpacing}`,
  
  // Section headers
  sectionHeader: `${typographyClasses.sectionTitle} ${colorClasses.accent} ${spacingClasses.titleSpacing}`,
  sectionDescription: `${typographyClasses.responsiveBody} ${colorClasses.primary} ${spacingClasses.bodySpacing}`,
  
  // Cards
  cardTitle: `${typographyClasses.cardTitle} ${colorClasses.primary} ${spacingClasses.subtitleSpacing}`,
  cardBody: `${typographyClasses.responsiveBody} ${colorClasses.primary} ${spacingClasses.bodySpacing}`,
  
  // Navigation
  navLink: `${typographyClasses.navigation} ${colorClasses.primary} hover:${colorClasses.accent} transition-colors duration-200`,
  navLinkActive: `${typographyClasses.navigation} ${colorClasses.accent} font-semibold`,
  
  // Buttons
  buttonPrimary: `${typographyClasses.button} ${colorClasses.primary} ${spacingClasses.buttonSpacing} bg-accent-yellow hover:bg-accent-bright-yellow transition-all duration-300`,
  buttonSecondary: `${typographyClasses.button} ${colorClasses.accent} ${spacingClasses.buttonSpacing} border-2 border-accent-yellow hover:bg-accent-yellow hover:text-primary-dark transition-all duration-300`,
  
  // Footer
  footerText: `${typographyClasses.footer} ${colorClasses.muted} ${spacingClasses.captionSpacing}`,
} as const;