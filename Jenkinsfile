pipeline {
    agent any
    stages {
	stage('Building the AngularApp Image') {
	    steps {
		script {
		    checkout scm
		    sh 'echo ${BUILD_TIMESTAMP}'
		    sh 'docker image prune'
		    dir("./SWE645-HW3-AngularApp"){
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
	    
        stage('Building the RestApi Image') {
            steps {
                script {
                    checkout scm
	            dir("./SWE645-HW3-RestApi"){
		        sh 'rm -rf *.war'
		        sh 'jar -cvf Restful.war -C ./ .'
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
	            dir("./SWE645_HW3_RestApi"){
                        sh 'docker push liyuqin33/restful645:${BUILD_TIMESTAMP}'
		    }
                }
            }
        }
        stage('Deloying to RestApi Rancher as pods') {
            steps {
	        dir("./SWE645_HW3_RestApi"){
                    sh 'kubectl set image deployment/api api=liyuqin33/restful645:${BUILD_TIMESTAMP} -n swe645-hw3'
		}
            }
        }
    }
}
