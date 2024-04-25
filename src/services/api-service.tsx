import { getTokenFromStorage, removeTokenFromStorage, saveTokenIntoStorage } from "../shared/user-storage/UserStorage";
import * as Http from "../shared/http-handler/http-handler";
import { Booking, HomeData, BalanceItem, ProfileData, StructuresDataResponse } from "../interfaces/interfaces";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert } from "react-native";


// Service per gestire tutte le chiamate al backend. Ripetono il codice variando solo l'URL perché potremmo, in futuro, avere bisogno di implementare altre logiche di business, manipolando quindi i dati.
// Preferisco farlo in un service e non all'interno delle schermate, che utilizzo come View e Controller implementando solo leggere logiche di presentazione.

function generateDefaultPostOptions(token: string, body: any) {
    let options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify(body)
    };
    return options;
}

function generateDefaultGetOptions(token: string) {
    let options: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        }
    };

    return options;
}

export const getHomeData = async (navigation: StackNavigationProp<any>, selectedStructureId: string | number = ""): Promise<HomeData> => {
    try {

        console.log("Cerco di recuperare i dati per la struttura: ", selectedStructureId);
        const token = await getTokenFromStorage() ?? ''; // Fallback a una stringa vuota se il token è null

        let url = (selectedStructureId == "" || selectedStructureId == 0) ? "http://localhost:3000/api/home-data" : "http://localhost:3000/api/home-data/" + selectedStructureId;
        const response = await Http.fetchUrl(url, generateDefaultGetOptions(token), navigation);
        if (!response.ok) {
            throw new Error('Errore durante il recupero dei dati');
        }
        return await response.json();
    } catch (error) {
        console.error('Errore durante il fetch dei dati:', error);
        throw error;
    }
};



export const getBookingData = async (navigation: StackNavigationProp<any>): Promise<Booking[]> => {
    try {
        const token = await getTokenFromStorage() ?? ''; // Fallback a una stringa vuota se il token è null
        const response = await Http.fetchUrl("http://localhost:3000/api/bookings-data", generateDefaultGetOptions(token), navigation);
        if (!response.ok) {
            throw new Error('Errore durante il recupero dei dati');
        }

        return await response.json();
    } catch (error) {
        console.error('Errore durante il fetch dei dati:', error);
        throw error;
    }
};

export const getBalanceData = async (navigation: StackNavigationProp<any>): Promise<BalanceItem[]> => {
    try {
        const token = await getTokenFromStorage() ?? ''; // Fallback a una stringa vuota se il token è null
        const response = await Http.fetchUrl("http://localhost:3000/api/balance-data", generateDefaultGetOptions(token), navigation);
        if (!response.ok) {
            throw new Error('Errore durante il recupero dei dati');
        }
        return await response.json();
    } catch (error) {
        console.error('Errore nel recupero dei dati dell\'estratto conto:', error);
    }
};

export const getProfileData = async (navigation: StackNavigationProp<any>): Promise<ProfileData> => {
    try {
        const token = await getTokenFromStorage() ?? '';
        const response = await Http.fetchUrl('http://localhost:3000/api/profile-data', generateDefaultGetOptions(token), navigation);
        return await response.json();
    } catch (error) {
        console.error('Errore nel recupero dei dati del profilo:', error);
    }
};

export const getStructuresData = async (navigation: StackNavigationProp<any>): Promise<StructuresDataResponse> => {
    try {
        const token = await getTokenFromStorage();
        const response = await Http.fetchUrl('http://localhost:3000/api/structures-data', generateDefaultGetOptions(token), navigation);
        return await response.json();
    } catch (error) {
        console.error('Errore nel recupero dei dati delle strutture:', error);
    }
};


export const login = async (navigation: StackNavigationProp<any>, username: string, password: string) => {
    console.log("Effettuo il login . . .");
    try {
        let body = { username, password };
        let options = generateDefaultPostOptions('', body);
        const response = await Http.fetchUrl('http://localhost:3000/api/login', options, navigation);

        const { token } = await response.json();

        if (response.ok) {
            console.log("Login riuscito. Token: ", token);
            await saveTokenIntoStorage(token);
            return true;
        } else {
            console.log("Login non riuscito")
            await removeTokenFromStorage();
            return false;
        }
    } catch (error) {
        console.error('Errore durante il login:', error);
        Alert.alert('Errore', 'Si è verificato un errore durante il login');
    }
};