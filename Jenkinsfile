pipeline {
    agent any

    stages {
        stage('Build and push image') {
            steps {
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t tuanminh009/iot-be:v1 .'
                    sh 'docker push tuanminh009/iot-be:v1'
                }
            }
        }
    }
}
