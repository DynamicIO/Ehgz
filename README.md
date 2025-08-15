# Ehgz - Restaurant Discovery Platform

A modern, responsive React application for discovering and booking restaurants, cafes, and bars. Built with React, Tailwind CSS, and Framer Motion.

## Features

- 🍽️ **Venue Discovery**: Browse restaurants, cafes, and bars with advanced filtering
- 🔍 **Smart Search**: Search by name, cuisine, location, or features
- 📱 **Mobile-First Design**: Fully responsive across all devices
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 🎨 **Beautiful Animations**: Smooth transitions with Framer Motion
- 📅 **Easy Booking**: Integrated with third-party booking systems
- ⚡ **Fast Performance**: Optimized for speed and SEO
- 🎯 **SEO Optimized**: Proper meta tags and structured data

## Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Icons**: Heroicons (via SVG)
- **Data**: JSON-based static data
- **Deployment**: Ready for Vercel

## Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ehgz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.js          # Main navigation with theme toggle
│   │   ├── Footer.js          # Site footer with links
│   │   └── Layout.js          # Page wrapper with SEO
│   └── ui/
│       ├── VenueCard.js       # Venue display component
│       └── SearchBar.js       # Search and filter component
├── contexts/
│   └── ThemeContext.js        # Light/dark mode state management
├── data/
│   └── venues.json            # Venue data (restaurants, cafes, bars)
├── pages/
│   ├── Home.js                # Landing page with featured venues
│   ├── Venues.js              # Venue listing with search/filter
│   ├── VenueDetail.js         # Individual venue page
│   ├── About.js               # About page
│   └── Contact.js             # Contact page with form
├── App.js                     # Main app with routing
├── index.js                   # App entry point
└── index.css                  # Global styles and Tailwind imports
```

## Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- Custom color palette (primary/secondary themes)
- Dark mode support (class-based)
- Custom animations
- Extended font family (Inter)

### Theme Colors

```javascript
primary: {
  500: '#0ea5e9',  // Main brand color
  600: '#0284c7',  // Hover states
  // ... full scale
}
```

## Adding New Venues

Venues are stored in `src/data/venues.json`. To add a new venue:

1. **Open the venues.json file**
2. **Add a new venue object** with all required fields:

```json
{
  "id": "unique-id",
  "name": "Venue Name",
  "type": "restaurant|cafe|bar",
  "cuisine": "Cuisine Type",
  "location": "Neighborhood",
  "address": "Full Address",
  "phone": "+1 (555) 123-4567",
  "email": "contact@venue.com",
  "website": "https://venue.com",
  "description": "Full description...",
  "shortDescription": "Brief description...",
  "rating": 4.5,
  "priceRange": "$|$$|$$$|$$$$",
  "image": "https://image-url.jpg",
  "gallery": ["url1.jpg", "url2.jpg", "url3.jpg"],
  "features": ["Feature 1", "Feature 2"],
  "hours": {
    "monday": "9:00 AM - 10:00 PM",
    // ... other days
  },
  "bookingUrl": "https://booking-system-url",
  "featured": true|false
}
```

3. **Save the file** and the venue will appear on the site

### Required Fields

- `id`: Unique identifier (used in URLs)
- `name`: Venue name
- `type`: Must be "restaurant", "cafe", or "bar"
- `cuisine`: Type of food/drinks served
- `location`: Neighborhood or area
- `description`: Full description for detail page
- `shortDescription`: Brief description for cards
- `rating`: Number between 1-5
- `priceRange`: "$", "$$", "$$$", or "$$$$"
- `image`: Main image URL
- `bookingUrl`: Link to booking system

### Optional Fields

- `gallery`: Array of additional images
- `features`: Array of amenities/features
- `website`: Venue website URL
- `featured`: Whether to show on homepage

## Customization

### Updating Branding

1. **Logo/Name**: Update in `src/components/layout/Header.js`
2. **Colors**: Modify `tailwind.config.js`
3. **Meta Tags**: Update `public/index.html` and `src/components/layout/Layout.js`
4. **Content**: Update text in individual page components

### Adding New Pages

1. **Create component** in `src/pages/`
2. **Add route** in `src/App.js`
3. **Update navigation** in `src/components/layout/Header.js`

### Booking Integration

The app uses `bookingUrl` fields to redirect to external booking systems. To integrate with different booking providers:

1. **Update venue data** with correct booking URLs
2. **Modify booking buttons** in `VenueCard.js` and `VenueDetail.js` if needed
3. **Consider adding booking widgets** directly in the components

## SEO Optimization

The site includes several SEO optimizations:

- **Dynamic meta tags** for each page
- **Structured headings** (H1, H2, H3 hierarchy)
- **Image alt tags** for accessibility
- **Fast loading** with optimized images
- **Mobile-first design**
- **Clean URLs** with React Router

### Adding Meta Tags

Update meta tags in individual page components using the Layout component:

```javascript
<Layout
  title="Page Title"
  description="Page description for search engines"
  keywords="relevant, keywords, here"
>
  {/* Page content */}
</Layout>
```

## Performance

The app is optimized for performance:

- **Code splitting** with React.lazy (can be added)
- **Image lazy loading** with loading="lazy"
- **Minimal bundle size** with tree shaking
- **Fast animations** with Framer Motion
- **Efficient re-renders** with React hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Deploy automatically** on every push to main
3. **Custom domain** support available

### Other Platforms

The build output is static and can be deployed to:
- Netlify
- GitHub Pages
- Amazon S3 + CloudFront
- Any static hosting service

## Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## License

This project is private and proprietary.

## Support

For questions or support:
- Email: hello@ehgz.com
- Documentation: This README
- Issues: GitHub Issues (if applicable)

---

**Built with ❤️ by the Ehgz team**

