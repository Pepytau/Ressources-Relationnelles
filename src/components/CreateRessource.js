import React, { useState } from "react";
import { useGlobalState } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import { 
    Text,   
    View,
    Image,
    TextInput,
    Modal,
    Pressable
} from 'react-native';

import styles from "../styles/styles";

export default function Discover({navigation}){
    const [state, dispatch] = useGlobalState();
    const [title, setTitle] = useState(0);
    const [content, setContent] = useState(0);
    const [modalVisible, setModalVisible] = useState(0);

    createRessource = async () => {
        var apiUrl = "http://ezraspberryapis.ddns.net/apis/createRessource.api.php";
        var formdata = new FormData();
        var headers = {
            'Accept':'application/json',
            'Content-Type':'multipart/form-data',
        };

        formdata.append("title",title);
        formdata.append("content",content);
        formdata.append("creator",state.surname);
        
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
        .catch((error)=>alert('Une erreur s\'est produite, veuillez réessayer plus tard.'));
        
        switch (response.code) {
            case '0001':
                dispatch({ mail: response.mail });
                dispatch({ name: response.nom });
                dispatch({ firstName: response.prenom });
                dispatch({ surname: response.alias });
                setModalVisible(true);
                break;
            case '0003': 
                alert('Aucun champ ne peut être vide');
                break;
            default: 
                alert('Une erreur s\'est produite, veuillez réessayer plus tard.');
                break;
            }
        }
    return(
        <View style={styles.background}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            navigation.replace('Menu');
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Ressource créée avec succès !</Text>
                        <Pressable
                            style={[styles.buttonModal,styles.buttonClose]}
                            onPress={() => {
                                console.log('test');
                                setModalVisible(!modalVisible);
                                navigation.replace('Menu');}}>
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.title}>Créer une nouvelle Ressource</Text>
                <TextInput placeholder="Titre de la ressource" placeholderTextColor="black" style={styles.textInput} onChangeText={title=>setTitle(title)}/>
                <TextInput placeholder="Contenu" placeholderTextColor="black" multiline style={styles.textInput} onChangeText={content=>setContent(content)}/>
                <TouchableOpacity style={styles.button} onPress={this.createRessource}>
                    <Text style={styles.buttonText}>Créer ressource</Text>
                </TouchableOpacity>
            <View style={styles.bottomTab}>
                <View style={styles.firstBottomButton}><TouchableOpacity  onPress={() => navigation.replace('Menu')}><Image style={styles.bottomImages} source={require('../images/home.png')}/><Text style={styles.bottomButtonText}>Menu</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.replace('Search')}><Image style={styles.bottomImages} source={require('../images/search.png')}/><Text style={styles.bottomButtonText}>Recherche</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.replace('CreateRessource')}><Image style={styles.bottomImages} source={require('../images/plus.png')}/><Text style={styles.bottomButtonText}>Créer</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.replace('Discover')}><Image style={styles.bottomImages} source={require('../images/discover.png')}/><Text style={styles.bottomButtonText}>Découvrir</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.replace('Account')}><Image style={styles.bottomImages} source={require('../images/account.png')}/><Text style={styles.bottomButtonText}>Compte</Text></TouchableOpacity></View>
            </View>
        </View>
    )
}