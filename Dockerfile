# Usa un'immagine Node.js come base
FROM node:alpine
# Installa le dipendenze necessarie per lo sviluppo React Native
RUN node -v

RUN apk add --no-cache \
    bash \
    git \
    openssh \
    python3 \
    build-base \
    yarn

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia il file package.json e package-lock.json nella directory di lavoro
COPY package*.json ./


# Installa le dipendenze del progetto
RUN npm install

# Copia il codice sorgente dell'applicazione nella directory di lavoro
COPY . .

# Esponi la porta 19000 per Expo
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006
EXPOSE 8081

# Avvia l'applicazione React Native
CMD ["yarn", "start"]
