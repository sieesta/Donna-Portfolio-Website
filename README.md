# Donna's Personal Portfolio Website

A modern, feminine personal portfolio website built with HTML, CSS, and JavaScript. This portfolio features a girlish design with rose pink colors, smooth animations, and full responsiveness.

## ✨ Features

- **Girlish Design**: Feminine UI with rose pink color scheme and soft rounded elements
- **Dark Mode**: Toggle between light (rose pink) and dark (purple) themes with preference saving
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll animations, hover effects, and decorative elements
- **Personal Sections**: 
  - Hero section with profile picture and introduction
  - About Me with personal story, hobbies, and interests
  - Portfolio showcase with student projects
  - Skills section with programming and personal interests
  - Life Journey timeline with education and experiences
  - Contact form with social media links
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Decorative Elements**: Hearts, stars, and floating animations
- **Back to Top Button**: Heart-shaped button for easy navigation

## 🎨 Design Features

- **Color Palette**: 
  - Light Mode: Rose pink (#d63384) with soft pink backgrounds
  - Dark Mode: Bright pink (#ff6fb5) with deep purple backgrounds
- **Typography**: Inter font family for clean, modern look
- **Rounded Elements**: All cards, buttons, and containers have soft rounded corners
- **Hover Effects**: Interactive elements with smooth pink transitions
- **Decorative Accents**: Floating hearts and stars throughout the page
- **No Gradients**: Uses solid colors (except subtle skill bar gradients)

## 🚀 Getting Started

### Prerequisites

No special prerequisites needed! Just a modern web browser.

### Installation

1. Download or clone this repository to your computer
2. Open the folder containing the files
3. Double-click on `index.html` to open it in your browser

That's it! The website will open in your default browser.

## 📝 About This Portfolio

This portfolio tells the story of Donna, a proud mother and Computer Science student at Palawan State University in the Philippines. It showcases her journey of balancing motherhood with education, her love for spoken poetry, and her passion for technology.

### Personal Highlights:
- **Student**: Studying BS Computer Science at Palawan State University
- **Mother**: Proud parent of daughter Elize
- **Hobbies**: Reading spoken poetry, playing badminton, listening to music
- **Favorite Sites**: Facebook, Spotify, YouTube

## 📝 Customization Guide

The website is already customized with Donna's information, but you can easily update it to your own:

### 1. Personal Information

Open `index.html` and update the following:

- **Name**: Replace "Donna" with your name (line 30 and throughout)
- **Tagline**: Update "Developer / Researcher / Designer" to your roles
- **Profile Picture**: Add your photo to the `img` folder
  - Save your profile picture as `image.png` in the `img` folder
  - Recommended size: 500x500 pixels or larger (square format works best)
  - Currently configured in HTML: `<img src="img/image.png" alt="Profile Picture">`
  - If using a different format, update line 48 in index.html

### 2. About Section

- Edit the biography text to describe yourself
- Update the technology stack tags with your skills
- Modify the highlight items (Clean Code, Problem Solving, Collaboration)

### 3. Portfolio Projects

Update each project card with your own projects:
```html
<div class="portfolio-card">
    <div class="card-header">
        <i class="fas fa-globe"></i> <!-- Change icon -->
    </div>
    <h3>Your Project Name</h3>
    <p>Your project description...</p>
    <div class="card-tech">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
    <a href="your-project-link" class="card-link">View Project</a>
</div>
```

### 4. Skills Section

Update skill names and percentages:
```html
<div class="skill-item">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### 5. Experience Timeline

Edit the timeline items with your education and work experience:
- Update dates, job titles, company names
- Modify descriptions and bullet points
- Add or remove timeline items as needed

### 6. Contact Information

Update your contact details:
```html
<p>your.email@example.com</p>
<p>+1 (555) 123-4567</p>
<p>Your City, Your State</p>
```

Update social media links:
```html
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
```

### 7. Color Customization

To change the color scheme, edit `style.css`:

**Light Mode Colors (Girlish Rose Pink):**
```css
:root {
    --primary-color: #d63384;      /* Rose Pink */
    --secondary-color: #e685b5;    /* Lighter Pink */
    --bg-light: #fff5f8;           /* Very light pink */
    /* Change these to your preferred colors */
}
```

**Dark Mode Colors (Purple & Pink):**
```css
body.dark-mode {
    --primary-color: #ff6fb5;      /* Bright pink */
    --bg-white: #1a1625;           /* Deep purple-black */
    --bg-light: #2d2438;           /* Dark purple */
    /* Customize these for your dark mode theme */
}
```

Suggested alternative girlish color schemes:
- **Lavender & Purple**: `#9b59b6` (light) / `#bb8fce` (dark)
- **Coral & Peach**: `#ff6b6b` (light) / `#ffa07a` (dark)
- **Mint & Teal**: `#16a085` (light) / `#48c9b0` (dark)
- **Rose Gold**: `#b76e79` (light) / `#e8a0a0` (dark)
- **Charcoal**: `#2c3e50`

## 🛠️ File Structure

```
portfolio/
│
├── index.html          # Main HTML file with all content
├── style.css          # All styling and responsive design
├── script.js          # JavaScript for interactions and animations
├── README.md          # This file
└── img/               # Images folder
    ├── image.png      # Your profile picture (add your own)
    └── README.txt     # Instructions for adding images
```

## 🌙 Dark Mode

The website includes a beautiful dark mode toggle button in the navigation bar:
- Click the moon icon 🌙 to switch to dark purple mode with pink accents
- Click the sun icon ☀️ to switch back to light rose pink mode
- Your preference is automatically saved in the browser
- Both themes use girlish colors with soft, feminine aesthetics
- Dark mode features deep purple backgrounds with bright pink highlights

## 📱 Responsive Breakpoints

- **Desktop**: 969px and above
- **Tablet**: 768px - 968px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Tips for Best Results

1. **Images**: Use high-quality images for your profile picture (recommended: 500x500px)
2. **Projects**: Add real project links and screenshots
3. **Content**: Keep descriptions concise and professional
4. **Testing**: Test on multiple devices and browsers
5. **Optimization**: Compress images before uploading

## 🔧 Advanced Features (Optional)

The JavaScript file includes optional features that can be enabled:

### Typing Effect
Uncomment lines in `script.js` to enable typing animation for the hero subtitle:
```javascript
// Find and uncomment the typing effect section
```

### Cursor Trail
Uncomment the cursor trail code for a subtle interactive effect (desktop only)

## 📦 External Dependencies

- **Font Awesome**: For icons (loaded via CDN)
- **Google Fonts**: Inter font family (loaded via CDN)

## 🎯 Form Submission

The contact form currently displays a success message locally. To make it functional:

1. **Using a Form Service** (easiest):
   - Sign up for Formspree, Getform, or similar
   - Replace the form handling code with their provided code

2. **Using Your Own Backend**:
   - Create an API endpoint to handle form submissions
   - Update the JavaScript fetch code in `script.js`

Example with Formspree:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 📄 License

Free to use for personal and commercial projects. No attribution required.

## 🤝 Support

If you encounter any issues or have questions:
1. Check that all files are in the same folder
2. Ensure you have an internet connection (for external fonts and icons)
3. Try opening in a different browser
4. Clear your browser cache

## 🌟 Customization Ideas

- Add a blog section
- Include a testimonials area
- Add certifications section
- Create a photo gallery
- Add language toggle for multilingual support
- Implement dark mode toggle

## 📸 Screenshots

Open `index.html` in your browser to see the portfolio in action!

---

**Made with ❤️ for developers and creatives**

Good luck with your portfolio! 🚀
#   D o n n a - P o r t f o l i o - W e b s i t e  
 