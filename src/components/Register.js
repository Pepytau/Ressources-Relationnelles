import React, {useState} from "react";
import { useGlobalState } from "../../App"
import {
    Text,
    View,
    StyleSheet,
    TextInput 
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({route, navigation}){

    const [state, dispatch] = useGlobalState();
    const { mail, pwd } = route.params;
    const [stateMail, setMail] = useState(0);
    const [statePwd, setPwd] = useState(0);
    const [surname, setSurname] = useState(0);
    const [name, setName] = useState(0);
    const [firstName, setFirstName] = useState(0);

    return (
            <View style={styles.background}>
                <Text style={styles.title}>S'enregistrer</Text>
                <TextInput placeholder="Adresse e-mail" placeholderTextColor="black" value={mail} style={styles.textInput} onChangeText={mail=>setMail(mail)}/>
                <TextInput placeholder="Pseudo" placeholderTextColor="black" style={styles.textInput} onChangeText={surname=>setSurname(surname)}/>
                <TextInput placeholder="Nom" placeholderTextColor="black" style={styles.textInput} onChangeText={name=>setName(name)}/>
                <TextInput placeholder="Prénom" placeholderTextColor="black" style={styles.textInput} onChangeText={firstName=>setFirstName(firstName)}/>
                <TextInput placeholder="Mot de passe" secureTextEntry={true} value={pwd} placeholderTextColor="black" style={styles.textInput} onChangeText={pwd=>setPwd(pwd)}/>
                <TouchableOpacity style={styles.button} onPress={this.checkLogs}>
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