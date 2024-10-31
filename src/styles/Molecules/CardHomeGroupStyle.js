import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: 320,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 32,
        borderRadius: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    groupContainer: {
        backgroundColor: '#D9D9D9',
        width: 280,
        marginBottom: 12,
        borderRadius: 12,
        borderColor: '#C3C3C3',
        borderWidth: 1,
        padding: 16,
        alignSelf: 'center',
    },
    groupTextLast: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    font: {
        fontSize: 12
    },
    list: {
        padding: 8,
    }
})