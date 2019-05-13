pipeline {
  agent {
    node {
      label 'Build'
    }

  }
  stages {
    stage('build') {
      steps {
        nodejs('node') {
          sh 'npm install'
        }

      }
    }
  }
}