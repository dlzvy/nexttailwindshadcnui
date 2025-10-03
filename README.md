# Next.js Tailwind CSS shadcn/ui Starter Kit

A modern, production-ready Next.js starter template featuring Tailwind CSS for styling and shadcn/ui for beautiful, accessible components. This project showcases a clean tech stack presentation with dark mode support and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38BDF8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui)

## Features

- **Next.js 13.5.1** - The React Framework for Production
- **Tailwind CSS 3.3.3** - Utility-First CSS Framework
- **shadcn/ui** - Beautifully designed components built on Radix UI
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
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety

### Styling & UI
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Lucide React** - Beautiful & consistent icons
- **Tailwind CSS Animate** - Animation utilities

### Form Handling & Validation
- **React Hook Form 7.53.0** - Performant forms
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Features
- **next-themes** - Dark mode support
- **Recharts** - Chart library
- **date-fns** - Date utilities
- **clsx & tailwind-merge** - Utility functions
- **Sonner** - Toast notifications

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
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
│   └── page.tsx           # Home page
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
- Manual theme toggle
- Smooth transitions between themes
- Persistent theme selection
- Component-level theme awareness

## Available Scripts

```bash
# Development
npm run dev          # Start development server
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

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

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

- Open an [issue](https://github.com/yourusername/your-repo-name/issues)
- Start a [discussion](https://github.com/yourusername/your-repo-name/discussions)
- Reach out on [Twitter](https://twitter.com/yourusername)

---

If you find this project helpful, please consider giving it a star!
