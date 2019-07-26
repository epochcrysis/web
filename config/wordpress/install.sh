#!/usr/bin/env sh

set -e

mysql_ready="nc -z $WORDPRESS_DB_HOST 3306"

if ! $mysql_ready
then
    printf 'Waiting for MySQL.'
    while ! $mysql_ready
    do
        printf '.'
        sleep 1
    done
    echo
fi

if wp core is-installed
then
    echo "WordPress is already installed, exiting."
    exit
fi

wp core download --force

[ -f wp-config.php ] || wp config create \
    --dbhost="$WORDPRESS_DB_HOST" \
    --dbname="$WORDPRESS_DB_NAME" \
    --dbuser="$WORDPRESS_DB_USER" \
    --dbpass="$WORDPRESS_DB_PASSWORD"

wp core install \
    --url="$WORDPRESS_URL" \
    --title="$WORDPRESS_TITLE" \
    --admin_user="$WORDPRESS_ADMIN_USER" \
    --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
    --admin_email="$WORDPRESS_ADMIN_EMAIL" \
    --skip-email

if [ ! -d /var/www/html/wp-content/themes/default-theme ]; then
  cp -r /opt/default-theme /var/www/html/wp-content/themes
fi

wp theme activate default-theme
wp theme delete twentysixteen twentyseventeen twentynineteen

wp plugin delete akismet hello
wp plugin install --activate --force \
    wp-multilang \
    https://github.com/wp-graphql/wp-graphql/archive/master.zip \
    https://github.com/wp-graphql/wp-graphql-jwt-authentication/archive/v0.3.1.zip

wp term update category 1 --name="Sample Category"
wp post update 1 --post_title="Sample Post" --post_name=sample-post

echo "Great. You can now log into WordPress at: $WORDPRESS_URL/wp-admin"
