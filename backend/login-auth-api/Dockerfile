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


FROM ubuntu:20.04 AS dos2unix

# Instalar dos2unix
RUN apt-get update && apt-get install -y dos2unix

# Copiar e converter mvnw
COPY mvnw /app/
WORKDIR /app
RUN chmod +x mvnw
RUN dos2unix -v mvnw


FROM maven:3.8.7-openjdk-18
WORKDIR /app
COPY --from=dos2unix /app .
RUN chmod +x mvnw
EXPOSE 8080
CMD ["bash", "mvnw", "spring-boot:run"]
