# ---------- Stage 1: Build ----------
FROM node:22-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json pnpm-lock.yaml* ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy project files
COPY . .

# Build the project
RUN pnpm run build


# ---------- Stage 2: Serve ----------
FROM node:22-alpine AS runner

# Install a lightweight HTTP server
RUN npm install -g serve

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Expose port (configurable)
ARG PORT=4173
ENV PORT=${PORT}

EXPOSE ${PORT}

# Default command to serve build files
CMD ["sh", "-c", "serve -s dist -l $PORT"]
