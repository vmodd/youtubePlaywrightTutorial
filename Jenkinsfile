pipeline {
  agent any
  stages {
    stage('pre-build') {
      steps {
        powershell(script: 'npm install', returnStdout: true)
      }
    }

  }
}