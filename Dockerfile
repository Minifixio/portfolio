FROM httpd:alpine

COPY ./dist/my-portfolio /usr/local/apache2/htdocs/

