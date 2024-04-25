import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { BaseScreenProps, ProfileData } from '../../interfaces/interfaces';
import { getProfileData } from '../../services/api-service';

const ProfileScreen: React.FC<BaseScreenProps> = ({ navigation }) => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        // Effettua una chiamata API per ottenere i dati del profilo
        initProfileData();
    }, []);

    const initProfileData = async () => {
        try {
            const data: ProfileData = await getProfileData(navigation);
            setProfileData(data);
        } catch (error) {
            console.error('Errore nel recupero dei dati del profilo:', error);
        }
    };

    const handleDownloadAttachment = async (attachmentId: number) => {
        try {
            // Implementa la logica per scaricare l'allegato
            // Esempio: axios.get(`http://localhost:3000/download/${attachmentId}`);
        } catch (error) {
            console.error('Errore durante il download dell\'allegato:', error);
        }
    };

    if (!profileData) {
        return (
            <View style={styles.container}>
                <Text>Caricamento...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profilo</Text>
            <Text>Nome: {profileData.user.firstName}</Text>
            <Text>Cognome: {profileData.user.lastName}</Text>
            <Text>Email: {profileData.user.email}</Text>
            <Text>IBAN per pagamento: {profileData.user.iban}</Text>

            {profileData.attachments && profileData.attachments.length > 0 && (
                <View style={styles.attachmentsContainer}>
                    <Text>Allegati:</Text>
                    {profileData.attachments.map((attachment) => (
                        <Pressable key={attachment.id} onPress={() => handleDownloadAttachment(attachment.id)}>
                            <Text style={styles.attachment}>{attachment.name} - {attachment.filename}</Text>
                        </Pressable>
                    ))}
                </View>
            )}


            {profileData.agent && (
                <View style={styles.agentContainer}>
                    <Text>Agente di riferimento:</Text>
                    <Image source={{ uri: profileData.agent.imgUrl }} style={styles.agentImage} />
                    <Text>{profileData.agent.name}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    agentContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    agentImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 10,
    },
    attachmentsContainer: {
        marginTop: 20,
    },
    attachment: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
});

export default ProfileScreen;