# Glenn Canin Guitars - Modern Next.js Website

A modernized website for Glenn Canin Concert Doubletop Classical Guitars, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Fast Performance**: Server-side rendering and optimized images
- **Interactive Gallery**: Browse through the guitar collection with detailed specifications
- **Contact Form**: Easy-to-use contact form for inquiries
- **Clean Architecture**: Well-organized component structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
glenn-canin-guitars/
├── src/
│   ├── app/           # Next.js app router pages
│   │   ├── about/
│   │   ├── gallery/
│   │   ├── contact/
│   │   └── ...
│   └── components/    # Reusable React components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       └── ...
├── public/           # Static assets
└── ...config files
```

## Pages

- **Home**: Hero section, featured guitars, about preview
- **About**: Detailed information about Glenn Canin
- **Gallery**: Interactive guitar gallery with specifications
- **Contact**: Contact form and information
- **Additional Pages**: Doubletops, Videos, Players, Ordering, For Sale

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Modern icon library
- **Google Fonts**: Raleway and Cinzel fonts

## Customization

### Adding Images

Replace placeholder gradients with actual images by:
1. Add images to `/public/images/`
2. Update component imports to use `next/image`
3. Reference the image paths in components

### Styling

- Global styles: `/src/app/globals.css`
- Tailwind config: `/tailwind.config.ts`
- Component-specific styles use Tailwind utility classes

## License

Copyright © 2024 Glenn Canin Guitars. All rights reserved.# glenn-canin-guitars
