#!/bin/bash 

docker build . --tag notspring-notification-ui:1.0.0

docker run -itd -p 85:80 notspring-notification-ui:1.0.0