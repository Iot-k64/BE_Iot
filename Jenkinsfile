pipeline {
  agent any
  stages {
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
