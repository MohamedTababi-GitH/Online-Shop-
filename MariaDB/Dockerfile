FROM mariadb:latest

ENV MARIADB_ROOT_PASSWORD=root
ENV MARIADB_DATABASE=mydb

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
