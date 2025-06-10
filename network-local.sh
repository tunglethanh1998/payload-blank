#!/bin/bash

# Define variables
NETWORK_NAME="payload-network"
POSTGRES_CONTAINER="pg-local"

POSTGRES_USER="postgres"
POSTGRES_PASSWORD="postgres"
POSTGRES_DB="payload-db"

APP_IMAGE="payload-app-blank"
APP_PORT=3000

echo "🔧 Checking Docker network..."
docker network inspect $NETWORK_NAME >/dev/null 2>&1 || docker network create $NETWORK_NAME

echo "🐘 Starting PostgreSQL container..."
docker rm -f $POSTGRES_CONTAINER >/dev/null 2>&1

docker run -d \
  --name $POSTGRES_CONTAINER \
  --network $NETWORK_NAME \
  -e POSTGRES_USER=$POSTGRES_USER \
  -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  -e POSTGRES_DB=$POSTGRES_DB \
  -p 5432:5432 \
  postgres:latest

# Optional: wait for Postgres to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
sleep 5

# 🔨 Build the Payload app image
echo "📦 Building Payload app Docker image..."
docker build -t $APP_IMAGE .

# Step 3: Start your Payload app
echo "🚀 Starting Payload app from image '$APP_IMAGE'..."
docker run -d \
  --name payload-app-run \
  --network $NETWORK_NAME \
  -p $APP_PORT:3000 \
  -e PAYLOAD_SECRET=582965ef45f8e71d1d9d3975 \
  -e DATABASE_URI=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_CONTAINER:5432/$POSTGRES_DB \
  $APP_IMAGE

echo "✅ App is available at: http://localhost:$APP_PORT"
