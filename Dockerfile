FROM alpine:latest

# Install packages
RUN apk update && apk add --no-cache mysql mysql-client

# Create necessary directories
RUN mkdir -p /run/mysqld && chown mysql:mysql /run/mysqld

# Initialize MySQL database
RUN mysql_install_db --user=mysql --datadir=/var/lib/mysql

# Copy initialization script
# COPY init.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306

# Start MySQL server
# CMD ["mysqld", "--user=mysql", "--datadir=/var/lib/mysql", "--init-file=/docker-entrypoint-initdb.d/init.sql"]
CMD ["mysqld", "--user=mysql", "--datadir=/var/lib/mysql"]