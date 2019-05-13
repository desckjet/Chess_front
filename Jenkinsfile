pipeline {
  agent any
  stages {
    stage('init') {
      steps {
        echo 'prueba'
        sh 'npm install'
      }
    }
    stage('build') {
      steps {
        nodejs('node') {
          sh 'npm run ng build'
        }

      }
    }
  }
}