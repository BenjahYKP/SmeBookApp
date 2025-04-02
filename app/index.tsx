import React from "react";
import { Text, View, Alert, StyleSheet, TouchableOpacity , ImageBackground} from "react-native";
import Svg, { Path } from "react-native-svg";

import { useRouter } from 'expo-router';

export default function LoginScreen() {

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
      imageStyle={{ opacity: 0.5 }}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido/a SMEBOOK</Text>


      <TouchableOpacity style={ButtonStyle.button} onPress={() => Alert.alert("Consulta", "Funcionalidad de inicio de sesión no implementada")}>
        <Text style={ButtonStyle.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[ButtonStyle.button, { backgroundColor: "#ffffff",}]} 
        onPress={() => Alert.alert("Consulta", "Funcionalidad de registro no implementada")}
      >
        <Text style={[ButtonStyle.buttonText, { color:"black" }]}>Consulta</Text>
      </TouchableOpacity>

      <View style={styles.waveContainer}>
        <Svg height="200%" width="100%" viewBox="0 0 1440 320">
          <Path
            fill="#014898"
            d="M0,288L60,261.3C120,235,240,181,360,144C480,107,600,85,720,85.3C840,85,960,107,1080,133.3C1200,160,1320,192,1380,208L1440,224V320H0Z"
          />
        </Svg>
      </View>
      </View>
      </ImageBackground>
    
  );
}

const ButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#014898",
    borderRadius: 100,
    padding: 10,
    marginTop: 20,
    width: "50%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#014898",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  waveContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 600,
  }
});
