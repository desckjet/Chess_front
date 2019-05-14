pipeline {
  agent any
  stages {
    stage('init') {
      steps {
        sh 'npm install'
        sh 'npm install -g @angular/cli'
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