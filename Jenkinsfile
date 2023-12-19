pipeline {
    agent any 
    stages {
        stage('Clone') { 
            steps {
                git branch: 'develop', url: 'https://github.com/trinhviethoang16/fullstack-test.git'
            }
        }
        stage('Build') { 
            steps {
                sh 'cd frontend && docker build -t trinhviethoang16/frontend:develop . & cd ..' 
                sh 'cd backend && docker build -t trinhviethoang16/backend:latest . & cd ..'
            }
        }
        stage('Deploy') { 
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHubCredentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'docker login -u $USERNAME -p $PASSWORD'
                    sh 'docker push trinhviethoang16/frontend:develop'
                    sh 'docker push trinhviethoang16/backend:latest'
                }
            }
        }
    }
}