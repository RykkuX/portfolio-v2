/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#000814',
        'secondary-dark': '#001d3d',
        'accent-blue': '#003566',
        'accent-yellow': '#ffc300',
        'accent-bright-yellow': '#ffd60a',
      },
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Desktop baseline values
        'h1': ['177px', { lineHeight: '195px', letterSpacing: '-3.5px', fontWeight: '700' }],
        'h2': ['132px', { lineHeight: '145px', letterSpacing: '-2.6px', fontWeight: '700' }],
        'h3': ['99px', { lineHeight: '109px', letterSpacing: '-2px', fontWeight: '700' }],
        'h4': ['73px', { lineHeight: '80px', letterSpacing: '-1.5px', fontWeight: '700' }],
        'h5': ['55px', { lineHeight: '61px', letterSpacing: '-1.1px', fontWeight: '700' }],
        'h6': ['41px', { lineHeight: '45px', letterSpacing: '-0.8px', fontWeight: '700' }],
        'body-lg': ['30px', { lineHeight: '39px', letterSpacing: '-0.4px', fontWeight: '400' }],
        'link': ['17px', { lineHeight: '26px', letterSpacing: '0.1px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '24px', letterSpacing: '0.1px', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '21px', letterSpacing: '0.1px', fontWeight: '400' }],

        // Mobile-specific scaled values (for sm: breakpoint and below)
        'mobile-h1': ['73px', { lineHeight: '80px', letterSpacing: '-1.5px', fontWeight: '700' }], // Desktop h4
        'mobile-h2': ['55px', { lineHeight: '61px', letterSpacing: '-1.1px', fontWeight: '700' }], // Desktop h5
        'mobile-h3': ['41px', { lineHeight: '45px', letterSpacing: '-0.8px', fontWeight: '700' }], // Desktop h6
        'mobile-body-lg': ['24px', { lineHeight: '32px', letterSpacing: '-0.2px', fontWeight: '400' }],
        'mobile-link': ['16px', { lineHeight: '24px', letterSpacing: '0.1px', fontWeight: '400' }],
        'mobile-body': ['15px', { lineHeight: '22px', letterSpacing: '0.1px', fontWeight: '400' }],
        'mobile-caption': ['12px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} 