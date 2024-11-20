import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    row: {
        alignSelf: 'center',
        marginLeft: 110,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start', // Adicionado para espaçar os elementos
        paddingRight: 60,
        alignItems: 'center', // Opcional, alinha os elementos verticalmente
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
    inputDate: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderRadius: 16,
        padding: 16
    },
    inputNeighborhood: {
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
        backgroundColor: 'white',
        width: 190,
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
    StylesDriver: {
        fontSize: 18,
        marginLeft: 8,
    },
    ContainerRegisterDriver:{
        maxHeight: 200,
        overflow: 'hidden',
    },
    OptionColorScroll: {
        backgroundColor: '#D9D9D9',
    },
    OptionColorText: {
        padding: 16,
        paddingTop: 8,
        fontSize: 14,
        color: '#666',
        textAlign: 'justify',
    }
})