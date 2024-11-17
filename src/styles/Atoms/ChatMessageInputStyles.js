import { StyleSheet } from "react-native"

export default StyleSheet.create({
    messageInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    message:{
        borderRadius:28,
        backgroundColor: '#C3C3C3',
        paddingLeft: 28,
        paddingRight: 28,
        fontFamily: 'Inter',
        fontSize: 20,
        flex: 1
    },
    sendButton: {
        marginLeft: 2,
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#007DF0',
        justifyContent: 'center',
        alignItems: 'center',
    },
})