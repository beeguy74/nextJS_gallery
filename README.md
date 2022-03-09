# nextJS_gallery
This is a [Next.js](https://nextjs.org/) project. I made a simple image gallery with api/generator that take "name" and "size" by get querry "/api/generator?size=big&name=test.png"
list of sizes:
"big" - 800 * 600,  "med" - 640 * 480,  "min" - 320 * 240,  "mic" - 150 * 150

## Getting Started

1) in file ".env" yo must set DATABASE_URL for prisma ORM
```
DATABASE_URL="postgresql://{YOUR_USER}:{YOUR_USER_PASS}@localhost:5432/gallery"
```

2) Install the dependencies

```bash
npm install
```

3) You must have postgreSQL. You should restore database and build app:

```bash
npm run build
```

4) than run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
