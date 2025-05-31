import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AttendanceScreen() {
    const router = useRouter();

    const asistencia = [
        {
            fecha: '2023-10-15',
            estado: 'Presente',
        },
        {
            fecha: '2023-10-18',
            estado: 'Ausente',
        },
        {
            fecha: '2023-10-20',
            estado: 'Tarde',
        },
    ];

    const renderEstadoIcon = (estado) => {
        switch (estado) {
            case 'Presente':
                return <Ionicons name="checkmark-circle-outline" size={20} color="#1a237e" />;
            case 'Ausente':
                return <Ionicons name="close-circle-outline" size={20} color="#d32f2f" />;
            case 'Tarde':
                return <MaterialIcons name="access-time" size={20} color="#ffa000" />;
            default:
                return null;
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>Registro de Asistencia</Text>
                <View style={styles.rightPlaceholder} />
            </View>
            <Text style={styles.subHeader}>Revisa tus registros y estado de asistencia</Text>
            {asistencia.map((registro, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.fecha}>{registro.fecha}</Text>
                        <View style={styles.estadoContainer}>
                            {renderEstadoIcon(registro.estado)}
                            <Text style={styles.estado}> {registro.estado}</Text>
                        </View>
                    </View>
                    <Text style={styles.cardText}>Este es el registro correspondiente a la fecha indicada.</Text>
                </View>
            ))}
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>
                    Total de registros: {asistencia.length}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 10,
    },
    backButton: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    rightPlaceholder: {
        width: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a237e',
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 8,
    },
    fecha: {
        color: '#666',
        fontSize: 12,
    },
    estadoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    estado: {
        color: '#1a237e',
        fontSize: 14,
        fontWeight: '500',
    },
    cardText: {
        fontSize: 13,
        color: '#333',
        marginTop: 5,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    summaryText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1a237e',
    },
});
