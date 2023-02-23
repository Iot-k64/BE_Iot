pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Build image') {
            dockerImage = docker.build("tuanminh009/iot-be:v1")
        }
        stage('push image') {
            withDockerRegistry(credentialsId: 'tuanminh009') {
                dockerImage.push()
            }
        }
    }
}