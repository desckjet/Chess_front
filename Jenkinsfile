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
          sh 'ng build'
        }

      }
    }
    stage('unit tests') {
      steps {
        nodejs('node') {
          sh 'ng test --watch=false'
        }

      }
    }
  }
}