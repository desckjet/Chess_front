pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        nodejs('node') {
          bat 'ng build'
        }

      }
    }
    stage('unit test') {
      steps {
        nodejs('node') {
          bat 'ng test --watch=false'
        }

      }
    }
  }
}