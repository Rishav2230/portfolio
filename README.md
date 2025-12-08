# Ravefolio - Gen-Z Rave Portfolio

A futuristic, high-performance portfolio website built with React, TypeScript, and Three.js. Features a cyber rave aesthetic with 3D animations, neon effects, and smooth transitions.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.181.2-black)

## ✨ Features

- **3D Hero Scene**: Animated sphere with neon glow effects and parallax starfield background
- **Interactive Profile Panel**: Clickable profile card with detailed information (Education, Work Experience, Projects, Certificates)
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Custom Cursor**: Interactive cursor with hover effects
- **Glassmorphism UI**: Modern glass-effect components with neon borders
- **Responsive Design**: Fully responsive across all devices
- **Modern Typography**: Space Grotesk for headings, Sora for body text
- **Dark Theme**: Gen-Z rave aesthetic with neon cyan, magenta, and violet accents

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS 4, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Routing**: Wouter
- **Backend**: Express.js, Node.js
- **Database**: Drizzle ORM (PostgreSQL ready)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishav2230/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (Express + Vite)
- `npm run dev:client` - Start client-only dev server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 📁 Project Structure

```
portfolio/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── layout/  # Layout components (Navbar, CustomCursor)
│   │   │   ├── three/   # 3D scene components
│   │   │   ├── ui/      # UI components (shadcn/ui)
│   │   │   └── ProfilePanel.tsx
│   │   ├── pages/       # Page components
│   │   ├── data/        # Portfolio data
│   │   └── lib/         # Utilities
│   └── public/          # Static assets
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── vite.ts         # Vite middleware
├── shared/              # Shared types/schemas
└── script/              # Build scripts
```

## 🎨 Customization

### Update Portfolio Data

Edit `client/src/data/portfolio.ts` to update:
- Personal information
- Skills and proficiency levels
- Projects and descriptions
- Social media links

### Update Profile Panel

Edit `client/src/components/ProfilePanel.tsx` to customize:
- Education details
- Work experience
- Projects with links
- Certificates

### Styling

The theme colors are defined in `client/src/index.css`. Modify the CSS variables to change the color scheme:

```css
--primary: 180 100% 50%;    /* Cyan Neon */
--secondary: 300 100% 50%;  /* Magenta Neon */
--accent: 270 100% 60%;     /* Violet Neon */
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy

The built files can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Any Node.js hosting (for full-stack)

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Rishav Kumar**
- Instagram: [@rishav_2230](https://instagram.com/rishav_2230)
- WhatsApp: [8271616422](https://wa.me/8271616422)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the UI component library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D graphics
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

⭐ Star this repo if you find it helpful!
