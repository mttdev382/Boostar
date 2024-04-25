# Usa l'immagine Node.js come base
FROM node:latest

# Imposta il working directory nell'app Express
WORKDIR /app

# Copia i file necessari per l'app Express
COPY package.json package-lock.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dei file dell'app
COPY . .

# Esponi la porta su cui il server Express sarà in ascolto
EXPOSE 3000

# Avvia il server Express
CMD ["node", "server.js"]  # Sostituisci "app.js" con il file di avvio del tuo server
