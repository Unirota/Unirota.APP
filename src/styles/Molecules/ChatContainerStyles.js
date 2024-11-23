import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        justifyContent:'space-around',
        paddingTop: 16,
        flex: 1
    },
    chatContainer:{
        backgroundColor: '#E3E8EF',
        height: '90%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 18,
    },
    inputContainer:{
        backgroundColor: '#3D3D3D',
        height: '10%',
        paddingTop: 16,
        paddingLeft: 18,
        paddingRight: 18,
    }
})