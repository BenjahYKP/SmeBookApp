import React, { useRef } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";

const newsData = [
  {
    id: "1",
    title: "Noticia 1",
    description: "El colegio informa que el día de mañana se suspenden las clases por motivo de fuerza mayor.",
    image: require("../../assets/images/Colegio.jpg"),
  },
  {
    id: "2",
    title: "Noticia 2",
    description: "Se realizará una reunión de padres el próximo viernes a las 18:00 horas.",
    image: require("../../assets/images/Reunion.jpeg"),
  },
  {
    id: "3",
    title: "Noticia 3",
    description: "El equipo de fútbol del colegio ganó el torneo interescolar.",
    image: require("../../assets/images/Futbol.jpg"),
  },
];

const width = Dimensions.get("window").width;

export default function HomeScreen() {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
          height={width / 1.5}
          data={newsData}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Image source={item.image} style={styles.newsImage} />
              <View style={styles.newsTextContainer}>
                <Text style={styles.newsTitle}>{item.title}</Text>
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

      <TouchableOpacity style={styles.newsButton}>
        <Text style={styles.newsButtonText}>Agenda</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80,
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
    marginBottom: 30,
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
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a237e",
    textAlign: "center",
    marginBottom: 5,
  },
  newsText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 15,
  },
  newsButton: {
    backgroundColor: "#e8eaf6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  newsButtonText: {
    fontSize: 16,
    color: "#1a237e",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: 15,
    textAlign: "center",
  },
});
