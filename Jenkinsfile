pipeline {
    agent { label 'master'}

        stages {
            stage ('install') {
                steps {
                    dir("test desde git"){
                      sh "npm install"
                    } 
                }
            }
            stage ('test') {
                steps {
                  dir("test desde git"){
                        sh "npm test"
                  }
                }
            }
          
        }
}