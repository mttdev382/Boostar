import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { BalanceItem, BaseScreenProps } from '../../interfaces/interfaces';
import { getBalanceData } from '../../services/api-service';


const BalanceScreen: React.FC<BaseScreenProps> = ({ navigation }) => {
    const [balanceData, setBalanceData] = useState<BalanceItem[] | null>(null);

    useEffect(() => {
        initBalanceData();
    }, []);

    const initBalanceData = async () => {
        try {
            const data: BalanceItem[] = await getBalanceData(navigation);
            setBalanceData(data);
        } catch (error) {
            console.error('Errore nel recupero dei dati dell\'estratto conto:', error);
        }
    };

    if (!balanceData) {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Estratto Conto</Text>
                <Text>Caricamento...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Estratto Conto</Text>
            <FlatList
                data={balanceData}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.month}>{item.month}</Text>
                        <Text style={styles.amount}>Importo totale: {item.totalAmount} €</Text>
                        <Text style={styles.commission}>Commissione servizio: {item.commission} €</Text>
                        <Text style={styles.netAmount}>Importo erogato: {item.netAmount} €</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        marginBottom: 20,
    },
    month: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    amount: {
        fontSize: 16,
    },
    commission: {
        fontSize: 16,
    },
    netAmount: {
        fontSize: 16,
    },
});

export default BalanceScreen;
