# Game Designer Portfolio

A modern, animated portfolio website for game designers inspired by professional game developer portfolios. Features particle effects, typing animations, smooth scrolling, and responsive design.

## 🎮 Features

- **Particle Background Effect** - Interactive particle.js animation
- **Typing Animation** - Dynamic text animation showcasing different design specializations
- **Smooth Scrolling** - Seamless navigation between sections
- **Sticky Header** - Navigation that follows you as you scroll
- **Fixed Social Links** - Always-visible social media buttons on bottom right
- **Portfolio Grid** - Showcase your projects with hover effects
- **Responsive Design** - Looks great on all devices
- **Modern Animations** - Smooth transitions and effects throughout

## 📁 Project Structure

```
nachoperez/
├── css/
│   └── style.css           # All styles and animations
├── images/
│   ├── placeholder1.png    # Profile/Project images
│   ├── placeholder2.png
│   ├── placeholder3.png
│   └── placeholder4.png
├── js/
│   └── main.js            # Interactive features
├── index.html             # Main HTML structure
└── README.md              # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `index.html` and replace:

```html
<!-- Logo and Name -->
<h1><a href="#home"><strong>your</strong>name</a></h1>
<h2 class="hero-title">YOUR NAME</h2>

<!-- Contact Info -->
<a href="mailto:your.email@example.com">
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
```

### 2. Typing Animation Text

In `js/main.js`, change the words array:

```javascript
const words = ['Game', 'Combat', 'AI', 'Systems', 'Level'];
// Change to your specializations
```

### 3. About Section

Replace the about text in `index.html`:

```html
<div class="about-text">
    <p>Your bio and experience here...</p>
</div>
```

### 4. Portfolio Projects

Update project information:

```html
<div class="portfolio-info">
    <h3>Your Project Title</h3>
    <p class="project-role">Your Role</p>
    <div class="project-tech">
        <span><i class="fas fa-users"></i> Team Size</span>
        <span><i class="fas fa-clock"></i> Duration</span>
        <span><i class="fas fa-gamepad"></i> Engine</span>
    </div>
</div>
```

### 5. Skills

Update your skills in `index.html`:

```html
<div class="skill-badge">Your Skill</div>
<!-- Add or remove as needed -->
```

### 6. Images

Replace the placeholder images in the `images/` folder:
- Use your own project screenshots
- Recommended dimensions: 800x600px or similar aspect ratio
- Supported formats: JPG, PNG, WebP

### 7. Fixed Social Links

Update your social media links at the bottom of `index.html`:

```html
<!-- Fixed Social Links -->
<div class="fixed-social-links">
    <a href="https://github.com/yourusername" target="_blank" class="social-btn">
        <i class="fab fa-github"></i>
    </a>
    <!-- Add more social links as needed -->
</div>
```

These links are always visible on the bottom right of the screen!

### 8. Color Scheme

Customize colors in `css/style.css`:

```css
:root {
    --primary-color: #0170B9;      /* Main brand color */
    --secondary-color: #17E0C6;    /* Accent color */
    --text-color: #ffffff;         /* Text color */
    --bg-dark: #0a0a0a;           /* Background */
}
```

### 9. Particle Effect

Customize particle behavior in `js/main.js`:

```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 40 },      // Number of particles
        color: { value: '#17E0C6' }, // Particle color
        size: { value: 3.25 },      // Particle size
        // ... more options
    }
});
```

## 🚀 Getting Started

1. **Open the project**: Open `index.html` in your web browser
2. **Customize content**: Edit HTML, CSS, and JS files
3. **Replace images**: Add your project images to the `images/` folder
4. **Test responsiveness**: Resize browser to see mobile layout

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to netlify.com
2. Your site will be live instantly with a custom URL

### Vercel
1. Import your GitHub repository
2. Deploy with one click
3. Get automatic HTTPS and custom domain support

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive features
- **Particles.js** - Particle background effect
- **Font Awesome** - Icon library
- **Google Fonts** - Montserrat & Spline Sans

## ✨ Key Features Explained

### Typing Animation
The hero section features a typing animation that cycles through different design specializations (Game, Combat, AI, Systems, Level Design).

### Smooth Scroll
All anchor links scroll smoothly to their target sections with offset for the fixed header.

### Particle Background
Interactive particle effect using particles.js that responds to mouse hover.

### Fixed Social Links
Always-visible social media buttons positioned at the bottom right of the screen with smooth hover animations.

### Mobile Menu
Responsive hamburger menu for mobile devices with smooth slide-in animation.

### Portfolio Grid
Project cards with image hover effects and overlay information.

## 📝 Tips for Best Results

1. **Use high-quality images** - Projects look best with good screenshots
2. **Keep descriptions concise** - Highlight your key contributions
3. **Update regularly** - Add new projects as you complete them
4. **Test on devices** - Check how it looks on phone, tablet, desktop
5. **Optimize images** - Compress images for faster loading

## 🎯 Sections Overview

1. **Hero** - Your name and rotating specializations
2. **Backstory** - Optional section for your journey
3. **Portfolio** - Your featured projects
4. **Skills** - Technologies and tools you use
5. **About** - Your bio and experience
6. **Contact** - Ways to reach you
7. **Footer** - Social links and copyright
8. **Fixed Social Links** - Always-visible social buttons on bottom right

## 🔧 Advanced Customization

### Add New Sections
Copy existing section structure and modify content:

```html
<section id="new-section" class="custom-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

### Custom Animations
Add CSS animations in `style.css`:

```css
@keyframes yourAnimation {
    from { /* start state */ }
    to { /* end state */ }
}

.your-element {
    animation: yourAnimation 1s ease;
}
```

### JavaScript Interactions
Add custom interactivity in `main.js`:

```javascript
document.querySelector('.your-element').addEventListener('click', function() {
    // Your code here
});
```

## 📄 License

Feel free to use this template for your personal portfolio!

## 🙏 Credits

- Design inspired by professional game designer portfolios
- Particles.js by Vincent Garreau
- Font Awesome for icons
- Google Fonts for typography

---

**Made with ❤️ for Game Designers**

Update this portfolio with your amazing work and launch your career! 🚀

