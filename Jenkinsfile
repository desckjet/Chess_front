pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'ng build'
      }
    }
    stage('unit tests') {
      steps {
        nodejs('node') {
          bat 'ng test --watch=false'
        }

      }
    }
  }
}