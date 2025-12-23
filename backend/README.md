# Ecommerce Backend

A Node.js backend for an ecommerce application using Express, TypeScript, and Prisma.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env`:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce"
   JWT_SECRET="your-secret-key"
   ```

3. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Build and start production:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `src/` - Source code
  - `controllers/` - Route handlers
  - `middleware/` - Custom middleware
  - `routes/` - API routes
  - `index.ts` - Entry point
  - `server.ts` - Server configuration
- `prisma/` - Database schema and migrations