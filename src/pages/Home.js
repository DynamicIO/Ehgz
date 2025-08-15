import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import VenueCard from '../components/ui/VenueCard';
import SearchBar from '../components/ui/SearchBar';
import venuesData from '../data/venues.json';

const Home = () => {
  const [featuredVenues, setFeaturedVenues] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Get featured venues
    const featured = venuesData.filter(venue => venue.featured);
    setFeaturedVenues(featured);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Navigate to venues page with search query
    window.location.href = `/venues?search=${encodeURIComponent(query)}`;
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Navigate to venues page with filters
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, val]) => {
      if (val) params.set(key, val);
    });
    if (searchQuery) params.set('search', searchQuery);
    
    window.location.href = `/venues?${params.toString()}`;
  };

  const categories = [
    {
      name: 'Restaurants',
      type: 'restaurant',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      description: 'Fine dining and casual restaurants',
      count: venuesData.filter(v => v.type === 'restaurant').length,
      color: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80'
    },
    {
      name: 'Cafes',
      type: 'cafe',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10.5a1.5 1.5 0 003 0V10a3 3 0 106 0v.5a1.5 1.5 0 003 0V10a6 6 0 10-12 0v.5z" />
          <path d="M6 8V7a2 2 0 114 0v1h2V7a4 4 0 10-8 0v1h2z" />
        </svg>
      ),
      description: 'Coffee shops and casual cafes',
      count: venuesData.filter(v => v.type === 'cafe').length,
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80'
    },
    {
      name: 'Bars',
      type: 'bar',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.967 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Cocktail lounges and bars',
      count: venuesData.filter(v => v.type === 'bar').length,
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80'
    }
  ];

  return (
    <Layout
      title="Home"
      description="Discover and book the best restaurants, cafes, and bars in your city. Find your next dining experience with Ehgz."
      keywords="restaurants, cafes, bars, dining, reservations, food, drinks"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/HomePage.jpg"
              alt="Egyptian dining atmosphere"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 dark:from-primary-900/30 dark:to-secondary-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.2)_70%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Discover Amazing{' '}
            <span className="gradient-text">Dining</span> Experiences
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Find and book the best restaurants, cafes, and bars across Egypt. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <SearchBar
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
              currentFilters={filters}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link to="/venues" className="btn-primary w-full sm:w-auto text-center">
              Browse All Venues
            </Link>
            <Link to="/about" className="btn-secondary w-full sm:w-auto text-center">
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Venues Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Venues
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Handpicked favorites from our community. These venues offer exceptional 
              experiences that keep guests coming back.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVenues.map((venue, index) => (
              <VenueCard key={venue.id} venue={venue} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/venues" className="btn-primary">
              View All Venues
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you're looking for a romantic dinner, casual coffee, or evening drinks, 
              we have the perfect spot for every occasion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={`/venues?type=${category.type}`}
                  className="block card p-6 h-full"
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      {category.count} venues
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary-600 dark:text-primary-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Own a Restaurant, Cafe, or Bar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of amazing venues. Share your space with food lovers 
              and grow your business with Ehgz.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRDckAy2QIaAhcLJy0y5LtHY-x5NYkNfJNGMYMy6_LSxAd1Q/viewform?usp=sharing&ouid=104158611849610461933"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Submit Your Venue
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

