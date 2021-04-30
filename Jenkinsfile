pipeline {
    agent any
    stages {
	stage('Building the AngularApp Image') {
	    steps {
		script {
		    checkout scm
		    sh 'echo ${BUILD_TIMESTAMP}'
		    dir("./SWE645-HW3-AngularApp"){
		    	sh 'docker container prune'
		        withCredentials([usernamePassword(credentialsId: 'docker-pass', passwordVariable: 'password', usernameVariable: 'username')]){
		            sh "cd  | docker login -u ${username} -p ${password}"
		        }
		        sh "docker build -t liyuqin33/angular645:${BUILD_TIMESTAMP} ."
		    }
		}
	    }
	}
	stage('Pushing AngularApp Image to DockerHub') {
	    steps {
	        dir("./SWE645-HW3-AngularApp"){
	            script {
	                sh 'docker push liyuqin33/angular645:${BUILD_TIMESTAMP}'
	            }
	        }
	    }
	}
        stage('Deloying to Rancher as pods') {
            steps {
	        dir("./SWE645-HW3-AngularApp"){
                    sh 'kubectl set image deployment/student-survey student-survey=liyuqin33/angular645:${BUILD_TIMESTAMP} -n swe645-hw3'
	        }
            }
        }
	

	stage('Building the RestApi project'){
            steps {
                script {
			dir("./SWE645-HW3-RestApi"){
			    sh 'rm -rf Temp'
			    sh 'mkdir Temp'
			    sh 'ls -lh'
			    sh 'cp ./SWE645-HW3-RestApiWebContent/WEB-INF ./SWE645-HW3-RestApiTemp/WEB-INF'
			    sh 'cp ./SWE645-HW3-RestApiWebContent/META-INF ./SWE645-HW3-RestApiTemp/META-INF'
			    sh 'cp ./SWE645-HW3-RestApiDockerfile Temp/Dockerfile'
			    sh 'find src -name *.java > JavaFilesList.txt'
			    sh 'javac -classpath .:Temp/WEB-INF/lib/*  -d  Temp/WEB-INF/classes   @JavaFilesList.txt'
			    sh 'echo /cs/ > Temp/WEB-INF/classes/.gitignore'
			    sh 'touch Temp/META-INF/war-tracker'
			    sh 'ls Temp'
			    sh 'rm -rf JavaFilesList.txt'
			}
	        }
	    }
	}
        stage('Building the RestApi Image') {
            steps {
                script {
                    checkout scm
	            dir("./SWE645-HW3-RestApi/Temp"){
       			sh 'cp build/libs/*.war /opt/www/foobar/newest.war'
		        sh 'jar -cvf RestApi.war -C ./ .'
                        sh 'echo ${BUILD_TIMESTAMP}'
                        withCredentials([usernamePassword(credentialsId: 'docker-pass', passwordVariable: 'password', usernameVariable: 'username')]){
		            sh "docker login -u ${username} -p ${password}"
			}
		        sh "docker build -t liyuqin33/restful645:${BUILD_TIMESTAMP} ."
		    }
                }
            }
        }
        stage('Pushing RestApi Image to DockerHub') {
            steps {
                script {
		    sh 'docker push liyuqin33/restful645:${BUILD_TIMESTAMP}'
                }
            }
        }
        stage('Deloying to RestApi Rancher as pods') {
            steps {
                sh 'kubectl set image deployment/api api=liyuqin33/restful645:${BUILD_TIMESTAMP} -n swe645-hw3'
            }
        }
    }
}
