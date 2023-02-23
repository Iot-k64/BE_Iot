pipeline {
    agent any

    stages {
        stage('Build and push image') {
            steps {
                script {
                    def dockerImage = docker.build("tuanminh009/iot-be:v1")
                    withDockerRegistry(credentialsId: 'tuanminh009') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}