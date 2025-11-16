import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { typographyClasses, colorClasses } from '../../utils/typography';

const Header: React.FC = () => {
  const { scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    
    // If not on home page, navigate to home first, then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('hero');
    }
  };

  const handleConnectClick = () => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first, then scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection('contact');
      }, 100);
    } else {
      scrollToSection('contact');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        hamburgerRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'PROJECTS', sectionId: 'projects' },
    { label: 'SERVICES', sectionId: 'services' },
    { label: 'TOOLBOX', sectionId: 'toolkit' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNavClick(link.sectionId)}
                className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide hover:text-accent-yellow transition-colors duration-200 cursor-pointer`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Hamburger Menu Button - Mobile */}
          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* Center - Name/Logo */}
          <button
            onClick={handleHomeClick}
            className={`${typographyClasses.responsiveCaption} ${colorClasses.accentBright} uppercase tracking-wide font-bold hover:opacity-80 transition-opacity duration-200 cursor-pointer text-center`}
          >
            LLYCO SAUZA
          </button>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="https://github.com/RykkuX"
              target="_blank"
              rel="noopener noreferrer"
              className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide hover:text-accent-yellow transition-colors duration-200`}
            >
              GITHUB
            </a>
            <Link
              to="/resume"
              className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide hover:text-accent-yellow transition-colors duration-200`}
            >
              RESUME
            </Link>
            <button
              onClick={handleConnectClick}
              className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide border-2 border-accent-yellow px-4 py-2 hover:bg-accent-yellow hover:text-primary-dark transition-all duration-200`}
            >
              CONNECT
            </button>
          </div>

          {/* Placeholder for mobile to maintain center alignment */}
          <div className="md:hidden w-8" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden fixed inset-0 top-16 bg-primary-dark z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide text-left hover:text-accent-yellow transition-colors duration-200 py-2`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/RykkuX"    
                target="_blank"
                rel="noopener noreferrer"
                className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide text-left hover:text-accent-yellow transition-colors duration-200 py-2`}
              >
                GITHUB
              </a>
              <Link
                to="/resume"
                className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide text-left hover:text-accent-yellow transition-colors duration-200 py-2`}
              >
                RESUME
              </Link>
              <button
                onClick={handleConnectClick}
                className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} uppercase tracking-wide border-2 border-accent-yellow px-4 py-2 text-left hover:bg-accent-yellow hover:text-primary-dark transition-all duration-200 mt-2`}
              >
                CONNECT
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

