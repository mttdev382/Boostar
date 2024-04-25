import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import { saveTokenIntoStorage, removeTokenFromStorage, getTokenFromStorage, checkTokenValidity } from "../../shared/user-storage/UserStorage";
import * as Http from '../../shared/http-handler/http-handler'
import { StackNavigationProp } from '@react-navigation/stack';
import { login } from '../../services/api-service';
import { BaseScreenProps } from '../../interfaces/interfaces';



const LoginScreen: React.FC<BaseScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    checkStoredToken();
  }, []);

  const checkStoredToken = async () => {
    const storedToken = await getTokenFromStorage();
    if (storedToken) {
      const isValid = await checkTokenValidity(storedToken, navigation);
      if (isValid) {
        // Se il token è valido, naviga alla schermata home
        navigation.navigate('Home');
      } else {
        // Se il token non è valido, rimuovilo dalla memoria locale
        await removeTokenFromStorage();
      }
    }
  };

  const handleLoginButtonPressed = async () => {
    console.log("Effettuo il login . . .");
    try {
      let isLoginSuccessful = await login(navigation, username, password);

      if (isLoginSuccessful) navigation.navigate('Home');
      else Alert.alert('Errore', 'Credenziali non valide');

    } catch (error) {
      console.error('Errore durante il login:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante il login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Pressable onPress={handleLoginButtonPressed}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;