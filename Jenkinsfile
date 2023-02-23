pipeline {
    agent any

    stages {
        stage('Build and push image') {
            steps {
                script {
                   sh 'docker build -t tuanminh009/iot-be:v1 .'
                }
            }
        }
    }
}
