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
                    sh "docker rmi tuanminh009/iot-be:${BUILD_NUMBER} -f"
                }
            }
        }
        
    }
}
