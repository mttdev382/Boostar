import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface ErrorScreenProps {
    error: string;
    onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ error, onRetry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>Si è verificato un errore:</Text>
            <Text style={styles.errorText}>{error}</Text>
            <Button title="Riprova" onPress={onRetry} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default ErrorScreen;
