# Ahmed Awais Rice Exporters Website

A modern, responsive website for Ahmed Awais Rice Exporters - a premium Pakistani rice export business specializing in Basmati and non-Basmati rice varieties.

## Features

- 🌾 **Professional Design** - Clean, modern layout that builds trust with international buyers
- 📱 **Fully Responsive** - Perfect display on mobile, tablet, and desktop devices
- 🚀 **Fast Loading** - Optimized images and lightweight code for quick loading
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- 📧 **Contact Form** - Integrated inquiry form with email functionality
- 🎨 **Smooth Animations** - Subtle animations and transitions for better UX
- 🌍 **Global Ready** - Designed for international rice importers and buyers

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action
2. **Features** - Key business highlights (Premium Quality, Global Export, etc.)
3. **About** - Company background and statistics
4. **Products** - Rice varieties with detailed descriptions
   - Super Basmati Rice
   - Sella Basmati Rice
   - IRRI-6 Non-Basmati
   - Broken Rice
5. **Quality** - Quality standards and certifications
6. **Contact** - Comprehensive contact form and business information

## File Structure

```
rice-export-website/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

### Local Development

1. Download or clone the files to your computer
2. Open `index.html` in your web browser
3. The website will load and be fully functional locally

### Customization

#### Update Business Information

Edit the following in `index.html`:
- Company name: Currently "Ahmed Awais Rice Exporters"
- Contact information in the contact section
- Email addresses (currently placeholder: info@ahmedawaisrice.com)
- Phone numbers (currently placeholder: +92 300 1234567)
- Address details

#### Modify Content

- **Hero Section**: Update the main headline and description
- **About Section**: Replace with your actual company story and statistics
- **Products**: Modify rice varieties and descriptions as needed
- **Quality**: Update certifications and quality standards

#### Styling Changes

In `styles.css`, you can modify:
- Colors: Primary color is `#2c5530` (dark green)
- Fonts: Currently using 'Inter' from Google Fonts
- Layout: Responsive grid systems used throughout

## Deployment Options

### 1. Netlify (Recommended)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your website folder to Netlify dashboard
3. Your site will be live with a custom URL
4. Optional: Connect custom domain

**Steps:**
- Visit netlify.com
- Click "Deploy to Netlify"
- Drop your folder containing all files
- Get instant live URL

### 2. Vercel

1. Create account at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### 3. GitHub Pages

1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

### 4. Other Static Hosting Services

- **Firebase Hosting**
- **Surge.sh**
- **Render**
- **DigitalOcean App Platform**

## Email Contact Form Setup

The contact form is currently set up to:
1. Validate all required fields
2. Create a mailto link with pre-filled inquiry details
3. Open the user's default email client

### For Production Use:

To make the contact form fully functional, you'll need to:

1. **Use a form service** like:
   - Formspree (formspree.io)
   - Netlify Forms
   - EmailJS
   - Getform

2. **Set up a backend server** to handle form submissions

3. **Use serverless functions** (Vercel Functions, Netlify Functions)

### Quick Setup with Formspree:

1. Sign up at formspree.io
2. Replace the form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Customization Guide

### Images

Current images are from Unsplash. To use your own:
1. Replace image URLs in `index.html`
2. Use high-quality images (1000px+ width recommended)
3. Optimize images for web (use tools like TinyPNG)

### Content Updates

Search for these placeholders to replace:
- `Ahmed Awais` - Your name
- `info@ahmedawaisrice.com` - Your email
- `+92 300 1234567` - Your phone number
- Company descriptions and statistics

### Color Scheme

Primary colors used:
- Main Green: `#2c5530`
- Light Green: `#6b8e23`
- Background Green: `#f8fdf9`
- Text Dark: `#333`
- Text Light: `#666`

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight CSS and JavaScript
- Optimized images from Unsplash CDN
- Google Fonts for typography
- FontAwesome for icons
- Smooth scrolling and animations

## SEO Features

- Semantic HTML structure
- Meta description and title tags
- Alt text for images
- Proper heading hierarchy (H1, H2, H3)
- Clean URL structure

## Support

For customization help or technical support, you can:
1. Modify the files as needed
2. Use browser developer tools to debug
3. Test on different devices and browsers

## License

This website template is created for Ahmed Awais Rice Exporters business use.

---

**Ready to go live?** Simply upload these files to any static hosting service and your professional rice export website will be live!