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
export const removeTokenFromStorage = async (navigation?: any) => {
    try {
        await storage.removeItem('token');
        if (navigation) navigation.navigate("Login");
        console.log('token rimosso correttamente!');
    } catch (error) {
        console.error('Errore durante la rimozione del token:', error);
    }
};

export const checkTokenValidity = async (token: string, navigation?: any): Promise<boolean> => {
    try {
        const response = await fetch('http://localhost:3000/api/check-token', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        });

        let validityData = await response.json();

        if (validityData.isValid) {
            console.log('Il token è valido.');
            return true;
        } else {
            console.log('Il token non è valido.');
            await removeTokenFromStorage();
            return false;
        }
    } catch (error) {
        console.error('Errore durante il controllo della validità del token:', error);
        return false;
    }
};
