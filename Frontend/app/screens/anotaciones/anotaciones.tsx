import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator, 
  RefreshControl,
  Alert
} from 'react-native';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

const fetchUsers = async () => {
  try {
    const response = await fetch('http://10.0.2.2:3000/api/users');
    
    if (!response.ok) {
      throw new Error(`Error HTTP! estado: ${response.status}`);
    }
    
    const result = await response.json();
    
    // Modificación aquí: Acceder a la propiedad 'data'
    if (result.success && Array.isArray(result.data)) {
      setUsers(result.data);
      setError('');
    } else {
      throw new Error(result.message || 'Formato de respuesta inválido');
    }
  } catch (err) {
    setError('Error al cargar usuarios: ' + err.message);
    console.error('Error completo:', err);
    
    if (err.message.includes('Failed to connect') || err.message.includes('Network request failed')) {
      Alert.alert(
        'Error de conexión',
        'No se pudo conectar al servidor. Verifica tu conexión o la configuración del backend.',
        [{ text: 'OK' }]
      );
    }
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
};

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#1a237e" />
        <Text style={styles.loadingText}>Cargando usuarios...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#1a237e']}
        />
      }
    >
      <Text style={styles.header}>Usuarios Registrados</Text>
      <Text style={styles.subheader}>Total: {users.length} usuarios</Text>

      {/* Añadimos verificación adicional antes de mapear */}
      {Array.isArray(users) && users.map((user) => (
        <View key={user.id_user} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.fecha}>ID: {user.id_user}</Text>
            <Text style={styles.profesor}>Rol: {user.rol}</Text>
          </View>
          
          <Text style={styles.nombre}>{user.nombreCompleto}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.telefono}>Teléfono: {user.telefono}</Text>
          
          <Text style={styles.creacion}>
            Creado el: {new Date(user.createdAt).toLocaleDateString()}
          </Text>
        </View>
      ))}

      {Array.isArray(users) && users.length === 0 && (
        <Text style={styles.noData}>No se encontraron usuarios</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 15,
    color: '#1a237e',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  noData: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 5,
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
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  telefono: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  creacion: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
    fontStyle: 'italic',
  },
});