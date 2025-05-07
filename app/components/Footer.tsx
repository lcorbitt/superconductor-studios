'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-black">Superconductor Studios</h3>
            <p className="text-gray-600 mb-2">
              Custom home builder delivering exceptional craftsmanship and innovative designs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-black">Quick Links</h4>
            <ul className="space-y-1">
              {['Home', 'About', 'Services', 'Projects', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-0">
            <h4 className="text-md font-semibold mb-2 text-black">Contact Us</h4>
            <ul className="space-y-1 text-gray-600">
              <li>
                  Austin, TX
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-black transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="break-all">
                <a href="mailto:info@superconductorstudios.com" className="hover:text-black transition-colors">
                  info@superconductorstudios.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Superconductor Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 