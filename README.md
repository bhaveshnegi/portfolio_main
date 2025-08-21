# Bhavesh Negi - Portfolio Website

A modern, responsive portfolio website showcasing skills, experience, and projects as an AI Engineer and Data Science professional.

**🌐 Live Demo**  
[View Portfolio↗](https://portfolio-main-tau-lime.vercel.app/)

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form for potential employers/clients
- **SEO Optimized**: Proper HTML structure and meta tags
- **Fast Loading**: Optimized CSS and JavaScript for performance
- **Easy to Customize**: Well-organized code structure for easy updates
- **GitHub Integration**: Direct links to your actual GitHub repositories
- **Social Media Links**: Working LinkedIn and GitHub profile links

## 📁 File Structure

```
portfolio_main/
├── index.html          # Main HTML file with updated content
├── styles.css          # CSS styles with project link styling
├── script.js           # JavaScript functionality
├── config.js           # Configuration file for easy updates
├── README.md           # This file
└── DEPLOYMENT.md       # Deployment instructions
```

## 🛠️ Setup Instructions

1. **Download/Clone**: Get all files in a folder
2. **Open**: Double-click `index.html` or open in any web browser
3. **Local Server** (Optional): For development, use a local server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - VS Code: Use Live Server extension

## 🎯 Current Portfolio Content

### **Personal Information**
- **Role**: AI Engineer at @Phoal Digital
- **Location**: Vadodara, Gujarat, India
- **Contact**: +91 9313198316 | bhaveshnegi98@gmail.com

### **Work Experience**
- **Analytics Intern** at Adani Power Limited (Jan 2025 - May 2025)
- **Data Science Intern** at UniCoverge Technologies (Apr 2024 - Jun 2024)

### **Featured Projects** (with GitHub links)
- **Airline Market Demand Tracker** - Python-based analytics system
- **Automatic Concept Mapper** - JavaScript AI application
- **Customer Churn Prediction System** - ML project with Jupyter Notebooks
- **Netflix Data Analysis** - Data analysis project
- **SMS Spam Classification** - ML classification project

### **Social Media**
- **LinkedIn**: [https://linkedin.com/in/bhavesh-negi-59314224a/](https://linkedin.com/in/bhavesh-negi-59314224a/)
- **GitHub**: [https://github.com/bhaveshnegi](https://github.com/bhaveshnegi)

## 🎨 Customization Guide

### 1. Personal Information
**Option 1: Edit `index.html` directly**
- Name, title, and description
- Contact information
- Social media links
- Profile picture (replace placeholder icon)

**Option 2: Use `config.js` (Recommended)**
- Update personal information in the configuration file
- Changes automatically apply when you refresh the browser
- No need to edit HTML files

### 2. Content Updates
- **Experience**: Add new internships/jobs in the timeline section
- **Projects**: Add new projects to the projects grid
- **Skills**: Update skill tags in the skills section
- **Education**: Modify education details
- **Certificates**: Add new certifications

### 3. Styling Changes
Edit `styles.css` to customize:
- **Colors**: Change the color scheme (primary: #2563eb, accent: #fbbf24)
- **Fonts**: Update font families and sizes
- **Layout**: Modify spacing, margins, and grid layouts
- **Animations**: Adjust transition speeds and effects

### 4. Functionality Updates
Edit `script.js` to add:
- New interactive features
- Form submission handling
- Additional animations
- Analytics integration

### 5. Configuration Management
Edit `config.js` to easily update:
- Personal information and social links
- Project details and GitHub repositories
- Skills and certifications
- Theme colors and settings

## 🔧 Adding New Sections

### Example: Adding a Blog Section
```html
<!-- Add to index.html after projects section -->
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog & Articles</h2>
        <div class="blog-grid">
            <article class="blog-card">
                <h3>Data Science Trends 2024</h3>
                <p>Exploring the latest developments in machine learning...</p>
                <a href="#" class="read-more">Read More</a>
            </article>
        </div>
    </div>
</section>
```

### Add corresponding CSS
```css
/* Add to styles.css */
.blog {
    background: #f8fafc;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.blog-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
```

## 📱 Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted spacing and single-column layouts
- **Mobile**: Mobile-first navigation with hamburger menu

## 🚀 Deployment Options

### 1. GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

### 2. Netlify (Free)
1. Drag and drop your folder to Netlify
2. Get instant deployment with custom domain option
3. Automatic updates on file changes

### 3. Vercel (Free)
1. Connect your GitHub repository
2. Automatic deployment on push
3. Great performance and analytics

### 4. Traditional Hosting
Upload files to any web hosting service via FTP/cPanel

## 🔒 Security & Performance

- **Form Security**: Currently shows success message (add backend validation for production)
- **Image Optimization**: Use compressed images for better performance
- **CDN**: Font Awesome and Google Fonts are loaded from CDN
- **Minification**: Consider minifying CSS/JS for production

## 📈 Future Enhancements

### Short Term
- [ ] Add real profile picture
- [ ] Connect contact form to email service
- [ ] Add project screenshots/demos
- [ ] Integrate with LinkedIn/GitHub APIs

### Medium Term
- [ ] Add blog functionality
- [ ] Portfolio gallery with filters
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

### Long Term
- [ ] CMS integration for easy updates
- [ ] Analytics dashboard
- [ ] Interactive project demos
- [ ] Video introductions

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions (add more in `<head>`)
- Alt text for images
- Fast loading times

## 🐛 Troubleshooting

### Common Issues:
1. **Fonts not loading**: Check internet connection (Google Fonts)
2. **Icons not showing**: Verify Font Awesome CDN is accessible
3. **Mobile menu not working**: Check JavaScript console for errors
4. **Styling issues**: Clear browser cache and reload

### Browser Support:
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Internet Explorer: Limited support (consider polyfills)

## 📞 Support

For questions or customization help:
- **Email**: bhaveshnegi98@gmail.com
- **LinkedIn**: [https://linkedin.com/in/bhavesh-negi-59314224a/](https://linkedin.com/in/bhavesh-negi-59314224a/)
- **GitHub**: [https://github.com/bhaveshnegi](https://github.com/bhaveshnegi)

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Happy Coding! 🚀**

## 🔄 Recent Updates

- ✅ **Updated Role**: Changed from "Data Science & Analytics Professional" to "AI Engineer & Data Science Professional"
- ✅ **Added Real Projects**: Integrated actual GitHub repositories with direct links
- ✅ **Working Social Links**: LinkedIn and GitHub profiles now properly linked
- ✅ **Enhanced Project Cards**: Added "View Project" buttons with GitHub repository links
- ✅ **Configuration System**: Added `config.js` for easy portfolio updates
- ✅ **Improved Styling**: Enhanced project link styling and hover effects

*Last updated: January 2025*