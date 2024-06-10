# Converção dos arquivos que estão em formatos do Windows usando uma imagem base
#FROM ubuntu:20.04 AS dos2unix
#RUN apt-get update && apt-get install -y dos2unix
#WORKDIR /app
#COPY . .
#RUN dos2unix mvnw

# Instalação do Maven/Java e deploy para a imagem final
#FROM maven:3.8.7-openjdk-18
#WORKDIR /app
#COPY --from=dos2unix /app .
#RUN chmod +x mvnw
#EXPOSE 8080
#CMD ["bash", "mvnw", "spring-boot:run"]

FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-17-jdk -y
COPY . .

RUN apt-get install maven -y
RUN mvn clean install 

FROM openjdk:17-jdk-slim

EXPOSE 8080

COPY --from=build /target/deploy_render-1.0.0.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ]
