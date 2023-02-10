import React, { useState } from "react";
import { useGlobalState } from "../../App";
import Moment from 'react-moment';
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
                    <Text style={styles.bannerInfos}>Créée le <Moment format="DD/MM/YYYY" element={Text}>{ressource.dateCreation}</Moment> par {ressource.createur}</Text> 
                    <Text style={styles.bannerInfos}>Ressource de type {ressource.type} dans la ville de {ressource.localisation}</Text>
                </View>
            </View>
            <ScrollView>
                <Text style={styles.contentText}>{ressource.contenu}</Text>
            </ScrollView>
        </View>
    )
}