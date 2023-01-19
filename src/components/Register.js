import React from "react";
import { useGlobalState } from "../../App"
import {
    Text,
    View,
    StyleSheet,
    TextInput 
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({navigation, route}){

    const [state, dispatch] = useGlobalState();
    const { mail, pwd } = route.params;
    console.log(mail+pwd)

    return (
            <View style={styles.background}>
                <Text style={styles.title}>S'enregistrer</Text>
                <TextInput placeholder="Adresse e-mail" placeholderTextColor="black" style={styles.textInput} onChangeText={mail=>setMail(mail)}/>
                <TextInput placeholder="Mot de passe" secureTextEntry={true} placeholderTextColor="black" style={styles.textInput} onChangeText={pwd=>setPwd(pwd)}/>
                <TouchableOpacity style={styles.button} onPress={this.checkLogs}>
                    <Text style={styles.buttonText}>Se connecter</Text>
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