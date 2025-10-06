# Game Programmer Portfolio

A modern, responsive portfolio website for game programmers based on the design from tomaswallin.se.

## 📁 Project Structure

```
nachoperez/
├── css/
│   └── style.css          # All styling for the website
├── images/
│   ├── placeholder1.png   # Profile image / Project 1
│   ├── placeholder2.png   # Project 2
│   ├── placeholder3.png   # Project 3
│   └── placeholder4.png   # Additional project
├── js/
│   └── main.js           # Interactive features (video hover, animations)
├── index.html            # Main HTML structure
└── README.md             # This file
```

## ✨ Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Video Hover Effects**: Videos play when you hover over project cards
- **Smooth Scrolling**: Anchor links scroll smoothly to sections
- **Lazy Loading**: Videos load only when visible for better performance
- **Modern UI**: Clean, professional design with smooth animations
- **Font Awesome Icons**: Social media and UI icons
- **Google Fonts**: Montserrat font family

## 🎨 Customization Guide

### 1. Personal Information

Edit `index.html` and replace:
- `Your Name` - Your actual name
- `yourprofile` - Your LinkedIn username
- `yourusername` - Your GitHub and Instagram usernames
- Resume link
- Profile description text
- Education details
- Project information

### 2. Profile Image

Replace `images/placeholder1.png` with your profile photo (recommended size: 248x248px)

### 3. Project Videos/Images

Replace the placeholder images in the `images/` folder with:
- Videos: `.mp4` or `.webm` format
- Images: `.jpg`, `.png`, or `.webp` format
- Recommended aspect ratio: 16:9

Update the video source in `index.html`:
```html
<source src="path/to/your/video.mp4" type="video/mp4">
```

### 4. Colors & Styling

Edit `css/style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #2c3e50;      /* Main text and headings */
    --secondary-color: #3498db;    /* Accent color (links, icons) */
    --text-color: #333;            /* Body text */
    --bg-color: #f8f9fa;          /* Page background */
    --card-bg: #ffffff;           /* Card backgrounds */
    --hover-color: #e8f4f8;       /* Hover states */
}
```

### 5. Technical Skills

Update the badge list in `index.html`:
```html
<ul class="badge-list">
    <li class="badge">Your Skill 1</li>
    <li class="badge">Your Skill 2</li>
    <!-- Add more skills -->
</ul>
```

## 🚀 Getting Started

1. **Open the project**: Simply open `index.html` in a web browser
2. **Customize content**: Edit HTML, CSS, and add your images/videos
3. **Test responsiveness**: Resize browser window to see mobile layout
4. **Deploy**: Upload to any web hosting service (GitHub Pages, Netlify, etc.)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome 6**: Icon library
- **Google Fonts**: Montserrat font family

## 📝 Adding New Projects

To add a new project card, copy this template in `index.html`:

```html
<button type="button" class="job-card">
    <section>
        <div class="job-card-video video-loaded">
            <video class="lazy-video" playsinline loop preload="none" loading="lazy">
                <source src="images/your-project.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="video-additional-info">
            <div class="team-size">
                <i class="fas fa-users icon"></i> Team Size
            </div>
            <div class="time">
                <i class="fas fa-clock icon"></i> Duration
            </div>
            <div class="water-mark">
                <i class="fas fa-screwdriver-wrench icon"></i> Technology
            </div>
        </div>
        <h3 class="clickable-card-header">
            Project Name (Year)
            <i class="fas fa-chevron-right clickable-header-icon"></i>
            <small>Your Role</small>
        </h3>
        <p>
            Project description goes here.
        </p>
    </section>
</button>
```

## 🎯 JavaScript Features

The `main.js` file includes:
- Video hover play/pause
- Lazy loading for performance
- Smooth scroll navigation
- Scroll animations
- Intersection Observer API
- Utility functions (debounce, throttle)

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to netlify.com
2. Your site will be live instantly

## 📄 License

Feel free to use this template for your personal portfolio!

## 🙏 Credits

Design inspired by [Tomas Wallin's Portfolio](https://tomaswallin.se)

