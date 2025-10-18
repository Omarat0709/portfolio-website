# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** to showcase your projects and professional work.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Clean and professional user interface
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🌗 **Dark Mode** - Automatic dark mode support
- ⚡ **Fast Performance** - Built with Next.js 14 and Turbopack
- 🎯 **Type-Safe** - Written in TypeScript for reliability
- 🎭 **Smooth Animations** - Elegant transitions and hover effects
- 📧 **Contact Form** - Easy way for visitors to reach out

## 🏗️ Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Favicon
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
├── public/                # Static assets
└── package.json           # Dependencies
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update your name and title
   - Customize the description

2. **About Section** (`components/About.tsx`):
   - Add your bio and background
   - Update skills and technologies

3. **Projects Section** (`components/Projects.tsx`):
   - Add your actual projects
   - Include project descriptions, technologies, and links
   - Replace placeholder images with real screenshots

4. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Add your GitHub profile URL
   - Add your LinkedIn profile URL

### Styling

- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Modify the color scheme by updating Tailwind classes

## 📦 Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://react.dev/)** - UI library

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 To-Do List

- [ ] Replace placeholder content with your actual information
- [ ] Add real project screenshots/images
- [ ] Update all social media links
- [ ] Implement contact form backend (optional)
- [ ] Add blog section (optional)
- [ ] Set up analytics (optional)
- [ ] Add meta tags and SEO optimization

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

---

**Happy coding!** 🎉
