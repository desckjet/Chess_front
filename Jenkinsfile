pipeline {
  agent any
  stages {
    stage('init') {
      steps {
        sh 'npm install -g @angular/cli'
      }
    }
    stage('build') {
      steps {
        sh 'ng build'
      }
    }
    stage('unit tests') {
      steps {
        nodejs('node') {
          sh 'ng test'
        }

      }
    }
  }
}