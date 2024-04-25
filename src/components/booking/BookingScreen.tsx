import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { BaseScreenProps, Booking } from '../../interfaces/interfaces';
import { getBookingData } from '../../services/api-service';



const BookingScreen: React.FC<BaseScreenProps> = ({ navigation }) => {
    const [bookings, setBookings] = useState<Booking[] | null>(null);

    useEffect(() => {
        initBookingData();
    }, []);

    const initBookingData = async () => {
        try {
            const data = await getBookingData(navigation);
            setBookings(data);
        } catch (error) {
            console.error('Errore nel recupero dei dati delle prenotazioni:', error);
        }
    };

    if (!bookings) {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Elenco Prenotazioni</Text>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Elenco Prenotazioni</Text>
            <FlatList
                data={bookings}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.ota.imgUrl }} style={styles.otaImage} />
                        <Text style={styles.customerName}>{item.customer.username}</Text>
                        <Text style={styles.roomName}>Camera: {item.structure.name}</Text>
                        <Text style={styles.dates}>Dal: {item.from.toString()} al: {item.to.toString()}</Text>
                        <Text style={styles.amount}>Importo: {item.amount} €</Text>
                        <Text style={styles.guests}>Ospiti: {item.guests}</Text>
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
    otaImage: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    customerName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    roomName: {
        fontSize: 16,
    },
    dates: {
        fontSize: 16,
    },
    amount: {
        fontSize: 16,
    },
    guests: {
        fontSize: 16,
    },
});

export default BookingScreen;
