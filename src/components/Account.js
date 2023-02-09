import React, { useState } from "react";
import { useGlobalState } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import { 
    Text,   
    View,
    Image
} from 'react-native';

import styles from "../styles/styles";

export default function Account({navigation}){
    const [state, dispatch] = useGlobalState();

    signOut = () => {
        navigation.replace('Login');
    }

    return(
        <View style={styles.background}>
            <Text style={styles.title}>Compte</Text>
            <TouchableOpacity style={styles.button} onPress={this.signOut}>
                    <Text style={styles.buttonText}>Se déconnecter</Text>
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