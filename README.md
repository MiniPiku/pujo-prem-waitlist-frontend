# Waitlist 2.0 - Single this Pujo?

A sleek, modern, and minimal dark-themed landing page built with React and TailwindCSS. Features neon yellow accents and a countdown timer for the Pujo dating app launch.

## Features

- **Dark Theme**: Sleek black background with subtle SVG wave patterns
- **Neon Yellow Accents**: Eye-catching yellow highlights for interactive elements
- **Responsive Design**: Optimized for all screen sizes
- **Countdown Timer**: Real-time countdown to September 21, 2025
- **Interactive FAQ**: Expandable accordion with smooth animations
- **Email Waitlist**: Functional email input with form validation
- **Social Proof**: User avatars and waitlist count display

## Components

- `HeaderBadge.jsx` - Logo and availability badge
- `Hero.jsx` - Main heading, email input, and countdown
- `Countdown.jsx` - Real-time countdown timer component
- `FAQ.jsx` - Interactive accordion with Q&A
- `Footer.jsx` - Copyright and tagline
- `useCountdown.js` - Custom hook for countdown logic

## Setup and Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Tech Stack

- **React 18** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Custom Hooks** - Reusable countdown logic
- **SVG Patterns** - Subtle background decorations

## Design Features

- **Color Scheme**: Black background with neon yellow (#FFFF00) accents
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Performance**: Optimized components with minimal re-renders

## Customization

- **Target Date**: Modify the countdown target in `src/components/Countdown.jsx`
- **Colors**: Update the color scheme in `tailwind.config.js`
- **Content**: Edit FAQ questions and answers in `src/components/FAQ.jsx`
- **Styling**: Adjust spacing and layout using TailwindCSS classes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for the Pujo dating app waitlist campaign.
