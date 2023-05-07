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
                script {
                    scannerHome = tool 'SonarScanner';
                }
                withSonarQubeEnv('sonarqube') {
                    nodejs('node') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}
