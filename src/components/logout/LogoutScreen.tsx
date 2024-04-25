import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { removeTokenFromStorage } from '../../shared/user-storage/UserStorage';
import { BaseScreenProps } from '../../interfaces/interfaces';

const LogoutScreen: React.FC<BaseScreenProps> = ({ navigation }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogout = async () => {
        await removeTokenFromStorage();
        setIsLoggedIn(false);
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sei sicuro di voler effettuare il logout?</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default LogoutScreen;
