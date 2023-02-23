pipeline {
    agent any

    stages {
        stage('Initialize'){
            def dockerHome = tool 'docker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('Build and push image') {
            steps {
                script {
                   sh 'docker build -t tuanminh009/iot-be:v1 .'
                }
            }
        }
    }
}
