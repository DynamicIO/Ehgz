import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Venues', href: '/venues' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
    Connect: [
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              Ehgz
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Discover and book amazing dining experiences at the best restaurants, 
              cafes, and bars in your city.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Social Links */}
              {['Twitter', 'Instagram', 'Facebook'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'Twitter' && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    )}
                    {social === 'Instagram' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 12.013c0-1.971 1.595-3.565 3.565-3.565s3.565 1.594 3.565 3.565-1.595 3.565-3.565 3.565-3.565-1.594-3.565-3.565zm7.127-5.952c.463 0 .839.376.839.839s-.376.839-.839.839-.839-.376-.839-.839.376-.839.839-.839zm2.219 1.806c-.063-.614-.187-1.36-.425-1.969-.214-.549-.499-.999-.892-1.391s-.842-.678-1.391-.892c-.609-.238-1.355-.362-1.969-.425-.668-.068-1.308-.084-2.886-.084s-2.218.016-2.886.084c-.614.063-1.36.187-1.969.425-.549.214-.999.499-1.391.892s-.678.842-.892 1.391c-.238.609-.362 1.355-.425 1.969-.068.668-.084 1.308-.084 2.886s.016 2.218.084 2.886c.063.614.187 1.36.425 1.969.214.549.499.999.892 1.391s.842.678 1.391.892c.609.238 1.355.362 1.969.425.668.068 1.308.084 2.886.084s2.218-.016 2.886-.084c.614-.063 1.36-.187 1.969-.425.549-.214.999-.499 1.391-.892s.678-.842.892-1.391c.238-.609.362-1.355.425-1.969.068-.668.084-1.308.084-2.886s-.016-2.218-.084-2.886z"/>
                    )}
                    {social === 'Facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-border">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Ehgz. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with ❤️ By Dynamic.IO for food lovers in Egypt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

