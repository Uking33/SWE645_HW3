#FROM nginx AS base
#WORKDIR /app
#EXPOSE 80
 
#FROM node:10.16.0-alpine AS build
#RUN npm install -g @angular/cli
#WORKDIR /src
#COPY . .
#RUN npm install
#RUN ng build --prod --output-path /app
 
#FROM base AS final
#COPY --from=build /app /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]

FROM ubuntu:latest
RUN apt-get update
RUN apt-get install npm
RUN npm install -g @angular/cli
RUN mkdir /usr/local/Angular
WORKDIR /usr/local/Angular
COPY . .
CMD ["npm start"]
