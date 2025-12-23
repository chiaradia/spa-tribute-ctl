# O Legado da Distribuição

A professional tribute website celebrating the career and contributions of **Celso Ternes Leal**, an Electrical Engineer who dedicated over 30 years to modernizing Santa Catarina's electrical infrastructure. This single-page application (SPA) honors his technical expertise, leadership in professional associations, and pioneering work in underground power distribution systems.

## About the Project

This website tells the story of Celso Ternes Leal's remarkable journey from the factory floors of electrical substations to the decision-making tables of professional engineering associations. It highlights:

- **Technical Excellence**: His pioneering work in underground power distribution networks and Smart Grid implementation
- **Leadership**: His roles as President of ACE (Associação Catarinense de Engenheiros) and Vice-President of CREA-SC
- **Innovation**: The "Via Gastronômica" project in Joinville, a landmark Smart Grid implementation
- **Legacy**: Over three decades of service at CELESC (Centrais Elétricas de Santa Catarina)

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for modern, responsive styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

You can check your versions by running:
```bash
node --version
npm --version
```

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd spa-tribute-ctl
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including React, Tailwind CSS, Framer Motion, and Lucide React.

### 3. Start the Development Server

```bash
npm run dev
```

The development server will start and you can view the website at:
```
http://localhost:5173
```

The page will automatically reload when you make changes to the source files.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section with main title
│   ├── About.tsx        # Biography and background section
│   ├── TechnicalSection.tsx  # Technical achievements and innovations
│   ├── LeadershipSection.tsx # Leadership roles and contributions
│   ├── Timeline.tsx     # Career timeline
│   ├── Footer.tsx       # Footer with summary
│   └── index.ts         # Component exports
├── constants/           # Constants and configuration
│   ├── animations.ts    # Framer Motion animation variants
│   └── colors.ts        # Color palette (currently unused, using Tailwind)
├── assets/              # Static assets
│   └── celso.png        # Profile image
├── App.tsx              # Main app component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind directives
```

## Features

- ✅ Fully responsive design optimized for mobile, tablet, and desktop
- ✅ Smooth scroll animations using Framer Motion
- ✅ Accessible semantic HTML structure
- ✅ Modern, elegant design with professional typography
- ✅ Optimized performance with Vite
- ✅ TypeScript for type safety

## Deployment

This project is configured for deployment on Vercel. Simply connect your repository to Vercel and it will automatically build and deploy.

### Manual Deployment

You can also deploy manually using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is a tribute website created to honor the professional legacy of Celso Ternes Leal.

## Acknowledgments

- Article content based on the technical and institutional trajectory of Eng. Celso Ternes Leal
- Special thanks to all who contributed to documenting this remarkable career

---

**"Do chão de fábrica das subestações às mesas de decisão."**

*From the factory floors of substations to the decision-making tables.*
