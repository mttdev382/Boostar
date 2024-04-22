import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getTokenFromStorage } from '../shared/user-storage/UserStorage';

const HomeScreen = () => {
  const [selectedRoom, setSelectedRoom] = useState('ALL');
  const [data, setData] = useState({}); // Dati ottenuti dalle API

  // Effettua la chiamata API per ottenere i dati quando la componente viene montata
  useEffect(() => {
    fetchData();
  }, []);

// Funzione mock per ottenere i dati dalle API
const fetchDataFromAPI = async (selectedRoom) => {
  try {
    // Effettua la chiamata API
    const response = await fetch('http://localhost:3000/api/home-data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': await getTokenFromStorage()
      }
    });

    // Verifica che la risposta sia ok
    if (!response.ok) {
      throw new Error('Errore durante il recupero dei dati');
    }

    // Estrai i dati dalla risposta e restituiscili
    const data = await response.json();
    return data;
  } catch (error) {
    // Gestisci eventuali errori durante la chiamata API
    console.error('Errore durante il fetch dei dati:', error);
    throw error; // Rilancia l'errore per gestirlo nella funzione fetchData
  }
};

  // Funzione per ottenere i dati dalla API
  const fetchData = async () => {
    try {
      // Effettua la chiamata API e memorizza i dati ottenuti nello stato 'data'
      // Sostituisci 'fetchDataFromAPI' con la tua funzione di chiamata API
      const response = await fetchDataFromAPI(selectedRoom);
      setData(response);
    } catch (error) {
      console.error('Errore durante il recupero dei dati:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      {/* Aggiungi qui la visualizzazione dei dati ottenuti dalle API */}
      {/* Ad esempio: */}
      <Text>{`Occupazione camere: ${data["occupancy"]}%`}</Text>
      <Text>{`Fatturato del mese: €${data["monthlyRevenue"]}`}</Text>
      {/* Aggiungi altri componenti per visualizzare gli altri dati */}
      {/* Aggiungi un menu a tendina per selezionare le camere */}
      <Picker
        selectedValue={selectedRoom}
        onValueChange={(itemValue) => setSelectedRoom(itemValue)}
      >
        <Picker.Item label="Tutte le camere" value="ALL" />
        {/* Aggiungi altre camere provenienti dalle API */}
      </Picker>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
