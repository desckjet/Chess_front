pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        nodejs('node') {
          bat 'npm install -g @angular/cli'
          bat 'npm install'
          bat 'ng build'
        }

      }
    }
  }
}