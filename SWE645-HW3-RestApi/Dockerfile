# ./Dockerfile
FROM tomcat:9.0.45
ADD jdk1.8.0_191 /opt/jdk8
ENV JAVA_HOME /opt/jdk8
ENV PATH $JAVA_HOME/bin:$PATH
COPY RestApi.war /usr/local/tomcat/webapps/
