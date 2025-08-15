import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Easy Discovery',
      description: 'Find amazing restaurants, cafes, and bars with our intuitive search and filtering system.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4h3a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z" />
        </svg>
      ),
      title: 'Simple Booking',
      description: 'Make reservations quickly and easily through our integrated booking system.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Curated Selection',
      description: 'Every venue is handpicked to ensure you have exceptional dining experiences.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile First',
      description: 'Optimized for mobile devices, so you can discover and book on the go.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Amazing Venues' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '25+', label: 'Cities' },
    { number: '4.8★', label: 'Average Rating' }
  ];

  const team = [
    {
      name: 'Dynamic.IO',
      role: 'Head of Operations',
      image: '/Dynamic.IOPhoto.png',
      description: 'Leading technology partner specializing in innovative web solutions and digital experiences.',
      website: 'https://dynamicio.vercel.app/'
    }
  ];

  return (
    <Layout
      title="About Us"
      description="Learn about Ehgz mission to connect food lovers with amazing dining experiences. Discover our story, team, and commitment to exceptional service."
      keywords="about ehgz, dining platform, restaurant discovery, food technology"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Ehgz</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ehgz is a product of Dynamic.IO, a software development firm espicilazing in creating digital experiences and 
              custom software solutions for businesses and the people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                Ehgz was born from a simple but common frustration: in Egypt, finding and booking the perfect restaurant, café, or bar 
                shouldn’t be such a hassle. Too often, the process meant digging through scattered social media pages, sending messages 
                on WhatsApp, waiting for replies from reception desks, and dealing with endless back-and-forth just to secure a spot.
                </p>
                <p>
                We knew there had to be a better way. So, we created a platform where people can explore, see, and book Egypt’s 
                best dining spots all in one place. Whether you’re after a casual coffee, a romantic dinner, or a lively night out, 
                Ehgz makes it effortless to discover and reserve experiences across the country—helping both locals and visitors truly 
                explore Egypt’s vibrant food and drink scene.

                </p>
                <p>
                  Today, Ehgz helps thousands of food lovers discover their next favorite meal while 
                  supporting local restaurants, cafes, and bars in our community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/20250712_2257_Website Favicon Design_remix_01k0038eabfaev71vsx429n68e.png"
                alt="Ehgz brand design"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Numbers that show our commitment to connecting people with amazing dining experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Ehgz?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We've built our platform with your dining experience in mind, making it easier 
              than ever to discover and book amazing venues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind Ehgz, working every day to improve your dining experience.
            </p>
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="max-w-sm"
              >
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card p-6 text-center hover:shadow-lg transition-shadow duration-200 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.description}
                  </p>
                  <div className="mt-4 text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Visit Website →
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at Ehgz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quality First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We personally vet every venue to ensure exceptional quality and service. 
                Only the best make it onto our platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Community Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to supporting local businesses and fostering a vibrant 
                dining community in our city.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                User Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every feature is designed with you in mind. We prioritize simplicity, 
                speed, and reliability in everything we build.
              </p>
            </motion.div>
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
              Ready to Discover Your Next Favorite Meal?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of food lovers who trust Ehgz to help them find amazing dining experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/venues"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Browse Venues
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

