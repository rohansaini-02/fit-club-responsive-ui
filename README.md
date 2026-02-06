# FitClub - Fitness & Gym Landing Page

A modern, fully responsive fitness website built with React that showcases gym services, membership plans, and client testimonials with smooth animations powered by Framer Motion.

## ✨ Features

- **Animated Hero Section** — Eye-catching landing with dynamic counters and smooth entrance animations
- **Fitness Programs Catalog** — Showcase of training programs with hover effects
- **Interactive Pricing Plans** — Three-tier membership options with feature comparison
- **Client Testimonials Carousel** — Animated slider with customer reviews and images
- **Email Subscription** — Integrated contact form using EmailJS for newsletter signups
- **Responsive Navigation** — Mobile-friendly hamburger menu with smooth scroll navigation
- **Brand Partner Showcase** — Display of partner brands (Nike, Adidas, New Balance)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 18 |
| Styling | CSS3 (Custom Properties) |
| Animations | Framer Motion |
| Navigation | React Scroll |
| Email Service | EmailJS |
| Build Tool | Create React App |

## 📁 Project Structure

```
src/
├── assets/              # Images, icons, and static files
├── components/
│   ├── ClientReviews/   # Testimonials carousel section
│   ├── FitnessPrograms/ # Training programs showcase
│   ├── Footer/          # Site footer
│   ├── HeroSection/     # Landing hero with CTA
│   ├── JoinCommunity/   # Email subscription form
│   ├── Navbar/          # Navigation bar
│   ├── PricingPlans/    # Membership pricing cards
│   └── WhyChooseUs/     # Key benefits section
├── data/                # Static data files
├── App.js               # Main application component
└── index.js             # Entry point
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fit-club-responsive-ui.git
   cd fit-club-responsive-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server on port 3000 |
| `npm run build` | Creates optimized production build |
| `npm test` | Runs test suite in watch mode |

## 🎨 Customization

- **Colors**: Edit CSS custom properties in `src/index.css`
- **Content**: Modify data files in `src/data/` folder
- **Email**: Update EmailJS credentials in `JoinCommunity.jsx`
 
