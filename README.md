# D-BANS - Fashion Brand Launch Website

A modern, animated landing page for the D-BANS clothing brand featuring an interactive 3D marquee effect.

## Features

- ✨ Interactive 3D marquee with rotating fashion images
- 🎨 Modern dark theme design
- 📱 Responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Framer Motion animations
- 🎯 Tailwind CSS styling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
D-BANS/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   │   ├── 3d-marquee.tsx
│   │   ├── wobble-card.tsx
│   │   └── text-reveal-card.tsx
│   ├── 3d-marquee-demo.tsx
│   ├── wobble-card-demo.tsx
│   └── text-reveal-card-preview.tsx
├── lib/                  # Utility functions
│   └── utils.ts
└── ...config files
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React 18** - UI library

## Customization

The main branding components can be customized:

- **3D Marquee**: Edit `components/3d-marquee-demo.tsx` for fashion images and branding
- **Text Reveal**: Modify `components/text-reveal-card-preview.tsx` for messaging
- **Wobble Cards**: Update `components/wobble-card-demo.tsx` for features and content
- Brand colors, animations, and call-to-action buttons

## License

This project is private and proprietary to D-BANS. 