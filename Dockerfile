FROM oven/bun:1 AS build

ARG VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_SUPABASE_URL
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL

WORKDIR /app
COPY package.json package-lock.json ./

RUN bun install

COPY . .

RUN bun run build

# Serve stage
FROM nginx:alpine

# Create a non-root user to run nginx
RUN adduser -D -H -u 1001 -s /sbin/nologin norman

# Create app directory
RUN mkdir -p /app/www

# Copy built assets from build stage
COPY --from=build /app/dist /app/www

# Copy nginx config template
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Set correct ownership and permissions
RUN chown -R norman:norman /app/www && \
    chmod -R 755 /app/www && \
    # Nginx needs to read and write to these directories
    chown -R norman:norman /var/cache/nginx && \
    chown -R norman:norman /var/log/nginx && \
    chown -R norman:norman /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R norman:norman /var/run/nginx.pid && \
    chmod -R 777 /etc/nginx/conf.d

# Expose port (will be overridden by Render)
EXPOSE 80

# Tell nginx's template processing which variables to replace
ENV NGINX_ENVSUBST_TEMPLATE_DIR=/etc/nginx/templates
ENV NGINX_ENVSUBST_TEMPLATE_SUFFIX=.template
ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx/conf.d
ENV PORT=80

# Switch to non-root user
USER norman

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
