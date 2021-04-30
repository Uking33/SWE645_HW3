# ./Dockerfile
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install tar
RUN apt-get install -y wget
# JDK
RUN mkdir /var/tmp/jdk
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie"  -P /var/tmp/jdk http://download.oracle.com/otn/java/jdk/8u202-b08/1961070e4c9b4e26a04e7f5a083f551e/jdk-8u202-linux-x64.tar.gz
RUN tar xzvf /var/tmp/jdk/jdk-8u202-linux-x64.tar.gz -C /var/tmp/jdk | rm -rf /var/tmp/jdk/jdk-8u202-linux-x64.tar.gz
#Tomcat
RUN mkdir /var/tmp/tomcat
RUN mkdir /usr/local/tomcat
RUN wget -P  /var/tmp/tomcat http://archive.apache.org/dist/tomcat/tomcat-9/v9.0.45/bin/apache-tomcat-9.0.45.tar.gz
RUN tar xzf /var/tmp/tomcat/apache-tomcat-9.0.45.tar.gz -C /usr/local/tomcat && rm -rf /var/tmp/tomcat/apache-tomcat-9.0.45.tar.gz
#env
ENV JAVA_HOME /var/tmp/jdk/jdk1.8.0_202
ENV CATALINA_HOME /usr/local/tomcat/tomcat
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin
#RestApi
COPY RestApi.war /usr/local/tomcat/webapps/
#RUN mv webapps.dist/* webapps | chmod -R 755 webapps/RestApi/
#RUN mkdir webapps/WEB-INF
#RUN cp -r webapps/RestApi/WebContent/META-INF/. webapps/WEB-INF/META-INF/ | cp -r webapps/RestApi/WebContent/WEB-INF/. webapps/WEB-INF/WEB-INF
