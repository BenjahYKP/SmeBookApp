import React, { useRef } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";

const newsData = [
  {
    id: "1",
    description: "El colegio informa que el día de mañana se suspenden las clases por motivo de fuerza mayor.",
    image: require("../../assets/images/Colegio.jpg"),
  },
  {
    id: "2",
    description: "Se realizará una reunión de padres el próximo viernes a las 18:00 horas.",
    image: require("../../assets/images/Reunion.jpeg"),
  },
  {
    id: "3",
    description: "El equipo de fútbol del colegio ganó el torneo interescolar.",
    image: require("../../assets/images/Futbol.jpg"),
  },
];

const width = Dimensions.get("window").width;

export default function HomeScreen() {
  const router = useRouter();
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  
  const handleAsistencia = () => {
    router.push('/screens/Asistencia/Asistencia');
  };
  const handleNotas = () => {
    router.push('/screens/notas/notas');
  };
  const handleAnotaciones = () => {
    router.push('/screens/anotaciones/anotaciones');
  };

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Joaquin Perez 4to A</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.newsContainer}>
        <Text style={styles.sectionTitle}>Noticias</Text>
        <Carousel
          ref={ref}
          width={width - 40}
          height={width * 0.7}
          data={newsData}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Image source={item.image} style={styles.newsImage} />
              <View style={styles.newsTextContainer}>
                <Text style={styles.newsText}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <Pagination.Basic
        progress={progress}
        data={newsData}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginBottom: 20 }}
        onPress={onPressPagination}
      />

      <View>
        <TouchableOpacity style={styles.button} onPress={handleAsistencia}>
          <View style={styles.blueOverlay} />
          <Ionicons name="calendar-outline" size={24} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Asistencia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNotas}>
          <View style={styles.blueOverlay} />
          <Ionicons name="document-text-outline" size={24} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Notas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAnotaciones}>
          <View style={styles.blueOverlay} />
          <Ionicons name="clipboard-outline" size={24} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Anotaciones</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a237e",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  notificationIcon: {
    padding: 10,
  },
  newsContainer: {
    marginBottom: 15,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  newsItem: {
    alignItems: "center",
  },
  newsImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsTextContainer: {
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  newsText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: 10,
  },
  button: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    overflow: "hidden",
    paddingVertical: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  blueOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 75,
    borderRadius: 30,
    backgroundColor: "#1a237e",
  },
  icon: {
    position: "absolute",
    left: 25,
    zIndex: 1,
  },
  textContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1a237e",
  },
});
