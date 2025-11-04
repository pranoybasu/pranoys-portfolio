# Projects Inventory

This document catalogs all projects to be featured in the portfolio.

## Project 1: COVID-19 Statistics Dashboard
**Type:** Web Application  
**Tech Stack:** React, Leaflet Maps, Material-UI, Bootstrap, Papa Parse  
**Status:** Completed & Deployed  
**Live URL:** https://coronavirus19stats.web.app/  
**GitHub:** https://github.com/pranoybasu/coronavirus19stats

### Description
Interactive COVID-19 statistics visualization dashboard with real-time data, geographical mapping, and temporal analysis. Features data visualization through charts, maps, and statistical analysis.

### Key Features
- Interactive world map with COVID-19 data overlay
- Real-time statistics tracking
- Data visualization with multiple chart types
- Timeline-based data exploration
- Population-normalized statistics

### Tech Highlights
- React with hooks for state management
- Leaflet.js for interactive maps
- Chart.js/Recharts for data visualization
- Material-UI components
- CSV data parsing with Papa Parse
- Firebase hosting deployment

### Screenshots Needed
- Main dashboard view
- Map visualization
- Charts and graphs
- Mobile responsive view

---

## Project 2: E-Store
**Type:** Full-Stack E-Commerce Application  
**Tech Stack:** MERN Stack (MongoDB, Express, React, Node.js)  
**Status:** Completed  
**GitHub:** https://github.com/pranoybasu/E-store

### Description
Full-featured e-commerce platform built with MERN stack. Complete with user authentication, product management, shopping cart, and payment integration.

### Key Features
- User authentication and authorization (JWT)
- Product catalog with search and filtering
- Shopping cart functionality
- Order management system
- Admin dashboard
- Payment integration
- Image upload functionality

### Tech Highlights
- RESTful API design
- MongoDB database modeling
- JWT authentication
- Bcrypt password hashing
- Express.js backend
- React frontend with hooks
- File upload with Multer
- Deployment-ready with Heroku config

### Screenshots Needed
- Product listing page
- Product detail page
- Shopping cart
- Admin dashboard
- Checkout process

---

## Project 3: Shrink-It
**Type:** Desktop Application  
**Tech Stack:** Electron, Node.js, ImageMin  
**Status:** Completed  
**Cross-Platform:** Windows, macOS, Linux

### Description
Desktop application for optimizing and compressing images without quality loss. Built with Electron for cross-platform compatibility.

### Key Features
- Drag-and-drop image optimization
- Support for JPEG and PNG formats
- Batch processing
- Quality preservation
- File size reduction tracking
- Native OS integration

### Tech Highlights
- Electron framework for desktop apps
- ImageMin for image optimization
- MozJPEG and PNGQuant integration
- Cross-platform packaging
- Native file system access
- Electron logging

### Screenshots Needed
- Main application interface
- Before/after comparison
- Batch processing view
- Settings panel

---

## Project 4: Brick Breaker Game
**Type:** Desktop Game  
**Tech Stack:** Java, Swing  
**Status:** Completed  

### Description
Classic brick breaker arcade game implemented in Java with Swing GUI. Features physics-based collision detection and progressive difficulty levels.

### Key Features
- Classic brick breaker gameplay
- Physics-based ball movement
- Collision detection system
- Score tracking
- Multiple difficulty levels
- Smooth animations

### Tech Highlights
- Java Swing for GUI
- Object-oriented design
- Game loop implementation
- Event handling
- Custom graphics rendering

### Screenshots Needed
- Gameplay screenshot (1.png, 2.png available)
- Start screen
- Game over screen

---

## Portfolio Project Categorization

### By Technology
- **Frontend:** COVID-19 Dashboard, E-Store Frontend
- **Full-Stack:** E-Store
- **Desktop:** Shrink-It, Brick Breaker Game
- **Data Visualization:** COVID-19 Dashboard

### By Complexity
- **Advanced:** E-Store (Full MERN), COVID-19 Dashboard (Data Viz)
- **Intermediate:** Shrink-It (Electron)
- **Foundational:** Brick Breaker Game (Java)

### Featured Projects (Homepage)
1. COVID-19 Statistics Dashboard
2. E-Store
3. Shrink-It

---

## Project Page Structure for Each Project

### Standard Template
1. **Hero Section**
   - Project title
   - Brief tagline
   - Main screenshot/demo
   - Tech stack badges
   - Live demo + GitHub buttons

2. **Overview**
   - Problem statement
   - Solution approach
   - Key metrics/results

3. **Features Section**
   - Grid of key features with icons
   - Animated feature demonstrations

4. **Technology Deep Dive**
   - Architecture diagram
   - Tech stack explanation
   - Technical challenges solved

5. **Screenshots/Demo Gallery**
   - Carousel of screenshots
   - Video walkthrough (if available)
   - Live embed (for web projects)

6. **Code Snippets**
   - Highlighted interesting code sections
   - Technical implementation details

7. **Results & Impact**
   - Statistics (if available)
   - User feedback
   - Lessons learned

8. **Related Projects**
   - Links to similar projects
   - Next/Previous navigation

---

## Live Demo Integration Strategy

### For Web Projects
- **COVID-19 Dashboard**: 
  - Direct iFrame embed (already deployed)
  - Fallback to screenshots + external link
  
- **E-Store**: 
  - Need to deploy to free hosting (Vercel/Render)
  - Can embed storefront, link to admin panel

### For Desktop Projects
- **Shrink-It**: 
  - Screenshot gallery
  - Video demonstration
  - Download links for executables
  
- **Brick Breaker Game**: 
  - Could convert to web version with CheerpJ
  - Alternative: Video gameplay + screenshots
  - GitHub link for source code

---

## GitHub Repository Integration

### Data to Fetch from GitHub API
- Repository statistics (stars, forks, watchers)
- Last updated date
- Primary language
- Topics/tags
- README content
- Contributor count
- Open issues count
- License information

### Fallback for Private/Missing Repos
- Manual JSON data entry
- Static metadata
- Cached responses

---

## Project Metadata Schema

```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  
  // Classification
  category: 'web' | 'mobile' | 'desktop' | 'game' | 'data-viz';
  tags: string[];
  featured: boolean;
  priority: number; // Display order
  
  // Links
  liveUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
  
  // Media
  thumbnail: string;
  images: string[];
  demoType: 'iframe' | 'video' | 'screenshots' | 'none';
  
  // Technology
  techStack: {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'tools';
    icon?: string;
  }[];
  
  // Metadata
  year: number;
  duration?: string;
  teamSize?: number;
  role?: string;
  
  // GitHub Integration
  github?: {
    stars: number;
    forks: number;
    language: string;
    lastUpdated: string;
  };
  
  // Highlights
  keyFeatures: string[];
  challenges: string[];
  learnings: string[];
  
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}
```

---

## Next Steps for Project Integration

1. **Gather Assets**
   - Take screenshots of all projects
   - Record demo videos where applicable
   - Collect logos and icons

2. **Deploy Web Projects**
   - Deploy E-Store to Vercel/Render
   - Verify COVID-19 Dashboard deployment
   - Ensure all demos are accessible

3. **Create Project Content**
   - Write detailed descriptions
   - Document technical challenges
   - List key features and learnings

4. **GitHub Integration**
   - Set up GitHub API access
   - Create data fetching utilities
   - Implement caching strategy

5. **Build Portfolio Pages**
   - Project grid/list view
   - Individual project detail pages
   - Filtering and search
   - Related projects logic