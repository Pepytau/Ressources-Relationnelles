import React from "react"
import {
    Text,
    View,
    StyleSheet,
    Button
  } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class Menu extends React.Component {
    render() {
        return(
            <View style={styles.background}>
                <Text style={styles.title}>Bonjour {this.props.route.params.name}! </Text>
                <Text style={styles.secondaryTitle}>Mes ressources :</Text>
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
    }
  });