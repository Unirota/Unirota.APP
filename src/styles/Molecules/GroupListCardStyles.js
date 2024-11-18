import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 24,
        margin: 16,
        height: 200,
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: `row`,
    },
    hourContainer: {
        flexDirection: `row`
    },
    image:{
        height: 16,
        width: 16,
        marginRight: 8,
        marginTop: 2
    },
    title:{
        fontSize: 18,
        marginLeft: 8,
        fontWeight: 'bold'
    },
    font: {
        fontFamily: 'Inter'
    },
    description:{
        backgroundColor: `#C3C3C3`,
        height: '50%',
        marginTop: 8,
        borderRadius: 24,
        padding: 16
    },
    blackLine: {
        height: 1,
        borderColor: 'black',
        borderWidth: 0.5,
        marginLeft: -24,
        marginRight: -24,
        marginTop: 32,
        marginBottom: 4
    },
    footerContainer: {
        flexDirection: 'row'
    }
})