import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90
      },
      modalContent: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        height: '90%',
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
      },
      buttonContainer: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
      },
      buttonWrapper: {
        width: '50%',
        marginVertical: 5,
      },
      acceptButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
      },
      rejectButton: {
        backgroundColor: '#F44336',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
      },
      acceptButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      rejectButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
      },
      boldText: {
        fontWeight: 'bold',
      },
      infoBox: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
        width: '80%'
      },
      infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      infoText: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 5,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      footerText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
      },
      icon: {
        marginRight: 5,
        alignContent: 'space-evenly'
      },
      groupImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginBottom: 15,
      }
})