import groovy.json.JsonSlurperClassic

def jsonParse(def json) {
    new groovy.json.JsonSlurperClassic().parseText(json)
}
pipeline {
  agent { label 'master' }
  environment {
    appName = "variable" 
  }
  stages {

 stage("paso 1"){
     
      steps {
          script {			
           echo 'hola mundo'
           echo 'CD C://Users//Fran-Nico//Desktop//Testjenkins'
           echo 'mkdir file'
        }
      }
    }
  }
  post {
      always {          
          deleteDir()
           echo 'fase always'
      }
      success {
            echo 'fase success'
        }

      failure {
            echo 'fase failure'
      }
      
  }
}  

