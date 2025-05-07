'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FaArrowDown } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  console.log('Pathname:', pathname);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Superconductor Studios" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative group ${
                    isActive 
                      ? 'text-black transition-colors duration-300' 
                      : 'text-gray-500 hover:text-black transition-colors duration-300'
                  }`}
                >
                  <span className="relative py-2">
                    {item.name}
                    <span 
                      className={`absolute -bottom-0.5 left-0 w-full h-[1px] bg-black transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className={`block w-full h-0.5 bg-black/75 transform transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[0.5rem]' : ''}`} />
              <span className={`block w-full h-0.5 bg-black/75 transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-black/75 transform transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[0.5rem]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-12 space-y-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname?.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative group ${
                      isActive 
                        ? 'text-black transition-colors duration-300' 
                        : 'text-gray-500 hover:text-black transition-colors duration-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative py-2 text-lg">
                      {item.name}
                      <span 
                        className={`absolute -bottom-0.5 left-0 w-full h-[1px] bg-black transform origin-left transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 