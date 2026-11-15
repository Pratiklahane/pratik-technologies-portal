pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Source code checked out successfully'
            }
        }

        stage('Validate Project') {
            steps {
                sh '''
                    test -f index.html
                    test -f Dockerfile
                    echo "Project files validated successfully"
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build -t pratik-portal:latest .
                    docker images
                '''
            }
        }
    }
}
