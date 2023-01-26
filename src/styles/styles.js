import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: '#7FF868'
    },
    title: {
      fontSize: 30,
      fontWeight: '800',
      alignSelf: "center",
      margin:'5%',
      textAlign: 'center',  
      color: "black",
    },
    secondaryTitle:{
        fontSize: 20,
        fontWeight: '600',
        alignSelf: "center",
        margin:'2%',
        textAlign: 'center',  
        color: "black",
    },
    contentText:{
        fontSize: 15,
        margin:'2%',
        fontWeight: '400',
        color: "black",
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
    scrollViewWrapperGuest: {
        height:'74%'
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
    },
    button: {
        width: '50%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '8%',
        backgroundColor: 'white',
        height: 30,
        borderRadius: 10
    },
    buttonText: {
        color: 'black'
    },
    textInput: {
        alignSelf: "center",
        color: "black",
        placeholderTextColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        width: '85%',
        margin: '3%'
    },
  });