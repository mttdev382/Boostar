import AsyncStorage from '@react-native-async-storage/async-storage';

let storage: typeof AsyncStorage | Storage;

if (typeof window !== 'undefined') {
  // Siamo nel browser
  storage = window.localStorage;
} else {
  // Siamo in React Native
  storage = AsyncStorage;
}

export default storage;