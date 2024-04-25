import { StackNavigationProp } from "@react-navigation/stack";


// Funzione wrapper per la funzione "fetch" e per la gestione degli errori HTTP. In questo caso dovrebbe semplicemente portare ad una pagina di errore.
export const fetchUrl = async (url: string, options?: RequestInit, navigation?: StackNavigationProp<any>): Promise<Response> => {
    try {
        return await fetch(url, options);
    } catch (error) {
        console.error('Errore durante la richiesta fetch:', error);
        if (navigation) navigation.navigate("Error");
        throw error;
    }
};