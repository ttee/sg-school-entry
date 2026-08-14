#!/bin/sh
# Set DIRECT_URL to DATABASE_URL if not already set
export DIRECT_URL="${DIRECT_URL:-$DATABASE_URL}"

# Generate Prisma Client (always needed)
prisma generate

# Only run migrations and seed in production
if [ "$VERCEL_ENV" = "production" ]; then
  prisma migrate deploy && prisma db seed
fi

# Build Next.js app (always needed)
next build
