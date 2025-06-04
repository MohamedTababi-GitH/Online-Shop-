FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/Aladdin-0.0.1-SNAPSHOT.jar /app/Aladdin.jar

COPY uploads/images /app/uploads/images

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "Aladdin.jar"]
