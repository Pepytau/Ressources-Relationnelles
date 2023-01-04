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
                <Text style={styles.sectionTitle}>SIMON PU LE SEXE</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.red,
    },
    sectionTitle: {
      fontSize: 36,
      fontWeight: '800',
      alignSelf: "center",
      color: Colors.black,
    },
    button: {
        width: '30%'
    }
  });