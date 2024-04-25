import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageSourcePropType } from 'react-native';
import { getStructuresData } from '../../services/api-service';
import { BaseScreenProps, Structure, StructuresDataResponse, User } from '../../interfaces/interfaces';

const StructureScreen: React.FC<BaseScreenProps> = ({ navigation }) => {
    const [structures, setStructures] = useState<Structure[]>([]);
    const [user, setUser] = useState<User>();


    useEffect(() => {
        fetchStructuresData();
    }, []);

    const fetchStructuresData = async () => {
        try {
            const data = await getStructuresData(navigation);
            console.log("Data", data);
            setStructures(data.structures);
            setUser(data.user);
        } catch (error) {
            console.error('Errore nel recupero dei dati delle strutture:', error);
        }
    };

    const renderStructureItem = ({ item }: { item: Structure }) => (
        <View style={styles.structureContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.structureImage} />
            <Text style={styles.structureName}>{item.name}</Text>
            <Text style={styles.structureAddress}>{item.address}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Le Mie Strutture</Text>
            <FlatList
                data={structures}
                renderItem={renderStructureItem}
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
    structureContainer: {
        marginBottom: 20,
    },
    structureImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 8,
    },
    structureName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    structureAddress: {
        fontSize: 16,
    },
});

export default StructureScreen;
