import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    input: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderRadius: 16,
        padding: 16,
        marginTop: 15
    },
    inputNeighborhood: {
        flexDirection: 'row',
        marginLeft: 56,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
        backgroundColor: 'white',
        width: 200,
        height: 50,
        borderRadius: 16,
        padding: 16,
        marginTop: 15
    },
    inputNumber: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 50,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
        backgroundColor: 'white',
        width: 100,
        height: 50,
        borderRadius: 16,
        padding: 16,
        marginTop: 15
    },
})