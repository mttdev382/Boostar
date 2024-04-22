import React, { useEffect, useState } from 'react';
import { ImageBackground, View, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      source={require('./boostar.png')} // Immagine di sfondo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Copri l'intera area disponibile
    justifyContent: 'center', // Centro verticalmente
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Metti il loader in basso
    alignItems: 'center', // Centro orizzontalmente
    marginBottom: 50, // Distanza dal basso
  },
});

export default SplashScreen;
