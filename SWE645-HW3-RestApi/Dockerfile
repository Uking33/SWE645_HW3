# ./Dockerfile
FROM centos:7 | tomcat:9-jdk15
ADD jdk1.8.0_191 /opt/jdk8
ENV JAVA_HOME /opt/jdk8
ENV PATH $JAVA_HOME/bin:$PATH
COPY RestApi.war /usr/local/tomcat/webapps/
RUN mv webapps.dist/* webapps | chmod -R 755 webapps/RestApi/
RUN mkdir webapps/WEB-INF
RUN cp -r webapps/RestApi/WebContent/META-INF/. webapps/WEB-INF/META-INF/ | cp -r webapps/RestApi/WebContent/WEB-INF/. webapps/WEB-INF/WEB-INF
