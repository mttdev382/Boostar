# Usa un'immagine Node.js come base
FROM node:latest
# Installa le dipendenze necessarie per lo sviluppo React Native
RUN node -v

RUN apt-get update && apt-get install -y \
    bash \
    git \
    openssh-client \
    python3 \
    build-essential \
    yarn \
    watchman

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia il file package.json e package-lock.json nella directory di lavoro
COPY package*.json ./

# Installa le dipendenze del progetto
RUN npm install

# Copia il codice sorgente dell'applicazione nella directory di lavoro
COPY . .

# Esponi le porte necessarie per Expo e Metro Bundler
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006
EXPOSE 8081

# Avvia l'applicazione React Native
# CMD ["npm", "start"]

# Esegui un comando personalizzato all'avvio del container
ENTRYPOINT ["tail", "-f", "/dev/null"]