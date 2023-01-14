FROM httpd:alpine

# Allows to fallback to Angular index file with URI based routes on reload or direct access
RUN sed -i '/^<\/Directory>/i FallbackResource ./index.html' /usr/local/apache2/conf/httpd.conf

COPY ./dist/my-portfolio /usr/local/apache2/htdocs/

