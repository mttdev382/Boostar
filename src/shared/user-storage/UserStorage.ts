import storage from './storage';

// Salva l'oggetto nella memoria locale del dispositivo
export const saveTokenIntoStorage = async (token: string) => {
    try {
        await storage.setItem('token', token);
        console.log('token salvato correttamente!');
    } catch (error) {
        console.error('Errore durante il salvataggio del token:', error);
    }
};

// Recupera l'oggetto dalla memoria locale del dispositivo
export const getTokenFromStorage = async (): Promise<string | null> => {
    try {
        const token = await storage.getItem('token');
        if (token !== null) {
            console.log('Token recuperato correttamente:', token);
            return token;
        } else {
            console.log('Nessun token salvato');
            return null;
        }
    } catch (error) {
        console.error('Errore durante il recupero del token:', error);
        return null;
    }
};

// Elimina l'oggetto dalla memoria locale del dispositivo
export const removeTokenFromStorage = async () => {
    try {
        await storage.removeItem('token');
        console.log('token rimosso correttamente!');
    } catch (error) {
        console.error('Errore durante la rimozione del token:', error);
    }
};