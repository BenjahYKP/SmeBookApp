import React  from "react";
import { Text, View, Alert, StyleSheet, TouchableOpacity, Image, ImageBackground} from "react-native";
import { useRouter } from 'expo-router';


export default function LoginScreen() {


  const router = useRouter();
  const handleLogin = () => {
    router.replace('/screens/homepage');
    Alert.alert(" Benjamin es lo mas weko que hay y me cago toda mi rama")
  };

  return (
    <ImageBackground source={require('../assets/images/wave-haikei1.png')} 
    style={styles.background} >

    <View style={styles.container}>
       <Image source={require('../assets/images/logo.png')} 
       style={styles.logo} />

      <Text style={styles.title}>Bienvenido/a {"\n"}  SMEBOOK </Text>
      

      <TouchableOpacity style={ButtonStyle.button} onPress={handleLogin} >
        <Text style={ButtonStyle.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[ButtonStyle.button, { backgroundColor: "#ffffff",}]} 
        onPress={() => Alert.alert("Consulta", "Funcionalidad de registro no implementada")}
      >
        <Text style={[ButtonStyle.buttonText, { color:"black" }]}>Consulta</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
  );
}

const ButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#014898",
    borderRadius: 100,
    padding: 13,
    marginTop: 20,
    width: "75%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 4, 
    elevation: 30, 
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
 background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingBottom: 100,

  },
  logo: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
});