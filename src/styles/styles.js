import { StyleSheet } from 'react-native'
export default styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: '#59981A'
    },
    title: {
      fontSize: 30,
      margin:'5%',
      textAlign: 'center',  
      color: "black",
      fontFamily: 'Raleway-Bold'
    },
    secondaryTitle:{
        fontSize: 20,
        alignSelf: "center",
        margin:'2%',
        textAlign: 'center',  
        color: "black",
        fontFamily: 'Raleway-SemiBold'
    },
    tertiaryTitle:{
        fontSize: 17,
        alignSelf: "center",
        margin:'2%',
        textAlign: 'center',  
        color: "white",
        fontFamily: 'Raleway-SemiBold'
    },
    contentText:{
        fontSize: 15,
        margin:'3%',
        color: "white",
        textAlign: 'justify',
        fontFamily: 'Raleway-SemiBold'
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
        fontSize: 10,
        fontFamily: 'Raleway-SemiBold'
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
        fontSize:20,
        margin: 10,
        color: "black",
        fontFamily: 'Raleway-SemiBold'
    },
    scrollViewWrapper:{
        height:'54%'
    },
    scrollViewWrapperGuest: {
        height:'74%'
    },
    carousel:{
        alignSelf: "center",
    },
    recommendedRessource:{
            flex: 1,
            borderRadius: 10,
            backgroundColor: "#3D550C",
    },
    recommendedRessourceTitle:{
        fontSize:25,
        margin: 10,
        color: "white",
        fontFamily: 'Raleway-SemiBold'
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
        color: 'black',
        fontFamily: 'Raleway-SemiBold'
    },
    textInput: {
        alignSelf: "center",
        color: "black",
        placeholderTextColor: "black",
        fontFamily: 'Raleway-SemiBold',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        width: '85%',
        margin: '3%',
        maxHeight: '50%'
    },
    backArrow:{
        aspectRatio: 3/2.3,
        margin: '35%',
        height: 18
    },
    backButton:{
        width: 45,
    },
    banner: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.3)",
        flexDirection: 'row'
    },
    bannerTitle: {
        fontSize: 20,
        color: "black",
        fontFamily: 'Raleway-Bold'
      },
    bannerInfos: {
        fontSize: 10,
        color: "white",
        opacity: 0.8,
        fontFamily: 'Raleway-Regular'
    },
    bannerText: {
        margin: '1%',
        marginLeft: '3%',
        fontFamily: 'Raleway-SemiBold'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: '#59981A',
    },
    buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'black'
    },
    searchBar: {
        alignSelf: "center",
        color: "black",
        placeholderTextColor: "black",
        fontFamily: 'Raleway-SemiBold',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        textAlign: "center",
        width: '90%',
        margin: '3%',
        maxHeight: '50%'
    },
    pickerWrapper: {
        alignSelf: "center",
        color: "black",
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        width: '85%',
        margin: '3%',
    },
    picker: {
        alignSelf: "center",
        color: "black",
        fontFamily: 'Raleway-SemiBold',
        borderRadius: 10,
        width: '100%',
    }
    
  });