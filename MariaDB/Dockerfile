# Use the official MariaDB image as the base image
FROM mariadb:latest

# Set environment variables for the database
ENV MARIADB_ROOT_PASSWORD=root
ENV MARIADB_DATABASE=mydb

# Copy the init.sql file into the container's entrypoint directory to be run at startup
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the database port (default MariaDB port)
EXPOSE 3306
