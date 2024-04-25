import React, { useEffect, useState } from 'react';
import { ImageBackground, View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { BaseScreenProps } from '../../interfaces/interfaces';

const SplashScreen: React.FC<BaseScreenProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simula una chiamata API fittizia con un ritardo di 2 secondi
    const simulateAPIRequest = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    simulateAPIRequest();
  }, []);

  return (
    <ImageBackground
      source={require('./splash.png')} // Immagine di sfondo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" style={styles.spinner} />
        ) : null}
      </View>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundImage: {
    width: windowWidth, // Imposta la larghezza dell'immagine uguale alla larghezza della finestra
    height: windowHeight, // Imposta l'altezza dell'immagine uguale all'altezza della finestra
    resizeMode: 'cover', // Copri l'intera area disponibile
    justifyContent: 'center', // Centro verticalmente
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Metti il loader al centro
    alignItems: 'center', // Centro orizzontalmente
  },
  spinner: {
    position: 'absolute', // Posizione assoluta rispetto al contenitore
    bottom: 50, // Distanza dal basso
  },
});

export default SplashScreen;
