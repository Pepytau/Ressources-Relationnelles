import React, {useState} from "react";
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
    const [stateMail, setMail] = useState(0);
    const [statePwd, setPwd] = useState(0);
    const [surname, setSurname] = useState(0);
    const [name, setName] = useState(0);
    const [firstName, setFirstName] = useState(0);

    register = async () => {
        var apiUrl = "http://ezraspberryapis.ddns.net/apis/createAccount.api.php";
        var formdata = new FormData();
        var headers = {
            'Accept':'application/json',
            'Content-Type':'multipart/form-data',
        };
    
        //var bcrypt = require('react-native-bcrypt');
        // const hash = bcrypt.hashSync(pwd, 8);
    
        const ip = await publicIP();
    
        formdata.append("mail",stateMail);
        formdata.append("password",statePwd);
        // formdata.append("password",hash);
        formdata.append("nom",name);
        formdata.append("prenom",firstName);
        formdata.append("alias",surname);
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
                alert("Compte créé avec succès ! Veuillez vous connecter")
                navigation.navigate('Login');
                break;
            case '0006': 
                alert('Un ou plusieurs champs sont vides');
                break;
            case '0007': 
                alert('Cet adresse e-mail est déjà utilisé pour un autre compte');
                break;
            case '0008': 
                alert('Une erreur s\'est produite, veuillez réessayer plus tard.');
                break;
            case '0005': 
                alert('Une erreur s\'est produite, veuillez réessayer plus tard.');
                break;
            }
        }

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
                <Text style={styles.title}>S'enregistrer</Text>
                <TextInput placeholder="Adresse e-mail" placeholderTextColor="black" style={styles.textInput} onChangeText={mail=>setMail(mail)}/>
                <TextInput placeholder="Pseudo" placeholderTextColor="black" style={styles.textInput} onChangeText={surname=>setSurname(surname)}/>
                <TextInput placeholder="Nom" placeholderTextColor="black" style={styles.textInput} onChangeText={name=>setName(name)}/>
                <TextInput placeholder="Prénom" placeholderTextColor="black" style={styles.textInput} onChangeText={firstName=>setFirstName(firstName)}/>
                <TextInput placeholder="Mot de passe" secureTextEntry={true} placeholderTextColor="black" style={styles.textInput} onChangeText={pwd=>setPwd(pwd)}/>
                <TouchableOpacity style={styles.button} onPress={this.register}>
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