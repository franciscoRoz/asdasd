pipeline {
    agent { label 'master'}

        stages {
            stage ('test') {
                steps {
                  dir("build_node"){
                        sh "npm test"
                  }
                }
            }
          
        }
}