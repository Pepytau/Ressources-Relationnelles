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

    return(
        <View style={styles.background}>
            <Text style={styles.title}>Commentaires</Text>
        </View>
    )
}