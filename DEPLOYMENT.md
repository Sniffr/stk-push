# Deployment Guide

This guide explains how to deploy the SoldOut Africa Payment Frontend using Docker.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Open your browser and go to `http://localhost:3000`

## Production Deployment

### Using Docker Compose (Recommended)

1. **Build and start the services:**
   ```bash
   docker-compose up -d --build
   ```

2. **Check if the container is running:**
   ```bash
   docker-compose ps
   ```

3. **View logs:**
   ```bash
   docker-compose logs -f
   ```

### Using Docker directly

1. **Build the image:**
   ```bash
   docker build -t soldout-payment-frontend .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:80 soldout-payment-frontend
   ```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=/api
```

### Custom API Endpoint

If you need to use a different API endpoint in production, update the `REACT_APP_API_URL` environment variable:

```env
REACT_APP_API_URL=https://your-api-domain.com
```

## Features

- **Nginx reverse proxy** for API calls
- **CORS handling** for cross-origin requests
- **Gzip compression** for better performance
- **Static asset caching** for improved load times
- **Security headers** for enhanced security
- **React Router support** with fallback to index.html

## Troubleshooting

### Container won't start
```bash
docker-compose logs soldout-payment-frontend
```

### Rebuild after changes
```bash
docker-compose down
docker-compose up --build
```

### Clean up
```bash
docker-compose down
docker system prune -f
```

## Production Considerations

1. **SSL/HTTPS**: Configure SSL certificates for production
2. **Domain**: Update nginx.conf with your domain name
3. **Environment**: Set appropriate environment variables
4. **Monitoring**: Add health checks and monitoring
5. **Scaling**: Use Docker Swarm or Kubernetes for scaling
