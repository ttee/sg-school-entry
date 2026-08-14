#!/bin/sh
# Set DIRECT_URL to DATABASE_URL if not already set (for Vercel preview builds)
export DIRECT_URL="${DIRECT_URL:-$DATABASE_URL}"

# Generate Prisma Client (always needed)
prisma generate

# Skip migrations and seeding in Vercel preview (no DATABASE_URL or VERCEL_ENV=preview)
# Only run migrations on production or when DATABASE_URL is explicitly set
if [ -z "$DATABASE_URL" ] || [ "$VERCEL_ENV" = "preview" ]; then
  echo "⚠️  Skipping migrations and seed (Preview build or DATABASE_URL not set)"
else
  echo "✅ Running migrations and seed (Production or DATABASE_URL set)"
  prisma migrate deploy
  prisma db seed
fi

# Build Next.js app (always needed)
next build
