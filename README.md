# Next.js Tailwind CSS shadcn/ui Starter Kit

A modern, production-ready Next.js starter template featuring Tailwind CSS for styling and shadcn/ui for beautiful, accessible components. This project showcases a clean tech stack presentation with dark mode support and smooth animations, powered by the latest Next.js 15 with Turbopack.

![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38BDF8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-0.9.0-000000?style=for-the-badge&logo=shadcnui)

## Features

- **Next.js 15.0.3** - The React Framework for Production with Turbopack
- **Tailwind CSS 3.4.15** - Utility-First CSS Framework
- **shadcn/ui 0.9.0** - Beautifully designed components built on Radix UI
- **Turbopack** - Lightning-fast development server with up to 53% faster builds
- **Dark Mode Support** - Seamless theme switching with smooth transitions
- **Responsive Design** - Mobile-first approach with responsive layouts
- **TypeScript** - Type-safe development experience
- **Component Library** - 30+ pre-built UI components
- **React Hook Form** - Performant forms with easy validation
- **Charts & Data Visualization** - Recharts integration
- **Theme System** - CSS variables for consistent theming
- **Optimized Build** - Production-ready with best practices

## Tech Stack

### Core Framework
- **Next.js 15.0.3** - React framework with App Router and Turbopack
- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type safety

### Styling & UI
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **shadcn/ui 0.9.0** - Component library built on Radix UI
- **Lucide React 0.460.0** - Beautiful & consistent icons
- **Tailwind CSS Animate** - Animation utilities

### Form Handling & Validation
- **React Hook Form 7.53.2** - Performant forms
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers 3.9.1** - Form validation integration

### Additional Features
- **next-themes 0.4.3** - Dark mode support
- **Recharts 2.13.3** - Chart library
- **date-fns 4.1.0** - Date utilities
- **clsx 2.1.1 & tailwind-merge 2.5.4** - Utility functions
- **Sonner 1.7.0** - Toast notifications

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dlzvy/nexttailwindshadcnui.git
   cd nexttailwindshadcnui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page with tech stack showcase
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── .eslintrc.json        # ESLint configuration
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Available Components

This starter kit includes 30+ pre-built shadcn/ui components:

- **Form Components**: Input, Button, Select, Checkbox, Radio Group, Switch
- **Navigation**: Menu, Dropdown Menu, Navigation Menu, Breadcrumb
- **Feedback**: Alert, Dialog, Toast, Tooltip, Popover
- **Data Display**: Card, Table, Badge, Avatar, Skeleton
- **Layout**: Accordion, Tabs, Separator, Scroll Area
- **Charts**: Various chart components with Recharts
- **And many more...**

## Dark Mode

The project includes built-in dark mode support with:

- Automatic system preference detection
- Manual theme toggle with smooth animations
- Persistent theme selection
- Component-level theme awareness
- Beautiful gradient backgrounds

## Turbopack Performance

This project leverages Next.js 15 with Turbopack for:

- **53% faster local development** startup
- **94% faster code updates** with Fast Refresh
- **Optimized bundling** for production builds
- **Improved caching** for better performance

## Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## Configuration

### Adding New Components

Add new shadcn/ui components using the CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

### Customizing Theme

Modify the theme in `tailwind.config.ts` and `app/globals.css`:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      border: "hsl(var(--border))",
      background: "hsl(var(--background))",
      // ... more colors
    }
  }
}
```

### Component Customization

All components are fully customizable. Simply copy a component from `components/ui` and modify it to fit your needs.

## Deployment

### Docker (Recommended for Containerized Deployment)

This project includes full Docker support with multi-stage builds for optimal performance.

#### Quick Start with Docker

1. **Development Mode:**
   ```bash
   docker-compose up app-dev
   ```
   Access your app at [http://localhost:3000](http://localhost:3000)

2. **Development with Turbopack:**
   ```bash
   docker-compose --profile turbo up app-turbo
   ```
   Access your app at [http://localhost:3002](http://localhost:3002)

3. **Production Mode:**
   ```bash
   docker-compose --profile production up app-prod
   ```
   Access your app at [http://localhost:3001](http://localhost:3001)

#### Docker Commands

```bash
# Build and run development container
docker-compose up app-dev --build

# Run in background
docker-compose up app-dev -d

# View logs
docker-compose logs app-dev

# Stop containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

#### Docker Configuration

- **Multi-stage build** for optimized image size
- **Node.js 18 Alpine** for minimal footprint
- **Non-root user** for security
- **Health checks** and proper signal handling
- **Volume mounting** for development
- **Environment variables** for configuration

### Vercel (Recommended for Serverless)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with Turbopack optimization

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## What's New in This Version

- **Upgraded to Next.js 15.0.3** with Turbopack support
- **Updated Tailwind CSS to 3.4.15** with latest utilities
- **Enhanced shadcn/ui to 0.9.0** with improved components
- **Added TypeScript 5.6.3** for better type safety
- **Improved performance** with optimized dependencies
- **Enhanced dark mode** with smooth transitions
- **Modern tech stack showcase** page
- **Full Docker support** with multi-stage builds and development profiles
- **Container-ready deployment** with optimized Docker configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

## Support

If you have any questions or need help, feel free to:

- Open an [issue](https://github.com/dlzvy/nexttailwindshadcnui/issues)
- Start a [discussion](https://github.com/dlzvy/nexttailwindshadcnui/discussions)
- Reach out on [Twitter](https://twitter.com/XBerryAO)

---

If you find this project helpful, please consider giving it a ⭐ star!
