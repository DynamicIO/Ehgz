import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import VenueCard from '../components/ui/VenueCard';
import SearchBar from '../components/ui/SearchBar';
import venuesData from '../data/venues.json';

const Venues = () => {
  const [venues] = useState(venuesData);
  const [filteredVenues, setFilteredVenues] = useState(venuesData);
  const [currentFilters, setCurrentFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const location = useLocation();

  // Parse URL parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialFilters = {};
    const initialSearch = params.get('search') || '';

    ['type', 'location', 'priceRange'].forEach(key => {
      const value = params.get(key);
      if (value) initialFilters[key] = value;
    });

    setCurrentFilters(initialFilters);
    setSearchQuery(initialSearch);
  }, [location.search]);

  // Apply filters and search whenever they change
  useEffect(() => {
    let filtered = [...venues];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(venue =>
        venue.name.toLowerCase().includes(query) ||
        venue.cuisine.toLowerCase().includes(query) ||
        venue.location.toLowerCase().includes(query) ||
        venue.description.toLowerCase().includes(query) ||
        venue.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    // Apply filters
    Object.entries(currentFilters).forEach(([key, value]) => {
      if (value) {
        filtered = filtered.filter(venue => {
          if (key === 'priceRange') {
            return venue.priceRange === value;
          }
          return venue[key] === value;
        });
      }
    });

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'priceRange':
          const priceOrder = { '$': 1, '$$': 2, '$$$': 3, '$$$$': 4 };
          return priceOrder[a.priceRange] - priceOrder[b.priceRange];
        default:
          return 0;
      }
    });

    setFilteredVenues(filtered);
  }, [venues, searchQuery, currentFilters, sortBy]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    updateURL({ ...currentFilters, search: query });
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...currentFilters, [filterType]: value };
    if (!value) {
      delete newFilters[filterType];
    }
    setCurrentFilters(newFilters);
    updateURL({ ...newFilters, search: searchQuery });
  };

  const updateURL = (params) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });
    const newURL = `/venues${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    window.history.replaceState({}, '', newURL);
  };

  const clearAllFilters = () => {
    setCurrentFilters({});
    setSearchQuery('');
    window.history.replaceState({}, '', '/venues');
  };

  const hasActiveFilters = Object.keys(currentFilters).length > 0 || searchQuery;

  return (
    <Layout
      title="All Venues"
      description="Browse our complete collection of restaurants, cafes, and bars. Find your perfect dining experience with advanced search and filtering."
      keywords="restaurants, cafes, bars, dining, browse venues, food discovery"
    >
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg/50">
        {/* Header Section */}
        <section className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                All Venues
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Discover amazing dining experiences in your city
              </p>
              
              <SearchBar
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                currentFilters={currentFilters}
              />
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredVenues.length} venue{filteredVenues.length !== 1 ? 's' : ''} found
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="ml-2 text-primary-600 dark:text-primary-400 hover:underline text-sm"
                  >
                    Clear all filters
                  </button>
                )}
              </p>
              
              {/* Active Filters */}
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 mt-2"
                >
                  {searchQuery && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300">
                      Search: "{searchQuery}"
                      <button
                        onClick={() => handleSearch('')}
                        className="ml-1 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {Object.entries(currentFilters).map(([key, value]) => (
                    <span
                      key={key}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {key}: {value}
                      <button
                        onClick={() => handleFilterChange(key, '')}
                        className="ml-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort By */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-lg text-sm text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none"
                >
                  <option value="name">Name</option>
                  <option value="rating">Rating</option>
                  <option value="priceRange">Price</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-label="Grid view"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-label="List view"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Venues Grid/List */}
          {filteredVenues.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No venues found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={clearAllFilters}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {filteredVenues.map((venue, index) => (
                <VenueCard key={venue.id} venue={venue} index={index} />
              ))}
            </motion.div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Venues;

