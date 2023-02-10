import React, { useState } from "react";
import { useGlobalState } from "../../App"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import publicIP from 'react-native-public-ip';

import styles from "../styles/styles";

export default function Login({navigation}){

    const [state, dispatch] = useGlobalState();
    const [mail, setMail] = useState(0);
    const [pwd, setPwd] = useState(0);

    connect = async () => {
    var apiUrl = "http://ezraspberryapis.ddns.net/apis/login.api.php";
    var formdata = new FormData();
    var headers = {
        'Accept':'application/json',
        'Content-Type':'multipart/form-data',
    };

    //var bcrypt = require('react-native-bcrypt');
    // const hash = bcrypt.hashSync(pwd, 8);

    const ip = await publicIP();

    formdata.append("mail",mail);
    formdata.append("password",pwd);
    // formdata.append("password",hash);
    formdata.append("ip",ip);
    
    const response = await fetch(apiUrl,
    {
        method:'POST',
        headers:headers,
        body:formdata
    })
    .then((response)=>response.json().catch(()=>alert('Une erreur s\'est produite, veuillez réessayer plus tard.')))
    .then((response)=>{
        return response[0];
    })
    .catch((error)=>alert("ERREUR : "+error));
    
    switch (response.code) {
        case '0001':
            dispatch({ mail: response.mail });
            dispatch({ name: response.nom });
            dispatch({ firstName: response.prenom });
            dispatch({ surname: response.alias });
            navigation.replace('Menu');
            break;
        case '0002': 
            alert('Mot de passe incorrect.');
            break;
        case '0003': 
            alert('Aucun utilisateur n\'est enregistré avec cet e-mail.');
            break;
        case '0005': 
            alert('Une erreur s\'est produite, veuillez réessayer plus tard.');
            break;
        }
    }

    return (
            <View style={styles.background}>
                <Text style={styles.title}>Bienvenue sur (Re)sources Relationnelles !</Text>
                <TextInput placeholder="Adresse e-mail" placeholderTextColor="rgba(0, 0, 0, 0.6)" style={styles.textInput} onChangeText={mail=>setMail(mail)}/>
                <TextInput placeholder="Mot de passe" secureTextEntry={true} placeholderTextColor="rgba(0, 0, 0, 0.6)" style={styles.textInput} onChangeText={pwd=>setPwd(pwd)}/>
                <TouchableOpacity style={styles.button} onPress={this.connect}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={loginStyles.registerText}>Pas encore de compte ?</Text>
                <TouchableOpacity style={loginStyles.registerButton} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>S'inscrire</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.guestButton} onPress={() => {navigation.navigate('Menu');dispatch({ mail: "" });dispatch({ name: "" });dispatch({ firstName: "" });dispatch({ surname: "" });}}>
                    <Text style={loginStyles.guestButtonText}>Continuer en tant qu'invité</Text>
                </TouchableOpacity>
            </View>
    )
}

const loginStyles = StyleSheet.create({
    registerText: {
        color: 'white',
        alignSelf: "center",
        margin: '3%',
        marginTop: '70%',
        fontSize: 15,
        fontFamily: 'Raleway-Bold'
    }, 
    registerButton: {
        width: '25%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        height: 25,
        borderRadius: 10
    },
    guestButton:{
        width: '50%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: '6%',
        height: 25,
        borderRadius: 10
    },
    guestButtonText:{
        color: 'white',
        textDecorationLine: "underline",
        fontFamily: 'Raleway-SemiBold'
    }
})