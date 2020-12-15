pipeline{
    agent{label 'master'}

    stages{
        stage('install'){
            steps{
                dir ('cd F://Desktop//workspace//Jenkins//analisis_node//index.js'){
                echo 'npm install'
                }
            }
        }
        stage('analisis'){
            dir('cd F://Desktop//workspace//Jenkins//analisis_node//index.js'){
                echo 'node index'
            }
        
        }
    }

}