# Deployment Guide

This guide covers deploying the Ehgz React application to various platforms.

## Prerequisites

- Node.js 14+ installed locally
- Git repository set up
- Production build tested locally

## Platform Options

### 1. Vercel (Recommended)

Vercel is the easiest and fastest way to deploy React applications.

#### Quick Deploy

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/in with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Settings**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`
   - Root Directory: `./` (leave as default)

3. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys
   - Get your live URL

#### Custom Domain

1. **Add Domain** in Vercel dashboard
2. **Update DNS** records as instructed
3. **SSL** certificate automatically provisioned

#### Environment Variables

Add any environment variables in Vercel dashboard under Project Settings > Environment Variables.

### 2. Netlify

Alternative static site hosting with similar features.

#### Deploy Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`

3. **Deploy**
   - Click "Deploy site"
   - Site builds and goes live

#### Custom Domain

1. **Domain settings** in Netlify dashboard
2. **Update DNS** to Netlify nameservers
3. **SSL** automatically enabled

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Setup

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add Deploy Script** to package.json
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     },
     "homepage": "https://yourusername.github.io/repository-name"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to Pages section
   - Set source to gh-pages branch

### 4. AWS S3 + CloudFront

For more advanced deployment with AWS services.

#### Prerequisites
- AWS account
- AWS CLI configured

#### Steps

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-bucket-name
   ```

2. **Build and Upload**
   ```bash
   npm run build
   aws s3 sync build/ s3://your-bucket-name --delete
   ```

3. **Configure S3**
   - Enable static website hosting
   - Set index.html as index document
   - Set error.html or index.html as error document

4. **Set up CloudFront** (optional)
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure caching rules

## Pre-Deployment Checklist

### Required Updates

- [ ] **Update package.json**
  - Correct name and version
  - Update homepage URL if needed

- [ ] **Environment Variables**
  - Set NODE_ENV=production
  - Configure any API keys

- [ ] **Meta Tags**
  - Update site URL in public/index.html
  - Verify og:url and twitter:url tags

- [ ] **Analytics** (optional)
  - Add Google Analytics
  - Set up error tracking

### Testing

- [ ] **Build locally**
  ```bash
  npm run build
  npm install -g serve
  serve -s build
  ```

- [ ] **Test all pages**
  - Homepage loads correctly
  - Navigation works
  - Search and filters function
  - Venue details display properly
  - Forms submit (if implemented)

- [ ] **Performance check**
  - Run Lighthouse audit
  - Check Core Web Vitals
  - Test on mobile devices

- [ ] **SEO verification**
  - Meta tags present
  - Structured data valid
  - Images have alt tags

## Post-Deployment

### Custom Domain Setup

1. **Purchase domain** from registrar
2. **Update DNS records**
   - Point to hosting platform
   - Set up CNAME or A records
3. **Configure SSL**
   - Usually automatic with modern platforms
4. **Test thoroughly**

### Performance Monitoring

Consider adding:
- **Google Analytics** for traffic insights
- **Google Search Console** for SEO monitoring
- **Error tracking** (Sentry, LogRocket)
- **Performance monitoring** (Lighthouse CI)

### Content Delivery Network (CDN)

Most modern platforms include CDN automatically:
- **Vercel**: Global edge network included
- **Netlify**: Global CDN included
- **AWS**: CloudFront available

## Updating the Site

### Content Updates

1. **Edit venue data** in `src/data/venues.json`
2. **Commit changes** to repository
3. **Push to main branch**
4. **Automatic deployment** (if set up)

### Code Updates

1. **Test changes locally**
2. **Run build** to check for errors
3. **Commit and push**
4. **Monitor deployment**

## Troubleshooting

### Common Issues

**Build Failures**
- Check Node.js version compatibility
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

**Routing Issues**
- Ensure platform supports SPA routing
- Check that redirects are configured
- Verify vercel.json or _redirects file

**Image Loading Problems**
- Check image URLs are accessible
- Verify HTTPS URLs (not HTTP)
- Test images in browser directly

**Performance Issues**
- Optimize images (use WebP format)
- Enable compression on hosting platform
- Minimize bundle size

### Platform-Specific Issues

**Vercel**
- Check function logs in dashboard
- Verify environment variables
- Check deployment logs

**Netlify**
- Review build logs
- Check redirect rules
- Verify environment variables

**GitHub Pages**
- Ensure gh-pages branch exists
- Check repository settings
- Verify homepage URL in package.json

## Security Considerations

### Headers

The included `vercel.json` sets security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### HTTPS

Always use HTTPS in production:
- Modern platforms enable this automatically
- Redirect HTTP to HTTPS
- Use secure URLs for all external resources

### Environment Variables

Never commit sensitive data:
- Use environment variables for API keys
- Keep .env files in .gitignore
- Use platform-specific env var systems

## Monitoring and Analytics

### Basic Analytics

Add Google Analytics to track:
- Page views and user behavior
- Popular venues and searches
- Geographic distribution
- Mobile vs desktop usage

### SEO Monitoring

Set up Google Search Console:
- Monitor search performance
- Check for crawl errors
- Submit sitemap
- Track keyword rankings

### Error Tracking

Consider adding error tracking:
- Sentry for JavaScript errors
- LogRocket for user session replay
- Google Analytics for basic error events

## Backup and Recovery

### Data Backup

- **Git repository** serves as primary backup
- **Export venue data** regularly
- **Document deployment process**

### Recovery Plan

1. **Repository corruption**: Restore from Git backup
2. **Platform issues**: Deploy to alternative platform
3. **Domain problems**: Update DNS to backup hosting

## Cost Considerations

### Free Tiers

- **Vercel**: Free for personal/small projects
- **Netlify**: Free tier with bandwidth limits
- **GitHub Pages**: Free for public repositories
- **AWS**: Free tier with usage limits

### Scaling Costs

As traffic grows, consider:
- Bandwidth costs
- CDN charges
- Domain and SSL costs
- Premium platform features

## Support Resources

### Documentation

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [AWS S3 Docs](https://docs.aws.amazon.com/s3/)

### Community

- Platform-specific Discord/Slack communities
- Stack Overflow for technical issues
- React community forums

---

**Ready to deploy?** Choose your platform and follow the steps above. Most deployments complete in under 10 minutes!

