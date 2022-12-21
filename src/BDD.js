const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '192.168.1.69',
    user: 'admin_ressource',
    password: 'EAECA39DAB826F6D3B163E8D4EB8CD6A',
    connectionLimit : 5
});

let result;

pool.getConnection().then(conn =>{
    conn.query("SELECT * FROM RESSOURCES_CUBES.test").then((rows) =>{
        console.log(rows);
        result = rows;
    conn.end();
    }).catch(err =>{
        console.log(err);
        conn.end();
    }).catch(err =>{
        console.log(err);
    })
});

import React from "react"
import {
    Text,
    View,
    StyleSheet,
    Button
  } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class BDD extends React.Component {
    render() {
        return(
            <View style={styles.background}>
                <Text style={styles.sectionTitle}>Ceci est un test {result}</Text>
                <Button
                    onPress={null}
                    title="Zgeg"
                    color="#ff0000"
                    accessibilityLabel="Le bon zgegos"
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.lighter 
    },
    sectionTitle: {
      fontSize: 36,
      fontWeight: '800',
      alignSelf: "center",
      color: Colors.black 
    },
    button: {
        width: '30%'
    }
  });