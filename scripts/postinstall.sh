#!/bin/sh
# Set DIRECT_URL to DATABASE_URL if not already set (for Vercel preview installs)
export DIRECT_URL="${DIRECT_URL:-$DATABASE_URL}"
prisma generate
