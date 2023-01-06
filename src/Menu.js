import React from "react"
import {
    Text,
    View,
    StyleSheet,
    Image
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Menu extends React.Component {
    render() {
        return(
            <View style={styles.background}>
                <Text style={styles.title}>Bonjour {this.props.route.params.name}! </Text>
                <Text style={styles.secondaryTitle}>Mes ressources :</Text>
                <View style={styles.bottomTab}>
                    <View style={styles.firstBottomButton}><TouchableOpacity  onPress={() => navigator.navigate('Menu')}><Image style={styles.bottomImages} source={require('./images/home.png')}></Image><Text style={styles.bottomButtonText}>Menu</Text></TouchableOpacity></View>
                    <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigator.navigate('Seach')}><Text style={styles.bottomButtonText}>Recherche</Text></TouchableOpacity></View>
                    <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigator.navigate('Discover')}><Text style={styles.bottomButtonText}>Découvrir</Text></TouchableOpacity></View>
                    <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigator.navigate('Favorite')}><Text style={styles.bottomButtonText}>Favoris</Text></TouchableOpacity></View>
                    <View style={styles.bottomButton}><TouchableOpacity onPress={() => navigator.navigate('Account')}><Text style={styles.bottomButtonText}>Compte</Text></TouchableOpacity></View>
                </View>
            </View>
        )
    }

    constructor(props)
    {
        super(props);
        navigator = props.navigation;
    }
    //const { itemId } = route.params;
}

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: '#7FF868'
    },
    title: {
      fontSize: 36,
      fontWeight: '800',
      alignSelf: "center",
      margin:'5%',
      color: "black",
    },
    secondaryTitle:{
    fontSize: 25,
      fontWeight: '800',
      margin: '3%',
      marginLeft: '15%',
      color: "black"
    },
    button: {
        width: '30%'
    },
    bottomTab: {
        backgroundColor: "white",
        alignSelf: "center",
        margin: '2%',
        position: "absolute",
        bottom:0,
        width: '95%',
        height: 60,
        borderRadius: 15,
        flexDirection: "row",
    },
    bottomButton:{
        borderLeftColor: 'grey',
        borderLeftWidth: 1,
        flex:1,
    },
    firstBottomButton:{
        flex:1,
    },
    bottomButtonText:{
        color:'black',
        textAlign: "center",
        fontSize: 10
    },
    bottomImages:{
        alignSelf:"center",
        marginTop: '5%',
        height:35,
        width:35
    }
  });