# ./Dockerfile
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install tar
RUN apt-get install -y wget
# JDK
RUN mkdir /var/tmp/jdk
RUN wget -P /var/tmp/jdk http://www.lyquking.com/lib/jdk-8u202-linux-x64.tar.gz
RUN tar xzf /var/tmp/jdk/jdk-8u202-linux-x64.tar.gz -C /usr/local/ && rm -rf /var/tmp/jdk/jdk-8u202-linux-x64.tar.gz
#Tomcat
RUN mkdir /var/tmp/tomcat
RUN wget -P  /var/tmp/tomcat http://archive.apache.org/dist/tomcat/tomcat-9/v9.0.45/bin/apache-tomcat-9.0.45.tar.gz
RUN tar xzf /var/tmp/tomcat/apache-tomcat-9.0.45.tar.gz -C /usr/local/ && rm -rf /var/tmp/tomcat/apache-tomcat-9.0.45.tar.gz
RUN mv /usr/local/apache-tomcat-9.0.45 /usr/local/tomcat
#env
ENV JAVA_HOME /usr/local/jdk1.8.0_202
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin
ENV CLASSPATH .:${JAVA_HOME}/lib:$CATALINA_HOME/lib
#RestApi
COPY RestApi.war /usr/local/tomcat/webapps/
#RUN
EXPOSE 8080
RUN unset CATALINA_HOME
CMD ["./usr/local/tomcat/tomcat/bin/catalina.sh","run"] && tail -f /usr/local/tomcat/tomcat/logs/catalina.out 
#CMD bash /usr/local/tomcat/bin/startup.sh
