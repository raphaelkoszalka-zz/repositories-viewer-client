# GitHub Repositories Viewer
ReactJS front-end project for GitHub repositories viewer

## how to
- install nodejs
- install npm
- git clone https://github.com/raphaelkoszalka/repositories-viewer-client.git
- cd repositories-viewer-client
- npm install
- configure project constants at AppConstants.js


## how to run
- cd repositories-viewer-client
- npm install
- npm start

## how to build
- npm run build

## production version
- you can set up the HTTP server that you'd like, such as Apache or Nginx, the production version at https://immobilien-test.raphael.website/ is running on Apache 2.2
with the following configuration:

- .htaccess
```
<IfModule mod_rewrite.c>
    RewriteEngine on

    # Don't rewrite files or directories
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # Rewrite everything else to index.html
    # to allow html5 state links
    RewriteRule ^ index.html [L]
</IfModule>

```

- Apache Virtual Host

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
    
    ProxyPreserveHost On
    ProxyPass /authenticate http://0.0.0.0:9000/authenticate
    ProxyPassReverse /authenticate http://0.0.0.0:9000/authenticate
    ProxyPass /repositories http://0.0.0.0:9000/repositories
    ProxyPassReverse /repositories http://0.0.0.0/repositories
    
    ServerAdmin raphael@cochise.com.br
    
    ServerName immobilien-test.raphael.website
    ServerAlias immobilien-test.raphael.website
    
    DocumentRoot ${PATH_TO_DOCUMENT_ROOT}
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
        <Directory />
                Options FollowSymLinks Indexes
                AllowOverride All
                Order deny,allow
                Allow from all
        </Directory>
RewriteEngine on
SSLCertificateFile ${PATH_TO_SSL_KEY}.pem
SSLCertificateKeyFile ${PATH_TO_SSL_KEY}.pem
Include /etc/letsencrypt/options-ssl-apache.conf
</VirtualHost>
</IfModule>

```


## further help
- rmkoszalka@gmail.com