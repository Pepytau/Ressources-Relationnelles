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

    useEffect(() => {
        async function getResourceList(){
            var apiUrl = "http://ezraspberryapis.ddns.net/apis/getRessourceList.api.php";
            var headers = {
                'Accept':'application/json',
                'Content-Type':'multipart/form-data',
            };

            const response = await fetch(apiUrl,
            {
                method:'GET',
                headers:headers
            })
            .then((response)=>response.json().catch(()=>alert('Une erreur s\'est produite, veuillez réessayer plus tard.')))
            .catch((error)=>alert("ERREUR : "+error));
        
            setRessources(response);
        }
        getResourceList()
      },[]);

    var RessourceList = [];
    for(let i = 0; i < ressources.length; i++){
          RessourceList.push(
              <View key={i}><TouchableOpacity style={styles.ressource} onPress={() => navigation.navigate('RessourceDetail',{ressource: ressources[i]})}><Text style={styles.ressourceTitle}>{ressources[i].titre}</Text></TouchableOpacity></View>
          );
    }

    let isGuest = false;
    if (state.mail == '') {
        isGuest = true;
    }

    function renderScrollView(){
        if(!isGuest){
            return(
                <View style={styles.background}>
                <Text style={styles.title}>Bienvenue {state.firstName} !</Text>
                <Text style={styles.secondaryTitle} visibility='hidden'>Mes ressources recommandées : </Text>
                <Carousel style={styles.carousel}
                        mode="parallax"
                        width={width}
                        height={width / 2}
                        data={[...new Array(10).keys()]}
                        scrollAnimationDuration={100}
                        // onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ index }) => (
                            <View style={styles.recommendedRessource}>
                                <Text style={styles.recommendedRessourceTitle}>
                                    Ressource {index}
                                </Text>
                            </View>
                        )}
                />
                <View style={styles.scrollViewWrapper}>
                        <Text style={styles.secondaryTitle}>Mes ressources suivies:</Text>
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
        else{
            return(
            <View style={styles.background}>
                <Text style={styles.title}>Bienvenue sur (Re)ssources Relationnelles !</Text>
                <View style={styles.scrollViewWrapperGuest}>
                        <Text style={styles.secondaryTitle}>Ressources recommandées :</Text>
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
    }

    return(
        renderScrollView()
    )
}
