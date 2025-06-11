#!/bin/bash

# Define variables
NETWORK_NAME="payload-network"
POSTGRES_CONTAINER="payload-db" # 👈 Your actual Postgres container name
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="postgres"
POSTGRES_DB="payload" # 👈 Match your running container
APP_IMAGE="payload-app-blank"
APP_PORT=3000

echo "🔧 Checking Docker network..."
docker network inspect $NETWORK_NAME >/dev/null 2>&1 || docker network create $NETWORK_NAME

echo "🔗 Connecting existing PostgreSQL container to the network..."
# Only connect if not already in the network
if ! docker inspect $POSTGRES_CONTAINER | grep $NETWORK_NAME > /dev/null; then
  docker network connect $NETWORK_NAME $POSTGRES_CONTAINER
fi

# Optional: wait until Postgres is accepting connections
echo "⏳ Waiting for PostgreSQL to be ready..."
until docker exec $POSTGRES_CONTAINER pg_isready -U $POSTGRES_USER > /dev/null 2>&1; do
  echo "⏳ Still waiting for DB..."
  sleep 1
done

# 🔨 Build the Payload app image
echo "📦 Building Payload app Docker image..."
docker build -t $APP_IMAGE .

# Stop previous app if exists
docker rm -f payload-app-run >/dev/null 2>&1

# 🚀 Start the Payload app
echo "🚀 Starting Payload app from image '$APP_IMAGE'..."
docker run -d \
  --name payload-app-run \
  --network $NETWORK_NAME \
  -p $APP_PORT:3000 \
  -e PAYLOAD_SECRET=582965ef45f8e71d1d9d3975 \
  -e DATABASE_URI=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_CONTAINER:5432/$POSTGRES_DB \
  $APP_IMAGE

echo "✅ App is available at: http://localhost:$APP_PORT"
