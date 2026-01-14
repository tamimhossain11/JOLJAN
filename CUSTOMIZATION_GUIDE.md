# Customization Guide - DoB Joljan Website

Complete guide to customize every aspect of your website.

---

## 📋 Table of Contents
1. [Adding Images](#adding-images)
2. [Updating Text Content](#updating-text-content)
3. [Changing Colors](#changing-colors)
4. [Adding Team Members](#adding-team-members)
5. [Writing Blog Posts](#writing-blog-posts)
6. [Updating Projects](#updating-projects)
7. [Customizing Navigation](#customizing-navigation)
8. [Social Media Links](#social-media-links)
9. [Video Customization](#video-customization)
10. [Advanced Styling](#advanced-styling)

---

## 🖼️ Adding Images

### Hero Section Background Video
**File:** `public/Joljan.mp4`

To replace:
1. Export your video (MP4 format, H.264 codec recommended)
2. Rename to `Joljan.mp4`
3. Replace file in `public/` folder
4. Refresh browser

**Recommended Settings:**
- Resolution: 1920x1080 or 1280x720
- Frame rate: 30fps
- Codec: H.264
- File size: < 50MB for best performance

### Team Photos
**Location:** `src/pages/Team.jsx`

**Current:** Placeholder icons

**Replace with:**
```jsx
// Line ~70-74 (in member card)
<div className="member-photo-placeholder">
  <img src="/team/member-name.jpg" alt={member.name} />
</div>
```

**Steps:**
1. Create folder: `public/team/`
2. Add photos: `member1.jpg`, `member2.jpg`, etc.
3. Update code as shown above
4. Recommended size: 400x400px, square

### Boat Images
**File:** `src/pages/Boat.jsx`

**Replace placeholder (line ~143):**
```jsx
<div className="boat-image-placeholder">
  <img src="/boat/main.jpg" alt="DoB Joljan" />
</div>
```

**Add boat renders (line ~185-195):**
```jsx
<GlassCard hover={false}>
  <img src="/boat/top-view.jpg" alt="Top View" />
</GlassCard>
```

### Gallery Page
**File:** `src/pages/Gallery.jsx`

Add your image grid:
```jsx
const images = [
  { src: '/gallery/img1.jpg', title: 'Water Test Day' },
  { src: '/gallery/img2.jpg', title: 'Team Workshop' },
  { src: '/gallery/img3.jpg', title: 'Assembly Process' },
];

// In JSX:
<div className="gallery-grid">
  {images.map((img, i) => (
    <GlassCard key={i}>
      <img src={img.src} alt={img.title} />
      <p>{img.title}</p>
    </GlassCard>
  ))}
</div>
```

---

## ✍️ Updating Text Content

### Home Page - Hero Section
**File:** `src/pages/Home.jsx` (lines 38-63)

```jsx
// Main title
<h1>DoB <span>Joljan</span></h1>

// Tagline
<h2>Your tagline here</h2>

// Description
<p>Your description here</p>
```

### About Section
**File:** `src/pages/Home.jsx` (lines 97-131)

Update three subsections:
```jsx
<h3>Who We Are</h3>
<p>Your content...</p>

<h3>Why RoboBoat</h3>
<p>Your content...</p>

<h3>Our Vision</h3>
<p>Your content...</p>
```

### Boat Technical Specs
**File:** `src/pages/Boat.jsx` (lines 29-36)

```javascript
const specifications = [
  { label: 'Length', value: '1.5 meters' },     // ← Update
  { label: 'Width', value: '0.6 meters' },      // ← Update
  { label: 'Weight', value: '25 kg' },          // ← Update
  { label: 'Hull Type', value: 'Catamaran' },   // ← Update
  { label: 'Material', value: 'Your material' }, // ← Update
  { label: 'Max Speed', value: '2.5 m/s' },     // ← Update
];
```

### Boat System Details
**File:** `src/pages/Boat.jsx` (lines 38-148)

Update each system's details array:
```javascript
{
  icon: <FiBox />,
  title: 'Hull & Mechanical Design',
  description: 'Your description',
  details: [
    'Detail point 1',  // ← Update each
    'Detail point 2',
    'Detail point 3',
  ]
}
```

---

## 🎨 Changing Colors

### Global Theme Colors
**File:** `src/index.css`

Add custom properties:
```css
:root {
  /* Primary brand colors */
  --primary-purple: #667eea;
  --primary-pink: #764ba2;
  
  /* Accent colors */
  --accent-blue: #4facfe;
  --accent-green: #43e97b;
  --accent-orange: #ffa751;
  
  /* Background colors */
  --bg-dark: #0a0e27;
  --bg-light: #f5f7fa;
}
```

### Update Gradient
**Files:** Multiple CSS files

Find and replace:
```css
/* Old */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* New - your colors */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Navigation Cards Colors
**File:** `src/pages/Home.jsx` (lines 24-47)

```javascript
{
  title: 'RoboBoat 2026',
  gradient: 'from-blue-500 to-cyan-500'  // ← Change
}
```

Then update CSS in `src/styles/Home.css`:
```css
.gradient-from-blue-500 {
  background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

---

## 👥 Adding Team Members

**File:** `src/pages/Team.jsx` (lines 10-90)

### Add New Department
```javascript
{
  id: 'your-department',
  icon: <FiTool />,  // Choose icon from react-icons
  name: 'Your Department Name',
  color: '#667eea',   // Department color
  description: 'What this team does',
  members: [
    // Add members below
  ]
}
```

### Add Team Member
```javascript
{
  name: 'Full Name',
  role: 'Position/Title',
  responsibility: 'Main task or responsibility'
}
```

### Add Photo
1. Save as: `public/team/firstname-lastname.jpg`
2. Update code:
```jsx
<div className="member-photo">
  <img src="/team/firstname-lastname.jpg" alt="Name" />
</div>
```

---

## 📝 Writing Blog Posts

**File:** `src/pages/Blog.jsx` (lines 16-165)

### Add New Post
```javascript
{
  title: 'Your Post Title',
  date: 'January 15, 2026',              // Post date
  author: 'Author Name',                  // Who wrote it
  category: 'Weekly Updates',             // Choose category
  categoryColor: '#43e97b',               // Category color
  excerpt: 'Brief description of post...', // Summary (2-3 lines)
  image: '🚤',                            // Emoji or icon
  tags: ['Tag1', 'Tag2', 'Tag3']         // Related topics
}
```

### Available Categories
1. **Weekly Updates** - Color: `#43e97b` (green)
2. **Testing Days** - Color: `#4facfe` (blue)
3. **Design Decisions** - Color: `#f093fb` (pink)
4. **Lessons Learned** - Color: `#ffa751` (orange)

### Add Blog Post Image
Instead of emoji, use image:
```javascript
image: '/blog/post-image.jpg'  // Add to public/blog/ folder
```

Update CSS to display:
```css
.blog-image-icon {
  background-image: url('/blog/post-image.jpg');
  background-size: cover;
  height: 200px;
}
```

---

## 🔧 Updating Projects

**File:** `src/pages/Projects.jsx`

### Featured Project (DoB Joljan)
**Lines 10-39**

```javascript
const featuredProject = {
  title: 'RoboBoat 2026 - DoB Joljan',
  year: '2025-2026',
  status: 'Ongoing',
  description: 'Update with your description...',
  technologies: [
    'Tech 1',  // Add your technologies
    'Tech 2',
    'Tech 3',
  ],
  highlights: [
    'Highlight 1',  // Key achievements
    'Highlight 2',
  ]
};
```

### Add Past Project
**Lines 41-95**

```javascript
{
  title: 'Project Name',
  year: '2024',
  category: 'Mobile Robotics',
  description: 'What you built and why...',
  technologies: ['Arduino', 'Python', 'Sensors'],
  outcome: 'What you learned or achieved',
  image: '🤖'  // Emoji or image path
}
```

### Update Competition History
**Lines 166-185**

```javascript
{
  year: '2024',
  event: 'Competition Name',
  achievement: '1st Place',
  description: 'Brief description'
}
```

---

## 🧭 Customizing Navigation

**File:** `src/components/Header.jsx` (lines 14-22)

### Change Menu Items
```javascript
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },     // ← Rename
  { name: 'New Page', path: '/newpage' }, // ← Add new
  // Remove line to hide page
];
```

### Add New Page
1. Create page file: `src/pages/NewPage.jsx`
2. Add to navigation (above)
3. Add route in `src/App.jsx`:
```jsx
<Route path="/newpage" element={<NewPage />} />
```

### Change Logo Text
**File:** `src/components/Header.jsx` (line 40-46)

```jsx
<Link to="/" className="logo">
  <div>Your Logo Text</div>  {/* Change this */}
</Link>
```

---

## 📱 Social Media Links

### Contact Page
**File:** `src/pages/Contact.jsx` (lines 38-58)

```javascript
{
  icon: <FiFacebook size={24} />,
  name: 'Facebook',
  url: 'YOUR_FACEBOOK_URL',      // ← Update
  color: '#1877f2',
  handle: '@yourhandle'          // ← Update
}
```

### Footer
**File:** `src/components/Footer.jsx` (lines 29-46)

```javascript
{
  icon: <FiFacebook size={24} />,
  url: 'YOUR_URL',               // ← Update
  label: 'Facebook'
}
```

### Add New Social Platform
```javascript
{
  icon: <FiTwitter size={24} />,  // Import from react-icons
  name: 'Twitter',
  url: 'https://twitter.com/yourhandle',
  color: '#1DA1F2',
  handle: '@yourhandle'
}
```

---

## 🎬 Video Customization

### Replace Background Video
**Current:** `public/Joljan.mp4`

**Steps:**
1. Export video (MP4, H.264)
2. Rename to `Joljan.mp4`
3. Replace in `public/` folder

**Optimization:**
```bash
# Using FFmpeg (install first)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k Joljan.mp4
```

### Adjust Video Overlay Darkness
**File:** `src/styles/Home.css` (lines 18-27)

```css
.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,    /* ← Adjust (0.0 to 1.0) */
    rgba(0, 0, 0, 0.5) 50%,   /* ← Less = brighter video */
    rgba(0, 0, 0, 0.7) 100%
  );
}
```

### Loading Screen Video
**File:** `src/components/LoadingScreen.jsx` (lines 31-36)

```jsx
<video className="loading-video" autoPlay loop muted playsInline>
  <source src="/your-video.mp4" type="video/mp4" />
</video>
```

---

## 💅 Advanced Styling

### Change Font
**File:** `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;  /* Your font */
}
```

### Adjust Card Blur Effect
**File:** `src/styles/GlassCard.css`

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);  /* Transparency */
  backdrop-filter: blur(10px);             /* Blur amount */
}
```

### Change Border Radius
**File:** `src/index.css`

```css
:root {
  --border-radius-small: 10px;
  --border-radius-medium: 15px;
  --border-radius-large: 20px;
}
```

### Modify Animations
**File:** `src/components/AnimatedSection.jsx`

```javascript
const variants = {
  hidden: { opacity: 0, y: 50 },        // Start position
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,                     // Animation speed
      ease: "easeOut"                    // Easing function
    }
  }
};
```

### Custom Button Styles
**File:** `src/styles/Home.css` (lines 94-126)

```css
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.2rem 2.5rem;               /* Size */
  border-radius: 50px;                   /* Roundness */
  font-size: 1.1rem;                     /* Text size */
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.5);  /* Shadow */
}
```

---

## 🎯 Quick Customization Checklist

Use this to track your customizations:

### Content
- [ ] Update hero title and description
- [ ] Add team member names and photos
- [ ] Write about section content
- [ ] Add boat specifications
- [ ] Write first 3 blog posts
- [ ] Update project descriptions

### Media
- [ ] Replace hero video (if desired)
- [ ] Add team photos
- [ ] Add boat photos
- [ ] Add gallery images
- [ ] Create favicon/logo

### Branding
- [ ] Update color scheme
- [ ] Change fonts (if desired)
- [ ] Update social media links
- [ ] Add contact information
- [ ] Update footer content

### Technical
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Test form submissions
- [ ] Deploy to production

---

## 💡 Pro Tips

1. **Test Changes Immediately**: The dev server auto-refreshes
2. **Use Browser DevTools**: Press F12 to inspect elements
3. **Mobile First**: Always test on phone after changes
4. **Backup Before Major Changes**: Copy files before editing
5. **Commit Often**: Use git to save versions
6. **Compress Images**: Use tinypng.com before uploading
7. **Keep It Simple**: Don't overcomplicate the design

---

## 🆘 Need More Help?

- **README.md** - Full documentation
- **SETUP_GUIDE.md** - Quick start guide
- **Email:** dreamsofbangladesh@gmail.com

---

**Happy Customizing! 🎨**

*Built with ❤️ for Dreams of Bangladesh Team*
