pipeline {
  agent any
  stages {
    stage('init') {
      steps {
        sh 'npm install'
        sh 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\Chess_front_master npm install -g @angular/cli'
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
          sh 'ng test'
        }

      }
    }
  }
}