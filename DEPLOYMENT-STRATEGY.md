# Portfolio Deployment Strategy

## Overview
Deploy each project to free hosting platforms first, then build the main portfolio website to showcase them with live demos.

## Deployment Order & Platform Strategy

### Phase 1: Fix & Deploy Individual Projects

#### 1. E-Store (Priority 1)
**Platform:** Render (Free tier) or Railway  
**Type:** Full-stack MERN application  
**GitHub:** https://github.com/pranoybasu/E-store

**Deployment Steps:**
1. Review code for deployment readiness
2. Add environment variable configuration
3. Set up MongoDB Atlas (free tier)
4. Configure backend for production
5. Build frontend for production
6. Deploy backend to Render
7. Deploy frontend to Vercel/Netlify
8. Connect frontend to deployed backend
9. Test full application flow

**Free Hosting Options:**
- **Backend:** Render (free tier) or Railway
- **Frontend:** Vercel or Netlify
- **Database:** MongoDB Atlas (free M0 tier)

---

#### 2. COVID-19 Statistics Dashboard (Priority 2)
**Platform:** Already deployed at coronavirus19stats.web.app  
**Type:** React web application  
**GitHub:** https://github.com/pranoybasu/coronavirus19stats

**Deployment Steps:**
1. Verify current deployment is working
2. Update dependencies if needed
3. Ensure data sources are still active
4. Test all features
5. Re-deploy if necessary

**Status:** ✅ Already deployed on Firebase

---

#### 3. Shrink-It (Priority 3)
**Platform:** Documentation/Download site on Vercel  
**Type:** Electron desktop application  
**GitHub:** https://github.com/pranoybasu/Shrink-It

**Deployment Strategy:**
Since this is a desktop app, we'll create:
1. Landing page with download links
2. Feature showcase
3. Installation instructions
4. Build executables for Windows/Mac/Linux
5. Host executables on GitHub Releases
6. Deploy landing page to Vercel

**Executables:**
- Windows: .exe installer
- macOS: .dmg installer  
- Linux: .AppImage or .deb

---

#### 4. Brick Breaker Game (Priority 4)
**Platform:** Web conversion or documentation site  
**Type:** Java Swing game  
**GitHub:** https://github.com/pranoybasu/Brick-Breaker-Game

**Deployment Strategy Options:**

**Option A: Convert to Web (Recommended)**
- Use CheerpJ to convert Java to WebAssembly
- Deploy playable version to Vercel
- Fully interactive demo

**Option B: Documentation Site**
- Create showcase page with screenshots
- Video gameplay demo
- Download .jar file option
- GitHub source code link

**Decision:** Will determine based on conversion feasibility

---

## Phase 2: Build Portfolio Website

### Portfolio Platform: Vercel
**Type:** Next.js 14+ with TypeScript  
**Domain:** pranoy-portfolio.vercel.app (free subdomain)

### Integration Points
```
Portfolio Website
├── E-Store Demo
│   ├── Live Link: https://[e-store-frontend].vercel.app
│   └── Admin Panel: https://[e-store-backend].render.com
├── COVID-19 Dashboard
│   └── Live Link: https://coronavirus19stats.web.app
├── Shrink-It
│   ├── Landing Page: https://shrink-it.vercel.app
│   └── Downloads: GitHub Releases
└── Brick Breaker
    └── Web Version: https://brick-breaker.vercel.app
    └── OR Documentation: Screenshots + video
```

---

## Free Hosting Platform Comparison

### For Full-Stack Apps (E-Store)

**Render**
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ Easy environment variables
- ✅ PostgreSQL/Redis included
- ⚠️ Sleeps after inactivity (30 sec wake-up)
- Limit: 750 hours/month

**Railway**
- ✅ $5 free credit monthly
- ✅ PostgreSQL/Redis/MongoDB
- ✅ Fast deployment
- ✅ No sleep on free tier
- ⚠️ Credit-based (runs out after usage)

**Recommendation:** Render for E-Store backend

---

### For Frontend Apps

**Vercel**
- ✅ Best for Next.js/React
- ✅ Instant deployment
- ✅ Automatic HTTPS
- ✅ Edge functions
- ✅ Analytics included
- No sleep, unlimited bandwidth

**Netlify**
- ✅ Great for static sites
- ✅ Form handling
- ✅ 100GB bandwidth/month
- ✅ Serverless functions

**Recommendation:** Vercel for all frontend deployments

---

### For Databases

**MongoDB Atlas**
- ✅ 512MB free tier (M0)
- ✅ Shared cluster
- ✅ Perfect for E-Store
- ✅ Easy connection

**Supabase** (if needed later)
- ✅ PostgreSQL
- ✅ 500MB database
- ✅ Auth included

**Recommendation:** MongoDB Atlas for E-Store

---

## Updated Implementation Plan

### Phase 1: Deploy E-Store (Project 1)

```mermaid
graph LR
    A[Review E-Store Code] --> B[Fix Issues]
    B --> C[Setup MongoDB Atlas]
    C --> D[Deploy Backend to Render]
    D --> E[Deploy Frontend to Vercel]
    E --> F[Connect & Test]
    F --> G[Document Live URLs]
```

**Tasks:**
1. Review E-Store codebase for deployment issues
2. Update dependencies and fix any vulnerabilities
3. Configure environment variables for production
4. Set up MongoDB Atlas cluster
5. Create Render account and deploy backend
6. Create Vercel project and deploy frontend
7. Connect frontend to backend API
8. Test authentication, products, cart, orders
9. Document live URLs and credentials

---

### Phase 2: Verify COVID-19 Dashboard (Project 2)

**Tasks:**
1. Test live site at coronavirus19stats.web.app
2. Verify all data sources are working
3. Update dependencies if needed
4. Re-deploy if necessary
5. Document live URL

---

### Phase 3: Deploy Shrink-It (Project 3)

**Tasks:**
1. Review Electron app code
2. Build executables for Windows/Mac/Linux
3. Create GitHub Release with binaries
4. Build landing page with Next.js
5. Deploy landing page to Vercel
6. Add download links to GitHub Releases
7. Document URLs

---

### Phase 4: Deploy Brick Breaker (Project 4)

**Tasks:**
1. Review Java game code
2. Attempt CheerpJ web conversion
3. If successful: Deploy web version to Vercel
4. If not: Create showcase page with video/screenshots
5. Document live URL or demo strategy

---

### Phase 5: Build Portfolio Website

**Tasks:**
1. Initialize Next.js 14+ with TypeScript
2. Set up Tailwind CSS and design system
3. Create project data with all live URLs
4. Build project showcase components
5. Implement navigation and hero section
6. Add About, Skills, and Contact sections
7. Integrate CV/resume viewer
8. Add theme toggle and animations
9. Implement SEO optimization
10. Deploy portfolio to Vercel
11. Take screenshots of all live projects
12. Update portfolio with final screenshots
13. Performance optimization
14. Final testing and polish

---

## Environment Variables Template

### E-Store Backend (.env)
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/estore
JWT_SECRET=your_jwt_secret_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### E-Store Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

### Portfolio Website (.env.local)
```
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_GA_ID=your_analytics_id
```

---

## Success Criteria

### Per Project
- ✅ Successfully deployed and accessible
- ✅ All features working correctly
- ✅ Responsive on mobile devices
- ✅ HTTPS enabled
- ✅ Fast load times
- ✅ No console errors

### Overall Portfolio
- ✅ All 4 projects deployed and live
- ✅ Portfolio showcases all projects
- ✅ Live demos working in portfolio
- ✅ Professional presentation
- ✅ Fast performance (Lighthouse 90+)
- ✅ SEO optimized
- ✅ Mobile responsive

---

## Timeline Estimate

1. **E-Store Deployment:** 2-3 hours
2. **COVID-19 Dashboard Verification:** 30 minutes
3. **Shrink-It Deployment:** 2-3 hours
4. **Brick Breaker Deployment:** 2-3 hours
5. **Portfolio Development:** 6-8 hours
6. **Testing & Polish:** 2 hours

**Total:** ~15-20 hours of work

---

## Next Steps

1. Start with E-Store deployment
2. Switch to Code mode for implementation
3. Follow deployment order: E-Store → COVID-19 → Shrink-It → Brick Breaker → Portfolio
4. Document each deployment with live URLs
5. Build portfolio website last with all live demos ready