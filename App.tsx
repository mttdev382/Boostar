

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/login/LoginScreen';
import LogoutScreen from './src/components/logout/LogoutScreen';
import HomeScreen from './src/components/home/HomeScreen';
import SplashScreen from './src/components/splash-screen/SplashScreen';
import { getTokenFromStorage } from './src/shared/user-storage/UserStorage';
import { StyleSheet } from 'react-native';
import ProfileScreen from './src/components/profile/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StructureScreen from './src/components/structure/StructureScreen';
import BalanceScreen from './src/components/balance/BalanceScreen';

const App = () => {

  const Drawer = createDrawerNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAPIError = (error: any) => {
    setError('Si è verificato un errore nella richiesta API.');
    // Puoi gestire l'errore qui in base alla tua logica specifica
    // Ad esempio, visualizzando un messaggio di errore o registrando l'errore.
  };

  const handleRetry = () => {
    // Aggiorna lo stato dell'errore per nascondere la schermata degli errori
    setError(null);
    // Riprova l'azione che ha causato l'errore
    // Ad esempio, ripetere la chiamata API
    // Oppure eseguire un'altra azione che è fallita a causa dell'errore
  };

  // Simula un errore API
  const simulateAPIError = () => {
    handleAPIError('Errore di esempio: richiesta API fallita');
  };

  let token = null;

  useEffect(() => {
    // Simula una chiamata API fittizia con un ritardo di 2 secondi
    const simulateAPIRequest = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    simulateAPIRequest();

    getTokenFromStorage().then((tkn: string) => {
      token = tkn;
      setIsLoggedIn(tkn !== null);
    })
  }, []);


  if (isLoading) {
    return <SplashScreen />
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Structure" component={StructureScreen} />
          <Drawer.Screen name="Balance" component={BalanceScreen} />
          <Drawer.Screen name="Logout" component={LogoutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
