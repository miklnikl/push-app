# Push App

A modern Progressive Web Application (PWA) for tracking pushup workouts, built with React, TypeScript, and Vite. Features offline functionality, atomic design component architecture, and a clean, intuitive interface for fitness tracking.

## ✨ Features

- **Pushup Counter**: Interactive counter with increment/decrement buttons and manual input
- **Workout Tracking**: Submit and track completed workout sessions
- **PWA Support**: Install as a native app with offline functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Type Safety**: Full TypeScript support for robust development
- **Modern Routing**: Client-side routing with TanStack Router
- **Fast Development**: Hot Module Replacement (HMR) with Vite

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **Yarn** (recommended package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd push-app
   ```

2. **Install dependencies using Yarn:**
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   yarn dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
push-app/
├── public/                 # Static assets
│   ├── icon-192x192.png   # PWA icons
│   ├── icon-512x512.png   # PWA icons
│   ├── manifest.json      # PWA manifest
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Dynamic assets
│   ├── pages/             # Page components
│   │   ├── MainPage.tsx   # Landing page
│   │   └── WorkoutPage.tsx # Workout tracking page
│   ├── App.tsx            # Root app component
│   ├── App.css            # App styles
│   ├── main.tsx           # Application entry point
│   ├── router.tsx         # Route configuration
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite type declarations
├── package.json           # Project dependencies and scripts
├── yarn.lock              # Yarn lock file
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── eslint.config.js       # ESLint configuration
```

## ⚛️ Atomic Design Architecture

This project follows the Atomic Design methodology for component organization and reusability. While currently implementing a simple structure, the architecture is designed to scale with atomic design principles:

### Design System Hierarchy

**🔬 Atoms (Basic Building Blocks)**
- Buttons (increment/decrement, submit)
- Input fields (number input)
- Text elements (headings, paragraphs)
- Icons and basic UI elements

**🧬 Molecules (Simple Component Groups)**
- Counter controls (button + input + button)
- Navigation links with styling
- Form fields with labels

**🦠 Organisms (Complex Component Sections)**
- Complete workout counter interface
- Navigation bar with multiple links
- Workout completion feedback display

**📄 Templates (Page-Level Layouts)**
- Main page layout structure
- Workout page layout structure

**🖼️ Pages (Specific Instances)**
- `MainPage.tsx` - Landing page implementation
- `WorkoutPage.tsx` - Workout tracking page implementation

### Implementation Guidelines

For future development, follow these atomic design principles:

1. **Atoms**: Create in `src/components/atoms/`
   ```typescript
   // Example: Button atom
   interface ButtonProps {
     variant: 'primary' | 'secondary' | 'danger';
     onClick: () => void;
     children: React.ReactNode;
   }
   ```

2. **Molecules**: Create in `src/components/molecules/`
   ```typescript
   // Example: Counter molecule combining atoms
   interface CounterProps {
     value: number;
     onIncrement: () => void;
     onDecrement: () => void;
   }
   ```

3. **Organisms**: Create in `src/components/organisms/`
   ```typescript
   // Example: WorkoutTracker organism
   interface WorkoutTrackerProps {
     onSubmit: (count: number) => void;
   }
   ```

## 🛠️ Available Scripts

### Development
```bash
yarn dev          # Start development server with HMR
yarn build        # Build for production
yarn preview      # Preview production build locally
yarn lint         # Run ESLint code quality checks
```

### Package Management
Since this project uses **Yarn as the default package manager**, always use Yarn commands:

```bash
yarn add <package>        # Add production dependency
yarn add -D <package>     # Add development dependency
yarn remove <package>     # Remove dependency
yarn upgrade             # Upgrade all dependencies
```

## 📱 PWA Configuration

The app is configured as a Progressive Web Application with the following features:

### Manifest Configuration
- **Name**: Push App
- **Short Name**: PushApp
- **Theme Color**: #ffffff
- **Background Color**: #ffffff
- **Display**: Standalone
- **Start URL**: /

### Service Worker
- **Type**: Auto-update
- **Caching**: Automatic precaching of app shell
- **Offline Support**: Full offline functionality

### Installation
Users can install the app on their devices:
1. Visit the app in a supported browser
2. Look for the "Install" prompt or "Add to Home Screen" option
3. Follow the browser-specific installation process

## 🗂️ Routing Structure

The app uses TanStack Router for client-side navigation:

```typescript
Routes:
├── / (MainPage)           # Landing page with app introduction
└── /workout (WorkoutPage) # Interactive workout tracking interface
```

### Route Configuration
- **Root Route**: Provides navigation layout and outlet for child routes
- **Index Route**: Main landing page with app overview
- **Workout Route**: Interactive pushup counter and tracking interface

## 🎨 Styling Approach

### Current Implementation
- **CSS-in-JS**: Inline styles for rapid prototyping
- **Responsive Design**: Flexible layouts that adapt to screen sizes
- **Component-Scoped Styles**: Styles defined within components

### Recommended Future Approach
For atomic design implementation, consider:
- **Styled Components** or **Emotion** for component-level styling
- **Design Tokens** for consistent spacing, colors, and typography
- **CSS Modules** for scoped component styles
- **Tailwind CSS** for utility-first atomic styling

## 🔧 Development Guidelines

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Hot Reload**: Instant feedback during development

### Component Development
1. **Start with Atoms**: Build basic reusable components
2. **Compose Molecules**: Combine atoms into functional groups
3. **Build Organisms**: Create complex, feature-complete sections
4. **Design Templates**: Establish consistent page layouts
5. **Implement Pages**: Create specific page instances

### Performance Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination in production builds
- **Asset Optimization**: Automatic asset compression and optimization
- **Service Worker**: Intelligent caching for improved load times

## 🚀 Deployment

### Build Process
```bash
yarn build
```

This creates a `dist/` directory with:
- Optimized and minified JavaScript bundles
- Compressed CSS files
- Service worker for PWA functionality
- PWA manifest and icons

### Deployment Targets
The built application can be deployed to:
- **Vercel**: Automatic deployments from Git
- **Netlify**: Static site hosting with PWA support
- **GitHub Pages**: Free hosting for public repositories
- **Any Static Host**: Standard static file hosting

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow atomic design principles** for new components
4. **Run tests and linting**: `yarn lint`
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

## 📋 Roadmap

### Current Features
- [x] Basic pushup counter functionality
- [x] PWA configuration and offline support
- [x] TypeScript implementation
- [x] Responsive design

### Planned Enhancements
- [ ] Implement full atomic design component library
- [ ] Add workout history and analytics
- [ ] User authentication and data persistence
- [ ] Multiple exercise types support
- [ ] Social sharing capabilities
- [ ] Advanced PWA features (push notifications)

## 🐛 Troubleshooting

### Common Issues

**Yarn Installation Problems**
```bash
# Clear yarn cache
yarn cache clean

# Remove node_modules and reinstall
rm -rf node_modules
yarn install
```

**Build Failures**
```bash
# Check TypeScript errors
yarn tsc --noEmit

# Run linting
yarn lint
```

**PWA Not Installing**
- Ensure HTTPS is enabled (required for PWA)
- Check browser PWA support
- Verify manifest.json is accessible

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React + TypeScript + Vite**

For questions or support, please open an issue in the repository.
