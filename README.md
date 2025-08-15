# Glenn Canin Guitars

A professional website for Glenn Canin, master luthier specializing in classical guitars with double-top construction.

## Features

- **Content Management**: Full CMS integration with Decap CMS for easy content editing
- **Responsive Design**: Modern, mobile-first design optimized for all devices
- **Guitar Showcase**: Detailed displays of available guitars with specifications
- **Artist Gallery**: Featured players and testimonials
- **Video Gallery**: Performance videos and construction demos
- **Custom Ordering**: Complete ordering process information
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript

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

## Content Management

- **CMS Access**: Navigate to `/admin` to access the content management system
- **Authentication**: Requires Netlify Identity setup for production use
- **Content Types**:
  - Guitars (specifications, pricing, images)
  - Players (artist profiles and testimonials)
  - Videos (YouTube embeds and descriptions)
  - Gallery (workshop and guitar photos)
  - Pages (home, about, contact, ordering)

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Decap CMS**: Git-based content management
- **Netlify Identity**: Authentication for CMS
- **Gray Matter**: Frontmatter parsing for markdown content

## Deployment

The site is optimized for deployment on Netlify or Vercel:

```bash
npm run build
```

## License

Private project for Glenn Canin Guitars.
