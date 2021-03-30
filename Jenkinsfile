pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
    disableConcurrentBuilds()
  }

  //Una sección que define las herramientas preinstaladas en Jenkins
  tools {
    jdk 'JDK8_Centos' //Verisión preinstalada en la Configuración del Master
  }

  //Aquí comienzan los items del Pipeline
  stages{
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run-script lint'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run-script build'
      }
    }

    stage('Test- Frontend'){
			steps {
				echo '------------>Test Frontend<------------'
					sh 'npm run-script test --watch=false --browsers ChromeHeadless --code-coverage'
			}
		}

    stage('Sonar Analysis') {
    steps {
        echo '------------>Analisis de código estático<------------'
        withSonarQubeEnv('Sonar') {
            sh "${tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dsonar.projectKey=co.com.ceiba:SeguimientoProductos.katya.alvear.master -Dsonar.projectName=co.com.ceiba:SeguimientoProductos.katya.alvear.master -Dproject.settings=./sonar-project.properties"
        }
    }
  }
  }

  post {
    failure {
      mail(
        to: 'katya.alvear@ceiba.com.co',
        body: "Build failed in Jenkins: Project: ${env.JOB_NAME} Build /n Number: ${env.BUILD_NUMBER} URL de build: ${env.BUILD_NUMBER}/n/nPlease go to ${env.BUILD_URL} and verify the build",
        subject: "ERROR CI: ${env.JOB_NAME}"
      )
    }
  }


}
