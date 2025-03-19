pipeline {
  agent any
  stages {
    stage('run playwright tests') {
      steps {
        powershell(returnStdout: true, returnStatus: true, script: 'npx playwright test', label: 'run tests')
      }
    }

  }
}