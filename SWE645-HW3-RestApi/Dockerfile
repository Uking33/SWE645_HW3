# ./Dockerfile
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install tar
RUN apt-get install unzip
RUN apt-get install -y wget
# JDK
RUN wget -P /var/tmp http://www.lyquking.com/lib/SWE645/jdk-8u291-linux-x64.tar.gz
RUN tar xzf /var/tmp/jdk-8u291-linux-x64.tar.gz -C /usr/local/ && rm -rf /var/tmp/jdk-8u291-linux-x64.tar.gz
#Tomcat
RUN wget -P  /var/tmp http://www.lyquking.com/lib/SWE645/tomcat_9.0.45.zip
RUN unzip -d /usr/local/ /var/tmp/tomcat_9.0.45.zip && rm -rf /var/tmp/tomcat_9.0.45.zip
RUN mv /usr/local/tomcat_9.0.45 /usr/local/tomcat
RUN chmod -R 755 /usr/local/tomcat
#env
ENV JAVA_HOME /usr/local/jdk1.8.0_291
ENV CATALINA_HOME /usr/local/tomcat
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin
#ENV CLASSPATH $CLASSPATH:${JAVA_HOME}/lib:$CATALINA_HOME/lib
#RestApi
COPY RestApi.war /usr/local/tomcat/webapps/
RUN chmod -R 755 /usr/local/tomcat/webapps/
#RUN
EXPOSE 8080
CMD ["./usr/local/tomcat/bin/catalina.sh","run"] && tail -f /usr/local/tomcat/logs/catalina.out 
