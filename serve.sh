#!/bin/bash

# -----------------------------
# Config
# -----------------------------
JEKYLL_PORT=4000
LIVERELOAD_PORT=35729
JEKYLL_HOST=0.0.0.0

# -----------------------------
# Kill any existing processes on these ports
# -----------------------------
echo "Checking for existing processes on ports $JEKYLL_PORT and $LIVERELOAD_PORT..."
fuser -k $JEKYLL_PORT/tcp 2>/dev/null || true
fuser -k $LIVERELOAD_PORT/tcp 2>/dev/null || true

# -----------------------------
# Start Jekyll
# -----------------------------
echo "Starting Jekyll server on host $JEKYLL_HOST, port $JEKYLL_PORT with LiveReload..."
bundle exec jekyll serve \
  --host $JEKYLL_HOST \
  --port $JEKYLL_PORT \
  --livereload \
  --livereload-port $LIVERELOAD_PORT \
  --incremental