pipeline {
    agent { label 'master'}

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
