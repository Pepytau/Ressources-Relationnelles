import React, { useState } from "react";
import { useGlobalState } from "../../App"
import {
    Text,
    View,
    StyleSheet,
    TextInput 
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import publicIP from 'react-native-public-ip';

export default function Login({navigation}){

    const [state, dispatch] = useGlobalState();
    const [mail, setMail] = useState(0);
    const [pwd, setPwd] = useState(0);

    checkLogs = async () => {
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
    .then((response)=>response.json())
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
            navigation.navigate('Menu');
            break;
        case '0002': 
            alert('Mot de passe incorrect.');
            break;
        case '0003': 
            alert('Aucun utilisateur n\'est enregistré avec cet e-mail.');
            break;
        case '0005': 
            alert('POST ERROR');
            break;
        }
    }

    return (
            <View style={styles.background}>
                <Text style={styles.title}>Bienvenue sur (Re)sources Relationnelles !</Text>
                <TextInput placeholder="Adresse e-mail" placeholderTextColor="black" style={styles.textInput} onChangeText={mail=>setMail(mail)}/>
                <TextInput placeholder="Mot de passe" secureTextEntry={true} placeholderTextColor="black" style={styles.textInput} onChangeText={pwd=>setPwd(pwd)}/>
                <TouchableOpacity style={styles.button} onPress={this.checkLogs}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={styles.registerText}>Pas encore de compte ?</Text>
                <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register',{mail: mail,pwd: pwd})}>
                    <Text style={styles.buttonText}>S'inscrire</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.guestButton} onPress={() => {navigation.navigate('Menu');dispatch({ mail: "" });dispatch({ name: "" });dispatch({ firstName: "" });dispatch({ surname: "" });}}>
                    <Text style={styles.guestButtonText}>Continuer en tant qu'invité</Text>
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
        marginTop: '70%',
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
        textDecorationLine: "underline"
    }
});