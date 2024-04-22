import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import { saveTokenIntoStorage, removeTokenFromStorage } from "../shared/user-storage/UserStorage";
const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    console.log("Effettuo il login . . .");
    // Esegui la chiamata API per il login con username e password
    // Sostituisci 'api/login' con il vero endpoint delle tue API
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(async response => {
        if (response.ok) {
          const { token } = await response.json();
          console.log("TOKEN: ", token);
          await saveTokenIntoStorage(token);
          // Se il login è riuscito, naviga alla schermata home
          navigation.navigate('Home');
        } else {
          console.log("Login non riuscito")
          await removeTokenFromStorage();
          // Se il login non è riuscito, mostra un messaggio di errore
          Alert.alert('Errore', 'Credenziali non valide');
        }
      })
      .catch(error => {
        console.error('Errore durante il login:', error);
        Alert.alert('Errore', 'Si è verificato un errore durante il login');
      });
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
      <Pressable onPress={handleLogin}>
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



