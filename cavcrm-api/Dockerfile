FROM openjdk

WORKDIR /app

COPY target/cavcrm-api-0.0.1-SNAPSHOT.jar /app/cavcrm-api.jar

ENTRYPOINT ["java", "-jar", "cavcrm-api.jar"]