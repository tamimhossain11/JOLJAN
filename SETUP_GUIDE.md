# Quick Setup Guide - DoB Joljan Website

## ⚡ Quick Start (5 minutes)

### 1. Install Node.js
Download from: https://nodejs.org/ (v16 or higher)

### 2. Open Terminal/Command Prompt
Navigate to project folder:
```bash
cd /Users/tamimhossain/Desktop/Codes/DOB/JOLJAN
```

### 3. Install Dependencies
```bash
npm install
```
⏱️ Takes ~2 minutes

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open Browser
Visit: `http://localhost:5173`

🎉 **Done! Website is running locally!**

---

## 🎨 First Customizations

### Add Your Team Photo
1. Save image as `team-photo.jpg` in `public/` folder
2. Open `src/pages/Team.jsx`
3. Find line with `group-photo-placeholder`
4. Replace with:
```jsx
<img src="/team-photo.jpg" alt="Team" />
```

### Add Your Boat Photo
1. Save image as `boat-photo.jpg` in `public/` folder
2. Open `src/pages/Boat.jsx`
3. Find line with `boat-image-placeholder`
4. Replace with:
```jsx
<img src="/boat-photo.jpg" alt="DoB Joljan" />
```

### Update Team Members
**File:** `src/pages/Team.jsx`

Find the `members` array and update:
```javascript
{
  name: 'John Doe',              // ← Change this
  role: 'Mechanical Lead',        // ← Change this
  responsibility: 'Hull design'   // ← Change this
}
```

### Update Contact Email
**File:** `src/pages/Contact.jsx` (line ~13)
```javascript
value: 'your-email@example.com',  // ← Change this
```

**File:** `src/components/Footer.jsx` (line ~95)
```javascript
<a href="mailto:your-email@example.com">  // ← Change this
```

---

## 📱 Test on Your Phone

### Method 1: Same WiFi Network
1. Find your computer's IP address:
   - **Mac**: System Preferences → Network
   - **Windows**: `ipconfig` in Command Prompt
   - Look for something like `192.168.1.xxx`

2. On your phone's browser, visit:
   ```
   http://192.168.1.xxx:5173
   ```
   (Replace xxx with your IP)

### Method 2: Deploy to Test
```bash
npm run build
vercel
```
Follow prompts to get a live URL.

---

## 🚀 Deploy to Internet

### Option 1: Vercel (Easiest)
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
npm run build
vercel
```

3. Follow prompts
4. Get your live URL: `https://your-site.vercel.app`

### Option 2: Netlify (Drag & Drop)
1. Run build:
```bash
npm run build
```

2. Go to: https://app.netlify.com/drop
3. Drag the `dist` folder
4. Done! Get your URL

---

## ❓ Common Issues

### "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Port 5173 already in use
**Solution:** 
```bash
# Kill the process
lsof -ti:5173 | xargs kill

# Or use different port
npm run dev -- --port 3000
```

### Video not loading
**Solution:** Make sure `Joljan.mp4` is in the `public/` folder

### Changes not showing
**Solution:** 
1. Save all files
2. Refresh browser (Cmd+R or Ctrl+R)
3. Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

### Build fails
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

---

## 📝 Daily Development Workflow

### Start Working
```bash
npm run dev
```

### Make Changes
1. Edit files in `src/` folder
2. Save
3. Browser auto-refreshes

### Stop Server
Press `Ctrl+C` in terminal

### Deploy Updates
```bash
npm run build
vercel --prod
```

---

## 🎯 Next Steps

1. ✅ Add team photos
2. ✅ Update team member information
3. ✅ Write first blog post
4. ✅ Add gallery images
5. ✅ Test on mobile devices
6. ✅ Deploy to live URL
7. ✅ Share with team!

---

## 📞 Need Help?

**Email:** dreamsofbangladesh@gmail.com

**Check:**
- Main documentation: `README.md`
- Customization guide: `CUSTOMIZATION_GUIDE.md`

---

**Remember:** Save files, refresh browser, and have fun building! 🚤
