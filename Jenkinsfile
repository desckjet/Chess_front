pipeline {
  agent {
    node {
      label 'Build'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
  }
}