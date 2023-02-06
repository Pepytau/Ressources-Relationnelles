import React, { useState } from "react";
import { useGlobalState } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import { 
    Text,   
    View,
    Image,
    TextInput
} from 'react-native';

import styles from "../styles/styles";

export default function Discover({navigation}){
    const [state, dispatch] = useGlobalState();
    return(
        
        <View style={styles.background}>
            <Text style={styles.title}>Créer une nouvelle Ressource</Text>
                <TextInput placeholder="Titre de la ressource" placeholderTextColor="black" style={styles.textInput}/>
                <TextInput placeholder="Contenu" placeholderTextColor="black" multiline style={styles.textInput}/>
                <TouchableOpacity style={styles.button} onPress={this.connect}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
            <View style={styles.bottomTab}>
                <View style={styles.firstBottomButton}><TouchableOpacity  onPress={() => navigation.navigate('Menu')}><Image style={styles.bottomImages} source={require('../images/home.png')}/><Text style={styles.bottomButtonText}>Menu</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('Search')}><Image style={styles.bottomImages} source={require('../images/search.png')}/><Text style={styles.bottomButtonText}>Recherche</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('CreateRessource')}><Image style={styles.bottomImages} source={require('../images/plus.png')}/><Text style={styles.bottomButtonText}>Créer</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('Discover')}><Image style={styles.bottomImages} source={require('../images/discover.png')}/><Text style={styles.bottomButtonText}>Découvrir</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('Account')}><Image style={styles.bottomImages} source={require('../images/account.png')}/><Text style={styles.bottomButtonText}>Compte</Text></TouchableOpacity></View>
            </View>
        </View>
    )
}