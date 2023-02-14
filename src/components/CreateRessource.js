import React, { useState } from "react";
import { useGlobalState } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { 
    Text,   
    View,
    Image,
    TextInput,
    Modal,
    Pressable
} from 'react-native';

import styles from "../styles/styles";
import { color } from "react-native-reanimated";

export default function Discover({navigation}){
    const [state, dispatch] = useGlobalState();
    const [title, setTitle] = useState(0);
    const [content, setContent] = useState(0);
    const [modalVisible, setModalVisible] = useState(0);
    const [type, setType] = useState(0);

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
        formdata.append("type",type);
        
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
            <TextInput placeholder="Titre de la ressource" placeholderTextColor="rgba(0, 0, 0, 0.6)" style={styles.textInput} onChangeText={title=>setTitle(title)}/>
            <TextInput placeholder="Contenu" placeholderTextColor="rgba(0, 0, 0, 0.6)" multiline style={styles.textInput} onChangeText={content=>setContent(content)}/>
            <TextInput placeholder="Localisation" placeholderTextColor="rgba(0, 0, 0, 0.6)" multiline style={styles.textInput} onChangeText={content=>setLocalisation(localisation)}/>
            <View style={styles.pickerWrapper}>
                <Picker
                selectedValue={type}
                style={styles.picker}
                dropdownIconColor={'black'}
                onValueChange={(itemValue, itemIndex) =>
                    setType(itemValue)}>
                    <Picker.Item label="Type" value="Type" enabled={false}/>
                    <Picker.Item label="Activité" value="Activité" />
                    <Picker.Item label="Article" value="Article" />
                    <Picker.Item label="Défi" value="Défi" />
                    <Picker.Item label="Vidéo" value="Vidéo" />
                    <Picker.Item label="Exercice" value="Exercice" />
                    <Picker.Item label="Cours" value="Cours" />
                    <Picker.Item label="Jeu en ligne" value="Jeu en ligne" />
                    <Picker.Item label="Fiche Lecture" value="Fiche Lecture" />
                </Picker>
            </View>
            <View style={styles.pickerWrapper}>
                <Picker
                selectedValue={type} //a remplacer par value scope
                style={styles.picker}
                dropdownIconColor={'black'}
                onValueChange={(itemValue, itemIndex) =>
                    setType(itemValue)}>
                    <Picker.Item label="Portée" value="Portée" enabled={false}/>
                    <Picker.Item label="Privée" value="Privée" />
                    <Picker.Item label="Publique" value="Publique" />
                    <Picker.Item label="Amis" value="Amis" />
                </Picker>
            </View>
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