FROM postgres:14

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=1234
ENV POSTGRES_DB=ablog

# Copy the database schema to the container
COPY server/schema-simplified.sql /docker-entrypoint-initdb.d/

# Expose the port for PostgreSQL
EXPOSE 5432
