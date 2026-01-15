# Deploying Your Portfolio to Vercel

## Quick Deployment (Recommended)

### Option 1: Deploy via Vercel Website (Easiest)

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/sarah713/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your portfolio repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Done! Your portfolio will be live at `https://your-portfolio.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Accept defaults for Vite project
   - Your portfolio will be deployed!

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

---

## Configuration

Your portfolio is already configured for Vercel! The `vite.config.js` file has the correct settings.

### Build Settings (Auto-detected by Vercel)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## Custom Domain (Optional)

Once deployed, you can add a custom domain:

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Environment Variables

Your portfolio doesn't need any environment variables, but if you add any in the future:

1. Go to your project on Vercel
2. Click "Settings" → "Environment Variables"
3. Add your variables

---

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Every pull request = automatic preview deployment
- You get a unique URL for each deployment

---

## Post-Deployment Checklist

After deploying:
- [ ] Test all navigation links
- [ ] Verify resume download works
- [ ] Check email/GitHub/LinkedIn links
- [ ] Test on mobile devices
- [ ] Share your portfolio URL!

---

## Your Portfolio URL

After deployment, your portfolio will be available at:
- **Vercel URL**: `https://[your-project-name].vercel.app`
- **Custom domain** (optional): `https://yourdomain.com`

---

## Troubleshooting

**Issue**: Resume not downloading
- **Solution**: Make sure `Sarah_Kulsoom_Product_Associate.pdf` is in the `public` folder and committed to Git

**Issue**: 404 on refresh
- **Solution**: Already handled! Vite's SPA routing is configured correctly

**Issue**: Build fails
- **Solution**: Run `npm run build` locally first to test
