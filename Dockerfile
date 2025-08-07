
# Step 1: Build Angular app
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Step 2: Serve using Nginx
FROM nginx:1.25-alpine

# Copy custom nginx config (optional, otherwise use default)
# COPY nginx.conf /etc/nginx/nginx.conf

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular files from builder stage
COPY --from=builder /app/dist/angular-app /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
