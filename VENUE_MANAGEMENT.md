# Venue Management Guide

This guide explains how to add, update, and manage venues in the Ehgz platform.

## Overview

Venues are stored in a JSON file (`src/data/venues.json`) and are rendered dynamically throughout the site. This approach provides:

- **Easy management** without needing a database
- **Version control** for all venue changes
- **Fast loading** with static data
- **Simple deployment** without backend dependencies

## Venue Data Structure

Each venue requires the following information:

### Required Fields

```json
{
  "id": "unique-venue-id",
  "name": "Venue Name",
  "type": "restaurant|cafe|bar",
  "cuisine": "Cuisine Type",
  "location": "Neighborhood Name",
  "address": "123 Full Street Address",
  "phone": "+1 (555) 123-4567",
  "email": "contact@venue.com",
  "description": "Full detailed description of the venue, atmosphere, and what makes it special. This appears on the venue detail page.",
  "shortDescription": "Brief one-line description for venue cards",
  "rating": 4.5,
  "priceRange": "$$",
  "image": "https://images.unsplash.com/photo-example.jpg",
  "bookingUrl": "https://calendly.com/venue-booking",
  "hours": {
    "monday": "9:00 AM - 10:00 PM",
    "tuesday": "9:00 AM - 10:00 PM",
    "wednesday": "9:00 AM - 10:00 PM",
    "thursday": "9:00 AM - 10:00 PM",
    "friday": "9:00 AM - 11:00 PM",
    "saturday": "9:00 AM - 11:00 PM",
    "sunday": "10:00 AM - 9:00 PM"
  },
  "featured": false
}
```

### Optional Fields

```json
{
  "website": "https://venue-website.com",
  "gallery": [
    "https://image1.jpg",
    "https://image2.jpg",
    "https://image3.jpg"
  ],
  "features": [
    "Outdoor Seating",
    "WiFi",
    "Vegan Options",
    "Live Music"
  ]
}
```

## Field Specifications

### ID (`id`)
- **Format**: Lowercase, hyphen-separated
- **Example**: `"golden-spoon-restaurant"`
- **Note**: Used in URLs, must be unique

### Venue Type (`type`)
- **Options**: `"restaurant"`, `"cafe"`, `"bar"`
- **Usage**: Affects filtering and display icons

### Price Range (`priceRange`)
- **Options**: `"$"`, `"$$"`, `"$$$"`, `"$$$$"`
- **Meaning**:
  - `$`: Budget-friendly (under $15 per person)
  - `$$`: Moderate (15-30 per person)
  - `$$$`: Expensive (30-50 per person)
  - `$$$$`: Very Expensive (50+ per person)

### Rating (`rating`)
- **Format**: Number between 1.0 and 5.0
- **Example**: `4.5`
- **Display**: Shows with star icon

### Hours (`hours`)
- **Format**: Day name (lowercase) with time range
- **Closed**: Use `"Closed"` for closed days
- **Example**: `"monday": "5:00 PM - 10:00 PM"`

### Features (`features`)
- **Format**: Array of strings
- **Common Examples**:
  - `"Outdoor Seating"`
  - `"WiFi"`
  - `"Vegan Options"`
  - `"Live Music"`
  - `"Private Events"`
  - `"Happy Hour"`
  - `"Romantic"`
  - `"Family Friendly"`

### Images
- **Main Image**: Use high-quality, horizontal images (16:9 ratio preferred)
- **Gallery**: Additional images for detail page
- **Sources**: Unsplash, venue's official photos, or professional photography
- **Size**: Recommended 800px width minimum

## Adding a New Venue

### Step 1: Gather Information

Collect all required information:
- [ ] Basic details (name, type, cuisine, location)
- [ ] Contact information (address, phone, email)
- [ ] Descriptions (full and short)
- [ ] Hours of operation
- [ ] Pricing information
- [ ] Booking system URL
- [ ] High-quality images
- [ ] Special features/amenities

### Step 2: Create Venue Entry

1. **Open** `src/data/venues.json`
2. **Add** new venue object to the array
3. **Ensure** proper JSON formatting (commas, quotes)
4. **Generate** unique ID based on venue name

### Step 3: Test and Verify

1. **Save** the file
2. **Restart** development server (`npm start`)
3. **Check** venue appears in listings
4. **Visit** venue detail page
5. **Test** all links and booking integration

## Updating Existing Venues

### Changing Basic Information

1. **Find** venue by ID in `venues.json`
2. **Update** required fields
3. **Save** file and test changes

### Updating Images

1. **Replace** image URLs with new ones
2. **Ensure** images are accessible and high-quality
3. **Test** loading on different devices

### Modifying Hours or Features

1. **Update** relevant fields
2. **Maintain** consistent formatting
3. **Verify** changes display correctly

## Image Management

### Best Practices

- **Resolution**: Minimum 800px width
- **Aspect Ratio**: 16:9 for main images
- **Format**: JPG or WebP for better compression
- **Quality**: High quality but optimized for web
- **Alt Text**: Descriptive for accessibility

### Recommended Sources

1. **Unsplash**: Free high-quality stock photos
   - Search for restaurant/cafe/bar images
   - Use `?w=800&q=80` for optimized sizing

2. **Venue's Website**: Official photos (with permission)

3. **Professional Photography**: Best quality, venue-specific

### Example Image URLs

```json
{
  "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "gallery": [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80"
  ]
}
```

## Booking Integration

### Supported Booking Systems

- **Calendly**: `https://calendly.com/venue-name`
- **OpenTable**: `https://www.opentable.com/booking/...`
- **Resy**: `https://resy.com/cities/...`
- **Google Calendar**: Custom booking links
- **Custom Systems**: Any URL-based booking

### Setting Up Booking URLs

1. **Create** booking page in chosen system
2. **Copy** direct booking URL
3. **Add** to venue's `bookingUrl` field
4. **Test** booking flow from venue detail page

## Featured Venues

### Selection Criteria

Venues marked as `"featured": true` appear on:
- Homepage featured section
- Highlighted in search results
- Special promotional areas

### Guidelines for Featured Status

- **High Rating**: 4.5+ stars preferred
- **Complete Information**: All fields filled
- **High-Quality Images**: Professional photography
- **Positive Reviews**: Good customer feedback
- **Active Booking**: Functional reservation system

## Quality Control

### Before Adding Any Venue

- [ ] **Verify** all contact information
- [ ] **Test** booking URL functionality
- [ ] **Check** image quality and loading
- [ ] **Confirm** hours are current
- [ ] **Validate** JSON syntax

### Regular Maintenance

- **Monthly**: Review and update hours
- **Quarterly**: Check booking URLs
- **Semi-annually**: Update images and descriptions
- **Annually**: Review all venue information

## Common Issues and Solutions

### JSON Formatting Errors

**Problem**: Site breaks after adding venue
**Solution**: 
1. Check for missing commas
2. Ensure proper quote marks
3. Validate JSON syntax online

### Images Not Loading

**Problem**: Venue images appear broken
**Solution**:
1. Verify image URLs are accessible
2. Check for HTTPS (not HTTP) URLs
3. Ensure images exist and aren't deleted

### Booking Links Not Working

**Problem**: Reservation button doesn't work
**Solution**:
1. Test booking URL directly
2. Ensure URL is complete and correct
3. Check if booking system is active

### Venue Not Appearing

**Problem**: New venue doesn't show in listings
**Solution**:
1. Restart development server
2. Check JSON syntax for errors
3. Verify venue has all required fields

## Advanced Features

### Search Optimization

To improve venue discoverability:
- **Keywords**: Include relevant terms in descriptions
- **Features**: Add comprehensive feature lists
- **Location**: Use specific neighborhood names
- **Cuisine**: Be specific about food types

### Seasonal Updates

- **Holiday Hours**: Update during holiday seasons
- **Seasonal Menus**: Reflect in descriptions
- **Special Events**: Add to features temporarily

### Analytics Integration

Consider tracking:
- Popular venue searches
- Most viewed venues
- Booking conversion rates
- Geographic interest patterns

## Migration and Backup

### Backup Strategy

1. **Version Control**: Keep venues.json in Git
2. **Regular Exports**: Save copies periodically
3. **Change Documentation**: Track all modifications

### Data Migration

If moving to a database later:
- JSON structure maps well to database schema
- Existing URLs will continue working
- Gradual migration possible

## Support and Troubleshooting

### Getting Help

1. **Check** this documentation first
2. **Validate** JSON syntax online
3. **Test** in development environment
4. **Contact** development team if needed

### Best Practices Summary

- ✅ Always backup before making changes
- ✅ Test all changes in development
- ✅ Use consistent formatting
- ✅ Verify all URLs work
- ✅ Keep information current
- ✅ Use high-quality images
- ✅ Follow JSON syntax strictly

---

**Need help?** Contact the development team or refer to the main README.md for technical setup instructions.

