pipeline {
  agent any
  stages {
    stage('pre-build') {
      steps {
        powershell(script: 'npm install', returnStdout: true)
      }
    }

    stage('run playwright tests') {
      steps {
        powershell(returnStdout: true, returnStatus: true, script: 'npx playwright test', label: 'run tests')
      }
    }

  }
}