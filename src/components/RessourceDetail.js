import React, { useState } from "react";
import { useGlobalState } from "../../App";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { 
    Text,   
    View,
    Image
} from 'react-native';

import styles from "../styles/styles";

export default function RessourceDetail({navigation, route}){
    const [state, dispatch] = useGlobalState();
    const { ressource } = route.params;
    return(
        <View style={styles.background}>
            <View style={styles.banner}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}><Image style={styles.backArrow}  source={require('../images/backArrow.png')}/></TouchableOpacity>
                <View style={styles.bannerText}>
                    <Text style={styles.bannerTitle}>{ressource.titre}</Text>
                    <Text style={styles.bannerInfos}>Créée le {ressource.dateCreation} par {ressource.createur}</Text>
                </View>
            </View>
            <ScrollView>
                <Text style={styles.contentText}>{ressource.contenu}</Text>
            </ScrollView>
            <View style={styles.bottomTab}>
                <View style={styles.firstBottomButton}><TouchableOpacity  onPress={() => navigation.navigate('Menu')}><Image style={styles.bottomImages} source={require('../images/home.png')}/><Text style={styles.bottomButtonText}>Menu</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('Search')}><Image style={styles.bottomImages} source={require('../images/search.png')}/><Text style={styles.bottomButtonText}>Recherche</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('Discover')}><Image style={styles.bottomImages} source={require('../images/discover.png')}/><Text style={styles.bottomButtonText}>Découvrir</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('Favorite')}><Image style={styles.bottomImages} source={require('../images/favorite.png')}/><Text style={styles.bottomButtonText}>Favoris</Text></TouchableOpacity></View>
                <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigation.navigate('Account')}><Image style={styles.bottomImages} source={require('../images/account.png')}/><Text style={styles.bottomButtonText}>Compte</Text></TouchableOpacity></View>
            </View>
        </View>
    )
}