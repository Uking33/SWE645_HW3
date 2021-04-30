# ./Dockerfile
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install tar
RUN apt-get install -y wget
# JDK
RUN mkdir /var/tmp/jdk
RUN mkdir /usr/local/jdk
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie"  -P /var/tmp/jdk http://download.oracle.com/otn/java/jdk/8u202-b08/1961070e4c9b4e26a04e7f5a083f551e/jdk-8u202-linux-x64.tar.gz
RUN tar xzvf /var/tmp/jdk/jdk-8u202-linux-x64.tar.gz -C /usr/local/jdk && rm -rf /var/tmp/jdk/jdk-8u202-linux-x64.tar.gz
#Tomcat
RUN mkdir /var/tmp/tomcat
RUN wget -P  /var/tmp/tomcat http://archive.apache.org/dist/tomcat/tomcat-9/v9.0.45/bin/apache-tomcat-9.0.45.tar.gz
RUN tar xzf /var/tmp/tomcat/apache-tomcat-9.0.45.tar.gz -C /usr/local/ && rm -rf /var/tmp/tomcat/apache-tomcat-9.0.45.tar.gz
RUN mv /usr/local/apache-tomcat-9.0.45 /usr/local/tomcat
#env
ENV JAVA_HOME /usr/local/jdk/jdk1.8.0_202
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin
ENV CLASSPATH .:${JAVA_HOME}/lib:$CATALINA_HOME/lib
#RestApi
COPY RestApi.war /usr/local/tomcat/webapps/
#RUN
EXPOSE 8080
RUN unset CATALINA_HOME
RUN bash /usr/local/tomcat/bin/startup.sh
