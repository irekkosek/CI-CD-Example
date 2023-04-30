FROM nginx:1.23.4 as production
COPY ./templates/nginx.conf.conf /etc/nginx/templates
ENV SERVER1_IP=localhost:3001
ENV SERVER2_IP=localhost:3002
ENV PROXY_PASS="http://server"
ENV NGINX_ENVSUBST_TEMPLATE_SUFFIX: ".conf"



