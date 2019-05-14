pipeline {
  agent any
  stages {
    stage('init') {
      steps {
        bat 'npm install'
        bat 'npm install -g @angular/cli'
      }
    }
    stage('build') {
      steps {
        nodejs('node') {
          bat 'ng build'
        }

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