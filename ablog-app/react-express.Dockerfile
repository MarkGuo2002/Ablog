# Stage 1: Build React App
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./src ./src
COPY ./tailwind.config.js ./
COPY ./public ./public
RUN npm run build

# Stage 2: Setup the Application
FROM node:18-alpine

WORKDIR /app

# Copy the built React app from the previous stage
COPY --from=build /app/build ./build

# Copy server files
COPY server ./server
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Environment variables
ENV PORT=5000
ENV PGUSER=admin
ENV PGPASSWORD=1234
ENV PGDATABASE=ablog
ENV PGHOST=db
ENV PGPORT=5432

# Expose the port for the server
EXPOSE 5000

# Start the server
CMD ["node", "server/server.js"]
