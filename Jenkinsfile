pipeline {
  agent {
    node {
      label 'Build'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'ng build'
      }
    }
  }
}