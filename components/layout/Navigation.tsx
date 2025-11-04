'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home', isHash: true },
  { name: 'About', href: '#about', isHash: true },
  { name: 'Skills', href: '#skills', isHash: true },
  { name: 'Projects', href: '#projects', isHash: true },
  { name: 'Gallery', href: '/gallery', isHash: false },
  { name: 'Contact', href: '#contact', isHash: true },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault();
      
      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        router.push('/');
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', true)}
            className="text-2xl font-bold bg-gradient-to-r from-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PB
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = item.isHash
                ? false
                : pathname === item.href;
              
              const NavLink = item.isHash ? motion.a : motion(Link);
              
              return (
                <NavLink
                  key={item.name}
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href, item.isHash)}
                  className={`text-gray-300 hover:text-cosmic-cyan transition-colors duration-200 relative group ${
                    isActive ? 'text-cosmic-cyan' : ''
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-cosmic-cyan transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </NavLink>
              );
            })}
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Pranoy_Basu_Resume.pdf';
                link.download = 'Pranoy_Basu_Resume.pdf';
                link.click();
              }}
              className="px-4 py-2 rounded-lg glass border border-cosmic-blue/50 text-cosmic-blue hover:bg-cosmic-blue/10 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass text-gray-300 hover:text-cosmic-cyan transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = item.isHash
                  ? false
                  : pathname === item.href;
                
                const NavLink = item.isHash ? motion.a : motion(Link);
                
                return (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href, item.isHash)}
                    className={`block text-gray-300 hover:text-cosmic-cyan transition-colors duration-200 ${
                      isActive ? 'text-cosmic-cyan' : ''
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Pranoy_Basu_Resume.pdf';
                  link.download = 'Pranoy_Basu_Resume.pdf';
                  link.click();
                }}
                className="block w-full px-4 py-2 rounded-lg glass border border-cosmic-blue/50 text-cosmic-blue hover:bg-cosmic-blue/10 transition-all duration-200 text-center"
                whileHover={{ scale: 1.02 }}
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}