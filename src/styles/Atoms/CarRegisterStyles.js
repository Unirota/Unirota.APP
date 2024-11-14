import { StyleSheet } from "react-native";
export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        
    },
    modalContent:{
        width: '80%',
        maxHeight: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    halfInputContainer:{
        flex: 0.48,
    },
    stateButtonText: {
        color: '#777',
    },
    input: {
        fontWeight: 'bold',
        fontSize: 17,
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderRadius: 16,
        padding: 16
    }
})