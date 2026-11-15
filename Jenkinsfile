
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'pratiklahane/pratik-technologies-portal'
    }

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
                    docker build -t ${DOCKER_IMAGE}:latest .
                '''
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_TOKEN'
                )]) {
                    sh '''
                        echo "$DOCKER_TOKEN" | docker login \
                            -u "$DOCKER_USER" --password-stdin

                        docker push ${DOCKER_IMAGE}:latest

                        docker logout
                    '''
                }
            }
        }
    }
}
