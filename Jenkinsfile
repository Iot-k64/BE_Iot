pipeline {
  agent any
  stages {
        stage('Build') {
            steps {
                nodejs('node') {
                    // some block
                  stage('SCM') {
                    checkout scm
                  }
                  stage('SonarQube Analysis') {
                    def scannerHome = tool 'SonarScanner';
                    withSonarQubeEnv() {
                      sh "${scannerHome}/bin/sonar-scanner"
                    }
                  }
                }
            }
        }
    }
}
