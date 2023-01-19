import React from "react"
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
  } from 'react-native';
import { useGlobalState } from "../../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

export default function Menu({navigation}){
    const [state, dispatch] = useGlobalState();

    let isGuest = false;
    if (state.mail == '') {
        isGuest = true;
    }

    console.log(state.firstName)
    let titleText;
    if (isGuest){
        titleText = "Bienvenue sur (Re)ssources Relationnelles !";
    }
    else{
        titleText = "Bienvenue "+state.firstName+" !";
    }

    function renderScrollView(){
        console.log("testtststt")
        if(!isGuest){
            console.log("CA PASSE")
            return(
                <View style={styles.scrollViewWrapper}>
                    <Text style={styles.secondaryTitle}>Mes ressources suivies:</Text>
                    <ScrollView>
                        {payments}
                    </ScrollView>
                </View>
            )
        }
    }

    console.log(isGuest);
    
    var payments = [];
    for(let i = 0; i < 10; i++){
        payments.push(
            <View key={i} style={styles.ressource}><Text style={styles.ressourceTitle}>Ressource test</Text></View>
		);
    }

    return(
    <View style={styles.background}>
        <Text style={styles.title}>{titleText}</Text>
        <Text style={styles.secondaryTitle} visibility='hidden'>Mes ressources recommandées : </Text>
        <Carousel style={styles.carousel}
                mode="parallax"
                width={width}
                height={width / 2}
                data={[...new Array(10).keys()]}
                scrollAnimationDuration={100}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View style={styles.recommendedRessource}>
                        <Text style={styles.recommendedRessourceTitle}>
                            Ressource {index}
                        </Text>
                    </View>
                )}
            />
        {renderScrollView()}
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

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: '#7FF868'
    },
    title: {
      fontSize: 30,
      fontWeight: '800',
      alignSelf: "center",
      margin:'5%',
      color: "black",
    },
    secondaryTitle:{
      fontSize: 20,
      fontWeight: '800',
      margin: '3%',
      marginLeft: '5%',
      color: "black"
    },
    button: {
        width: '30%'
    },
    bottomTab: {
        backgroundColor: "white",
        alignSelf: "center",
        position: "absolute",
        bottom:0,
        width: '100%',
        height: 60,
        flexDirection: "row",
    },
    bottomButton:{
        borderLeftColor: 'grey',
        borderTopWidth: 2,
        borderLeftWidth: 1,
        flex:1,
    },
    firstBottomButton:{
        borderTopWidth: 2,
        flex:1,
    },
    bottomButtonText:{
        color:'black',
        textAlign: "center",
        fontSize: 10
    },
    bottomImages:{
        alignSelf:"center",
        marginTop: '10%',
        marginBottom: '5%',
        height:30,
        width:30
    },
    ressource:{
        width:'90%',
        alignSelf: "center",
        margin: 10,
        height:130,
        borderRadius: 10,
        backgroundColor: "#D7d8d8"
    },
    ressourceTitle:{
        fontSize:25,
        margin: 10,
        color: "black"
    },
    scrollViewWrapper:{
        height:'53%'
    },
    carousel:{
        alignSelf: "center",
    },
    recommendedRessource:{
            flex: 1,
            text: "white",
            borderRadius: 10,
            backgroundColor: "grey"
    },
    recommendedRessourceTitle:{
        fontSize:25,
        margin: 10,
        color: "black"
    }
  });