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
        nodejs(nodeJSInstallationName: 'node', configId: '1') {
          sh 'ng build'
        }

      }
    }
  }
}