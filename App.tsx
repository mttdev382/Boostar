

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import LoginScreen from './src/login/LoginScreen';
import HomeScreen from './src/home/HomeScreen';
import SplashScreen from './src/splash-screen/SplashScreen';
import { getTokenFromStorage, removeTokenFromStorage } from './src/shared/user-storage/UserStorage';
import { Pressable, Text } from 'react-native';

const App = () => {

  const Stack = createStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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



  // handlers
  const handleLogout = async () => {
    // Rimuovi l'ID dell'utente memorizzato
    await removeTokenFromStorage();
    setIsLoggedIn(false);
  };

  // render functions 
  const renderLoginScreen = () => {
    return <Stack.Screen name="Login" component={LoginScreen} />;
  };

  const renderLogoutScreen = () => {
    return <Pressable onPress={handleLogout}>
      <Text>Logout</Text>
    </Pressable>
  };

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            {isLoggedIn ? '' : renderLoginScreen()}
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
      {isLoggedIn ? renderLogoutScreen() : ''}
    </>)
};

export default App;
