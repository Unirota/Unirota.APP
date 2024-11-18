import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        justifyContent:'space-around',
        paddingTop: 16,
        backgroundColor: '#E3E8EF',
        height: '90%',
        borderRadius: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 60
    },
    row2: {
        marginTop: 10, 
        flexDirection: 'row',
    },
    itensGroupRequest:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    cameraIcon: {
        width: 80,
        height: 80,
        marginTop: 22
    },
    localizationIcon: {
        marginTop: 5,
        width: 15,
        height: 15,
    },
    titleGroup:{
        fontSize: 28,
        fontWeight: '800',
        fontFamily: 'Inter',
        marginTop: 10,
    },
    subTitleGroup:{
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'Inter',
        marginTop: 10,      
    },
    subTitleDriver:{
        fontSize: 20,
        fontWeight: '100',
        fontFamily: 'Inter',
    },
    textDateCreate:{
        fontSize: 15,
        fontFamily: 'Inter',
        marginTop: 10,    
    },
    infosGroup: {
        alignItems: 'center',
        marginTop: 25,
        justifyContent:'space-around',
        backgroundColor: '#1E1E1E',
        height: '13%',
        width: '80%',
        borderRadius: 20,
    },
    textLocal:{
        justifyContent: 'flex-start',
        fontSize: 18,
        fontFamily: 'Inter',
        marginLeft: 5, 
        color: '#DDDDDD'     
    },
    textHour:{
        fontSize: 18,
        fontFamily: 'Inter', 
        marginHorizontal: 5,
        color: '#DDDDDD',
        marginBottom: 13     
    },
    textStars:{
        fontSize: 18,
        fontFamily: 'Inter', 
        marginHorizontal: 60,
        color: '#DDDDDD',
        marginBottom: 13     
    },
    buttonRequestGroup: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
    },

})