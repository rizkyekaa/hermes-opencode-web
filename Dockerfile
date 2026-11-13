# Dockerfile — Dasar Nginx Alpine untuk aplikasi statis
#
# Build:
#   docker build -t ai-local-services .
#
# Run:
#   docker run -d -p 8080:80 ai-local-services

FROM nginx:alpine

# Hapus default config Nginx
RUN rm -f /etc/nginx/conf.d/default.conf

# Tulis konfigurasi server ke file conf.d
RUN cat > /etc/nginx/conf.d/ai-local-services.conf << 'NGINXEOF'
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 404 /index.html;
    location = /50x.html {
        root /var/lib/nginx/html;
    }
}
NGINXEOF

EXPOSE 80

CMD ["nginx"]
