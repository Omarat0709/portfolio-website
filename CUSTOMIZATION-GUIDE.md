# Portfolio Customization Guide

## ✅ What's Been Updated

Your portfolio has been customized with your CV information! Here's what's been added:

### Personal Information
- **Name**: Omar El Attar
- **Email**: ore30@bath.ac.uk
- **Title**: MSc Student in AI | Software Developer | Tech Enthusiast
- **Education**: 
  - MSc in AI for Engineering & Design (University of Bath, 2024-Present)
  - BSc Computer Systems Engineering - First Class Honours (University of Bath, 2020-2024)

### Skills Added
- Python, C/C++, JavaScript
- React & Next.js, PyTorch, TensorFlow
- Node.js, Git & GitHub
- Machine Learning, Computer Vision
- Full Stack Development, REST APIs

### Projects Added
1. **AI & Machine Learning for Engineering & Design** (MSc Dissertation)
   - Technologies: Python, PyTorch, TensorFlow, CNN, LSTM
   - Category: Machine Learning
   - Has PDF download option

2. **Final Year Project - Water Supplies Detection**
   - Technologies: Computer Vision, IoT, Python, Embedded Systems
   - Category: Computer Vision
   - Has PDF and Video demo options

3. **PES Feeds-Balanz - C & Raspberry Pi**
   - Technologies: C, Raspberry Pi, Distributed Systems
   - Category: Embedded Systems

4. **Vending RISC CPU x Pong Game**
   - Technologies: Verilog, FPGA, RISC, Hardware Design
   - Category: Hardware Design

5. **Marvel API Character Scraper**
   - Technologies: Python, Marvel API, Pandas, Excel, REST APIs
   - Category: Data Analysis
   - Has Excel sample download option

6. **Portfolio Website**
   - Technologies: Next.js, TypeScript, Tailwind CSS, React
   - Category: Web Development

## 📋 Next Steps - To Complete Your Portfolio

### 1. Add Project Files
Create a `public/projects/` folder and add your files:

```bash
cd portfolio-website
mkdir public\projects
```

Then add these files:
- `msc-dissertation.pdf` - Your MSc dissertation
- `final-year-project.pdf` - Your final year project PDF
- `water-detection-demo.mp4` - Video demo of your water detection project (optional)
- `marvel-sample-output.xlsx` - Sample Excel output from your Marvel scraper (optional)

### 2. Update GitHub/LinkedIn Links
Replace placeholder links in these files:

**`components/Contact.tsx`** (Lines 38-51):
- Update GitHub URL: `https://github.com/yourusername` → Your actual GitHub
- Update LinkedIn URL: `https://linkedin.com/in/yourprofile` → Your actual LinkedIn

**`components/Footer.tsx`** (Lines 14-44):
- Update GitHub URL
- Update LinkedIn URL

**`components/Projects.tsx`** (Line 37):
- Update Marvel scraper GitHub repo URL if you have one

### 3. Add Profile Photo (Optional)
Add your photo to `public/` folder and update the hero or about section to display it.

### 4. Customize Colors/Theme (Optional)
The portfolio uses:
- Primary: Blue (#2563eb)
- Secondary: Purple (#9333ea)
- Dark mode: Automatic based on system preferences

You can change colors in the Tailwind classes (e.g., `bg-blue-600` → `bg-green-600`).

### 5. Deploy Your Portfolio

#### Option A: Vercel (Recommended - Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Option B: Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder

#### Option C: GitHub Pages
Requires additional setup for static export.

## 🎬 Adding Videos

For your water detection demo, you have two options:

### Local Video File:
1. Add video to `public/projects/water-detection-demo.mp4`
2. The project card will show a "🎥 Watch Demo" button automatically

### YouTube Video:
1. Upload video to YouTube
2. Update the project object to add:
   ```typescript
   videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
   ```

## 📧 Setting Up Contact Form

The contact form is currently frontend-only. To make it functional:

### Option 1: Formspree (Easy)
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update the form action in `components/Contact.tsx`

### Option 2: EmailJS
1. Sign up at https://www.emailjs.com
2. Follow their React integration guide

### Option 3: Build Your Own API
Create an API route in `app/api/contact/route.ts`

## 🚀 Running Your Portfolio

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit: http://localhost:3000

## 📱 Responsive Design
Your portfolio is fully responsive and works on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

## 🌗 Dark Mode
Automatic dark mode based on system preferences. Users can toggle using their OS settings.

---

**Need Help?** Check the README.md file for more information!
