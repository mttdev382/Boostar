import AsyncStorage from '@react-native-async-storage/async-storage';

// Wrappiamo AsyncStorage in maniera tale da renderlo comune sia per dispositivi mobili che per browser, tramite il localStorage.
// Eventuali modifiche potrebbero prevedere, ad esempio, la gestione dei dati tramite i Cookies o il SessionStorage.

let storage: typeof AsyncStorage | Storage;

if (typeof window !== 'undefined') {
  // Siamo nel browser
  storage = window.localStorage;
} else {
  // Siamo in React Native
  storage = AsyncStorage;
}

export default storage;