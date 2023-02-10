import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
  } from 'react-native';
import { useGlobalState } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from 'react-native-reanimated-carousel';

import styles from "../styles/styles";

const { width } = Dimensions.get('window');

export default function Menu({navigation}){
    const [state, dispatch] = useGlobalState();
    const [ressources, setRessources] = useState(0);


    let isGuest = false;
    if (state.mail == '') {
        isGuest = true;
    }

    signOut = () => {
        navigation.replace('Login');
    }


    function renderScrollView(){
        if(!isGuest){
            return(
                <View style={styles.background}>
                <Text style={styles.title}>Compte</Text>
                <Text style={styles.secondaryTitle}>Mes informations personelles : </Text>
                <Text style={styles.title}>Prenom : {state.firstName} </Text>
                <Text style={styles.title}>Nom : {state.name} </Text>
                <Text style={styles.title}>Pseudo : {state.surname} </Text>
                <Text style={styles.title}>E-mail : {state.mail} </Text>
                <TouchableOpacity style={styles.button} onPress={this.signOut}>
                <Text style={styles.buttonText}>Se déconnecter</Text>
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
        else{
            return(
                <Text style={styles.secondaryTitle}>Aucune informations n'est disponible , veuillez vous connecté !</Text>
        )
        }
    }

    return(
        renderScrollView()
    )
}
