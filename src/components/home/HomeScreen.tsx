import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getTokenFromStorage } from '../../shared/user-storage/UserStorage';
import * as Http from '../../shared/http-handler/http-handler';
import { BaseScreenProps, HomeData, Structure } from '../../interfaces/interfaces';
import { StackNavigationProp } from '@react-navigation/stack';
import { getHomeData, getStructuresData } from "../../services/api-service";

const HomeScreen: React.FC<BaseScreenProps> = ({ navigation }) => {
  const [selectedStructureId, setSelectedStructureId] = useState<string | number>();
  const [data, setData] = useState<HomeData | null>(null);
  const [structures, setStructures] = useState<Structure[]>([]);


  useEffect(() => {
    initHomeData();
    initUserStructures();
  }, []);


  const initUserStructures = async () => {
    try {
      const response = await getStructuresData(navigation);
      setStructures(response.structures);
    } catch (error) {
      //selectedStructure può essere null o meno. Il formato dell'oggetto ricevuto non cambierà, ma cambierà l'API da chiamare.
    }
  }

  const initHomeData = async () => {
    try {

      //selectedStructure può essere null o meno. Il formato dell'oggetto ricevuto non cambierà, ma cambierà l'API da chiamare.
      const response = await getHomeData(navigation, selectedStructureId);
      setData(response);
    } catch (error) {
      console.error('Errore durante il recupero dei dati:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      {data && (
        <>
          <Text>{`Occupazione camere: ${data.occupancyRate}%`}</Text>
          <Text>{`Fatturato del mese: €${data.monthlyRevenue}`}</Text>
          <Text>{`Fatturato da inizio anno: €${data.yearlyRevenue}`}</Text>
          <Text>{`Fatturato prossime prenotazioni: €${data.futureBookingsRevenue}`}</Text>
          {/* Aggiungi qui altri componenti per visualizzare gli altri dati */}
        </>
      )}
      <Picker
        selectedValue={selectedStructureId}
        onValueChange={(itemValue) => {
          setSelectedStructureId(itemValue);
          initHomeData();
        }}
      >
        <Picker.Item key={0} label="Tutte le camere" value="0" />
        {structures.map(structure => (
          <Picker.Item key={structure.id} label={structure.id + "." + structure.name} value={structure.id} />
        ))}
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
