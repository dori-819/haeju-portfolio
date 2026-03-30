# Haeju Yeo Portfolio

Next.js portfolio site based on Haeju Yeo's resume and portfolio materials.

## Local development

1. Install Node.js 20 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Production build

```bash
npm run build
npm run start
```

## Deploy

This project is ready for Vercel deployment.

```bash
npm install -g vercel
vercel
```

Or connect the repository in the Vercel dashboard and deploy with:

- Framework preset: `Next.js`
- Node version: `20.x`
- Build command: `npm run build`
- Output directory: `.next`
