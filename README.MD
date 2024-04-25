# Progetto React Native

Benvenuto nel progetto React Native! Questo progetto è stato creato per fornire un template di base per lo sviluppo di applicazioni mobile utilizzando React Native.

## Descrizione

Questo progetto utilizza React Native insieme a TypeScript per lo sviluppo di applicazioni cross-platform. È configurato con Docker per semplificare il processo di sviluppo e distribuzione.

## Requisiti

- Node.js
- npm (o yarn)
- Docker

## Istruzioni senza Docker

1. **Clona il repository:**

    ```bash
    git clone https://github.com/mttdev382/Boostar.git
    ```

2. **Installa le dipendenze:**

    ```bash
    npm install
    ```

3. **Avvia il frontend nella root principale:**
    
    ```bash
    npm start
    ```

4. **Posizionati nella cartella /server:**
    
    ```bash
    cd server
    ```

5. **Installa le dipendenze nella cartella /server:**
    
    ```bash
    npm install
    ```

## Istruzioni con Docker

1. **Esegui il container Docker:**

    Apri un terminale all'interno della root del progetto e lancia il comando:

    ```bash
    docker-compose up --build
    ```

    Questo comando avvierà:
    1. Il container Docker del frontend
    2. Il container Docker del backend (/server) 

## Login (username e password)
1. test test
2. admin admin


## Struttura del progetto
- `server/`: Contiene un server di test in expressJS.
- `src/`: Contiene il codice sorgente dell'applicazione React Native.
- `docker-compose.yml`: Il file di configurazione per Docker Compose.


## Licenza

Questo progetto è sotto licenza MIT. Per ulteriori informazioni, consulta il file LICENSE.
