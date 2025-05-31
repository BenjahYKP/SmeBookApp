import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export default function BottomTabBar() {
  const router = useRouter();
  const currentPath = usePathname();

  const tabs = [
    { 
      name: 'INICIO', 
      path: '/screens/homepage',
      icon: (isActive) => (
        <Image
          source={require('../../assets/images/home.png')}
          style={[
            styles.iconImage,
            { tintColor: isActive ? '#1a237e' : '#757575' }
          ]}
        />
      )
    },
    { 
      name: 'NOTICIAS', 
      path: '/screens/anotaciones/anotaciones', 
      icon: (isActive) => (
        <Image
          source={require('../../assets/images/file.png')}
          style={[
            styles.iconImage,
            { tintColor: isActive ? '#1a237e' : '#757575' }
          ]}
        />
      )
    },
    { 
      name: 'AJUSTES', 
      path: '/screens/ajustes/ajustes',
      icon: (isActive) => (
        <Image
          source={require('../../assets/images/settings.png')}
          style={[
            styles.iconImage,
            { tintColor: isActive ? '#1a237e' : '#757575' }
          ]}
        />
      )
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = currentPath === tab.path;
        return (
          <TouchableOpacity
            key={tab.path}
            style={styles.tabButton}
            onPress={() => router.navigate(tab.path)}
          >
            {tab.icon(isActive)}
            <Text style={[
              styles.tabText,
              isActive && styles.activeTab
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabButton: {
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#757575',
    fontWeight: '500',
  },
  activeTab: {
    color: '#1a237e',
    fontWeight: 'bold',
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  }
});
