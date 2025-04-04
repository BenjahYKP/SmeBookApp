import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NotasScreen() {
  const router = useRouter();

  const notas = [
    { asignatura: 'Matemáticas', nota: 6.2, faltas: 2 },
    { asignatura: 'Historia', nota: 5.8, faltas: 1 },
    { asignatura: 'Ciencias', nota: 4.5, faltas: 4 },
    { asignatura: 'Literatura', nota: 6.7, faltas: 0 },
  ];

  const promedio = notas.reduce((acc, curr) => acc + curr.nota, 0) / notas.length;

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado con botón de volver y título centrado */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Notas Académicas</Text>
        <View style={styles.rightPlaceholder} />
      </View>

      <Text style={styles.subheader}>Alumno: Joaquín Pérez</Text>
      
      <View style={styles.promedioContainer}>
        <Text style={styles.promedioText}>Promedio General:</Text>
        <Text style={[styles.promedioNumero, promedio >= 5.5 ? styles.aprobado : styles.reprobado]}>
          {promedio.toFixed(1)}
        </Text>
      </View>

      {notas.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.asignaturaHeader}>
            <Text style={styles.asignaturaNombre}>{item.asignatura}</Text>
            <Text style={[styles.nota, item.nota >= 5.5 ? styles.aprobado : styles.reprobado]}>
              {item.nota.toFixed(1)}
            </Text>
          </View>
          
          <View style={styles.detalleContainer}>
            <Text style={styles.detalleText}>Faltas: {item.faltas}</Text>
            <Text style={styles.detalleText}>
              Estado: {item.nota >= 5.5 ? 'Aprobado' : 'Reprobado'}
            </Text>
          </View>
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
    width: 40, // Mismo ancho que el botón de volver para centrar el título
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  promedioContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  promedioText: {
    fontSize: 18,
    color: '#333',
  },
  promedioNumero: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  aprobado: {
    color: '#2e7d32',
  },
  reprobado: {
    color: '#c62828',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  asignaturaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  asignaturaNombre: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1a237e',
  },
  nota: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detalleText: {
    color: '#666',
    fontSize: 14,
  },
});
