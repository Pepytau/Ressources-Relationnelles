import React, { useState } from "react";
import { useGlobalState } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import { 
    Text,   
    TextInput,
    View,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';

import styles from "../styles/styles";

export default function Search({navigation}){

    const [search, setSearch] = useState(0);
    const [ressources, setRessources] = useState(0);
    const [state, dispatch] = useGlobalState();

    searchRessource = async () => {
        var apiUrl = `http://ezraspberryapis.ddns.net/apis/searchRessource.api.php?search=${encodeURIComponent(search)}`;
        var headers = {
            'Accept':'application/json',
            'Content-Type':'multipart/form-data',
        };
        const response = await fetch(apiUrl,
        {
            method:'GET',
            headers:headers
        })
        .then((response)=>response.json())

        setRessources(response);
        }

    var RessourceList = [];
    for(let i = 0; i < ressources.length; i++){
          RessourceList[i] = <View key={i}><TouchableOpacity style={styles.ressource} onPress={() => navigation.navigate('RessourceDetail',{ressource: ressources[i]})}><Text style={styles.ressourceTitle}>{ressources[i].titre}</Text></TouchableOpacity></View>;
    }

    return(
        <View style={styles.background}>
            <Text style={styles.title}>Recherche</Text>
            <TextInput placeholder="🔎 Rechercher une ressource" placeholderTextColor="rgba(0, 0, 0, 0.6)" style={styles.searchBar} onChangeText={search=>{setSearch(search);this.searchRessource()}}/>
            <View style={searchStyles.scrollViewWrapper}>
                <ScrollView>
                    {RessourceList}
                </ScrollView>
            </View>
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

const searchStyles = StyleSheet.create({
    scrollViewWrapper:{
        height:'74%'
    }});