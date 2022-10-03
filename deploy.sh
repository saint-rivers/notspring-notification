#!/bin/bash 

docker build . --tag notspring-notification-ui:1.0.0

docker run -itd -p 85:80 notspring-notification-ui:1.0.0

cp nginx/notspring.saintrivers.tech /etc/nginx/conf.d/

certbot --nginx -d notspring.saintrivers.tech