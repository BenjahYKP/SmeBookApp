import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Joaquin Perez 4to A</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximas clases</Text>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.classItem}>
            <Text style={styles.classText}>Matematicas 11:10/12:30 - S101</Text>
          </View>
        ))}
      </View>
        <TouchableOpacity style={styles.newsItem}>
          <Text style={styles.newsText}>Noticias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newsItem}>
          <Text style={styles.newsText}>Agenda</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  notificationIcon: {
    padding: 10,
  },
  section: {
    marginBottom: 30,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  classItem: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  classText: {
    fontSize: 16,
    color: '#333',
  },
  newsItem: {
    backgroundColor: '#e8eaf6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  newsText: {
    fontSize: 16,
    color: '#1a237e',
    fontWeight: '500',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f9fa',
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
    color: '#1a237e',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    color: '#666',
  },
});