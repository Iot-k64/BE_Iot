pipeline {
    agent any
    stages {
        stage('SCM') {
            steps {
                checkout scm
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv() {
                    def scannerHome = tool 'SonarScanner';
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
    }
}
