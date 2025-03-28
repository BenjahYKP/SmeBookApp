import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AnnotationsScreen() {
  const anotaciones = [
    {
      fecha: '2023-10-15',
      profesor: 'Prof. María González',
      contenido: 'Participación destacada en clase de física'
    },
    {
      fecha: '2023-10-18',
      profesor: 'Prof. Carlos Mendoza',
      contenido: 'Entrega tardía del trabajo práctico N°3'
    },
    {
      fecha: '2023-10-20',
      profesor: 'Coord. Académica',
      contenido: 'Citación para reunión de seguimiento académico'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Anotaciones Registradas</Text>

      {anotaciones.map((anotacion, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.fecha}>{anotacion.fecha}</Text>
            <Text style={styles.profesor}>{anotacion.profesor}</Text>
          </View>
          <Text style={styles.contenido}>{anotacion.contenido}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
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
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  fecha: {
    color: '#666',
    fontSize: 12,
  },
  profesor: {
    color: '#1a237e',
    fontSize: 14,
    fontWeight: '500',
  },
  contenido: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  disclaimer: {
    marginTop: 20,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});