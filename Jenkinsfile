pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean install'  // Change this to your build command
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'  // Change this to your test command
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'  // Change this to your deployment script
            }
        }
    }
}
