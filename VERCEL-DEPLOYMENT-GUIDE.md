# Vercel Deployment Guide

## Prerequisites
- GitHub repository: `pranoybasu/pranoys-portfolio` ✅ (Already set up)
- Vercel account (free tier works perfectly)

## Deployment Steps

### 1. Sign up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### 2. Import Your Repository
1. From Vercel dashboard, click **"Add New..."** → **"Project"**
2. In the "Import Git Repository" section, find `pranoybasu/pranoys-portfolio`
3. Click **"Import"**

### 3. Configure Project Settings
Vercel will auto-detect Next.js settings. Verify the following:

**Framework Preset:** Next.js  
**Root Directory:** `./` (default)  
**Build Command:** `npm run build` (auto-detected)  
**Output Directory:** `.next` (auto-detected)  
**Install Command:** `npm install` (auto-detected)

### 4. Environment Variables
This project doesn't require any environment variables at this time. All configuration is in the codebase.

If needed in the future, add them here:
- Click **"Environment Variables"** section
- Add key-value pairs
- Select environments (Production, Preview, Development)

### 5. Deploy
1. Click **"Deploy"**
2. Wait for the build process to complete (typically 2-3 minutes)
3. Once complete, you'll get a production URL like: `https://pranoys-portfolio.vercel.app`

### 6. Custom Domain (Optional)
1. Go to **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your custom domain (e.g., `pranoybasu.com`)
4. Follow DNS configuration instructions
5. Vercel will automatically generate SSL certificates

## Automatic Deployments

### Production Deployments
- Every push to the `master` branch triggers a production deployment
- Changes go live automatically after build succeeds

### Preview Deployments
- Every pull request gets its own preview URL
- Perfect for testing before merging to master

## Post-Deployment Checklist

After your first deployment, verify these features work correctly:

### ✅ Core Features
- [ ] Homepage loads with cosmic theme
- [ ] Background video plays (40% opacity)
- [ ] Background music auto-plays at 25% volume
- [ ] Music controls work (play/pause, volume, next track)
- [ ] Navigation menu works (smooth scroll to sections)
- [ ] Profile picture displays correctly

### ✅ Sections
- [ ] Hero section with 3D name and particles
- [ ] About section with timeline
- [ ] Skills section with grid layout
- [ ] Projects section with all 3 project cards
- [ ] GitHub stats display correctly on project cards
- [ ] Brick Breaker game section
- [ ] Contact section with working form
- [ ] CV download works

### ✅ Gallery Page
- [ ] Navigate to `/gallery` page
- [ ] All 12 images load correctly
- [ ] Lightbox/modal works when clicking images
- [ ] Back navigation to home works

### ✅ Interactive Features
- [ ] Cursor glow effect
- [ ] Konami code Easter egg (↑ ↑ ↓ ↓ ← → ← → B A)
- [ ] Brick Breaker game launches
- [ ] Project card hover effects
- [ ] Smooth scroll animations

### ✅ Responsive Design
- [ ] Test on mobile device (or Chrome DevTools mobile view)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Music controls are accessible on mobile

### ✅ SEO & Performance
- [ ] Check page title and meta description
- [ ] View page source - verify OpenGraph tags
- [ ] Share link on social media - check preview image
- [ ] Run Lighthouse audit (aim for 90+ performance score)

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing dependencies → Run `npm install` locally
   - TypeScript errors → Run `npm run build` locally to catch issues
   - Large files → Ensure assets are optimized

### Features Not Working in Production
1. **Audio/Video not playing:**
   - Check browser console for CORS errors
   - Verify files exist in `/public` folder
   - Some browsers block autoplay - user must interact first

2. **Images not loading:**
   - Verify image paths start with `/` (e.g., `/images/gallery/1.jpeg`)
   - Check Next.js Image optimization settings

3. **404 Errors:**
   - Clear Vercel cache and redeploy
   - Check `vercel.json` rewrite rules

### Performance Issues
1. Run Lighthouse audit
2. Check image optimization in `next.config.mjs`
3. Verify lazy loading is working (check Network tab)

## Monitoring

### Analytics (Optional)
1. Go to Project Settings → **Analytics**
2. Enable Vercel Analytics for free
3. Track page views, performance metrics, and visitor data

### Logs
- View deployment logs: **Deployments** tab
- View runtime logs: **Logs** tab (for serverless functions)

## Recommended Next Steps

1. **Add Custom Domain:**
   - Purchase domain from Namecheap, GoDaddy, etc.
   - Configure in Vercel → Domains

2. **Generate Favicon Files:**
   - Follow instructions in `FAVICON-SETUP.md`
   - Upload generated files to `/public`

3. **Create OpenGraph Image:**
   - Follow instructions in `/public/images/OG-IMAGE-INSTRUCTIONS.md`
   - Upload as `/public/images/og-image.png`

4. **Enable Analytics:**
   - Vercel Analytics (free)
   - Google Analytics (optional)

5. **Set Up Monitoring:**
   - Vercel automatically monitors uptime
   - Consider adding Sentry for error tracking

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Production URL
After deployment, your portfolio will be live at:
`https://pranoys-portfolio.vercel.app`

Or your custom domain if configured.

---

**Note:** The first deployment might take 3-5 minutes. Subsequent deployments are typically faster (1-2 minutes).