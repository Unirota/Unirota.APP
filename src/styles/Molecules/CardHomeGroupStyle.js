import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        height: 320,
        width: 320,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 16,
        borderRadius: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    groupContainer: {
        backgroundColor: '#D9D9D9',
        width: 280,
        height: 100,
        marginBottom: 12,
        borderRadius: 12,
        borderColor: '#C3C3C3',
        borderWidth: 1,
        padding: 16,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    groupTextLast: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    font: {
        fontSize: 12
    }
})