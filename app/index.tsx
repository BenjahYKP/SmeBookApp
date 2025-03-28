import React, { useState } from "react";
import { Text, View, Alert, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido/a RIDE</Text>


      <TouchableOpacity style={ButtonStyle.button} >
        <Text style={ButtonStyle.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[ButtonStyle.button, { backgroundColor: "#ffffff",}]} 
        onPress={() => Alert.alert("Registro", "Funcionalidad de registro no implementada")}
      >
        <Text style={[ButtonStyle.buttonText, { color:"black" }]}>Registrarse</Text>
      </TouchableOpacity>
    </View>
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
  error: {
    color: "red",
    marginBottom: 10,
  },
});
