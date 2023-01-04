import React from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput 
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function({ navigation }) {
    return(
        <View style={styles.background}>
            <Text style={styles.title}>Bienvenue sur (Re)sources Relationnelles !</Text>
            <TextInput placeholder="Adresse e-mail" placeholderTextColor="black" style={styles.textInput}/>
            <TextInput placeholder="Mot de passe" placeholderTextColor="black" style={styles.textInput}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}>Pas encore de compte ?</Text>
            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: '#7FF868'
    },
    title: {
      margin: '10%',
      marginTop: '15%',
      fontSize: 25,
      fontWeight: '800',
      textAlign: "center",
      color: 'black'
    },
    button: {
        width: '50%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '8%',
        backgroundColor: 'white',
        height: 30,
        borderRadius: 10
    },
    buttonText: {
        color: 'black'
    },
    textInput: {
        alignSelf: "center",
        color: "black",
        placeholderTextColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        width: '85%',
        margin: '3%'
    },
    registerText: {
        color: 'white',
        alignSelf: "center",
        margin: '3%',
        marginTop: '80%',
        fontSize: 15,
        fontWeight: "bold"
    }, 
    registerButton: {
        width: '25%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        height: 25,
        borderRadius: 10
    }
  });