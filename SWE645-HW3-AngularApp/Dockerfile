FROM nginx AS base
WORKDIR /app
EXPOSE 80
Run pwd
 
FROM node:10.16.0-alpine AS build
RUN npm install -g @angular/cli
Run pwd

WORKDIR /src
Run pwd
#COPY . .
#RUN npm install
#RUN ng build --prod --aot --build-optimizer --output-path /app
#RUN ng build --prod --output-path /app
 
FROM base AS final
#COPY --from=build /app /usr/share/nginx/html
RUN chmod 755 /etc/nginx/nginx.conf
RUN pwd
COPY -rf nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
