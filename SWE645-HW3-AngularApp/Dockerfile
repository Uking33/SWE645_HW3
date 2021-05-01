#FROM nginx AS base
#WORKDIR /app
#EXPOSE 80

#FROM node:10.16.0-alpine AS build
#RUN npm install -g @angular/cli

#WORKDIR /src
#COPY . .
#RUN npm install
#RUN ng build --prod --aot --build-optimizer --output-path /app
#RUN ng build --prod --output-path /app
 
#FROM base AS final
#COPY --from=build /app /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]

#RUN chmod 755 /etc/nginx/nginx.conf


FROM node:0.12.7-wheezy

MAINTAINER YeTing "me@yeting.info"

RUN apt-key adv --keyserver pgp.mit.edu --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
RUN echo "deb http://nginx.org/packages/mainline/debian/ wheezy nginx" >> /etc/apt/sources.list

ENV NGINX_VERSION 1.7.12-1~wheezy

RUN apt-get update && \
    apt-get install -y ca-certificates nginx && \
    rm -rf /var/lib/apt/lists/*

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

RUN npm install -g bower gulp

WORKDIR /app

COPY ./package.json /app/
COPY ./bower.json /app/
RUN npm install && bower install --allow-root

COPY . /app/

RUN gulp build 

RUN cp -R /app/dist/*  /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"] 
