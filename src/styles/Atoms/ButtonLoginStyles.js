import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    input: {
        fontWeight: 'bold',
        fontSize: 17,
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderRadius: 16,
        padding: 16
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center',    
        width: 230,
        height: 48,
        borderRadius: 18,
    },
    buttonLogin: {
        color: 'white',
        fontWeight: '500',
        fontSize: 21,
    },
    buttonRegister: {
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center',    
        width: 230,
        height: 48,
        borderRadius: 18,
        marginTop: 60
    },
    ButtonDontHaveAccount:{
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,
        marginBottom: 120
    },
    ButtonHaveAccount:{
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,
    },
    ButtonDontHaveAccountText:{
        textAlign: 'center',
        width: 230,
        height: 48,
        color: 'white',
        fontWeight: '500',
        padding: 12,
        fontSize: 16,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#00B5AA'
    }
})