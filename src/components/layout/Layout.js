import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, description, keywords }) => {
  const defaultTitle = 'Ehgz - Discover Amazing Dining Experiences';
  const defaultDescription = 'Discover and book the best restaurants, cafes, and bars. Modern dining experiences at your fingertips.';
  const defaultKeywords = 'restaurants, cafes, bars, booking, reservations, dining';

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Ehgz` : defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta property="og:title" content={title ? `${title} | Ehgz` : defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta name="twitter:title" content={title ? `${title} | Ehgz` : defaultTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-200">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

