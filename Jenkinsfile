def helmRepo = "CI-CD"
def appConfigRepo = 'https://github.com/tuan-minh-hust-k64/CI-CD.git'
def appConfigBranch = 'main'
def version = "${BUILD_NUMBER}"
pipeline {
    agent any

    stages {
        stage('Build and push image') {
            steps {
                withDockerRegistry(credentialsId: 'docker_hub', url: 'https://index.docker.io/v1/') {
                    sh "docker build -t tuanminh009/iot-be:${BUILD_NUMBER} ."
                    sh "docker push tuanminh009/iot-be:${BUILD_NUMBER}"
                    sh "docker rmi tuanminh009/iot-be -f"
                    sh "docker rmi tuanminh009/iot-be:${BUILD_NUMBER} -f"
                }
            }
        }
        stage('change version in config k8s') {
		steps {
		 withCredentials([gitUsernamePassword(credentialsId: 'git_token', gitToolName: 'Default')]) {
                sh """#!/bin/bash
					   [[ -d ${helmRepo} ]] && rm -r ${helmRepo}
					     git config --global user.email "tuanminh20194334@gmail.com"
  						git config --global user.name "tuanminh"
					   git clone ${appConfigRepo} --branch ${appConfigBranch}
					   cd ${helmRepo}
                     			   sed -i 's|image: .*|image: tuanminh009/iot-be:${BUILD_NUMBER}|' dev/server-deployment.yaml
					   git add . ; git commit -m "Update to version ${version}";git push origin main
					   cd ..
					   [[ -d ${helmRepo} ]] && rm -r ${helmRepo}
					   """	
            }
		}
           
            		
        }
    }
}
