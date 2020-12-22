pipeline {
    agent { label 'main'}

        stages {
            stage ('install') {
                steps {
                    
                      sh "npm install"
                    
                }
            }
            stage ('test') {
                steps {
                  
                        sh "npm test"
                  
                }
            }
             
        }
}
