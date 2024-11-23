import { StyleSheet } from 'react-native'

export const EditProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
    marginTop: 20,
    fontFamily: 'Inter'
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    color: '#000',
    fontFamily: 'Inter'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: '#000',
    fontFamily: 'Inter'
  },
  eyeIcon: {
    padding: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  halfInputContainer: {
    flex: 0.48,
  },
  stateButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateButtonText: {
    color: '#777',
  },
  saveButton: {
    backgroundColor: '#00D1FF',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 50
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inter'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
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
  modalOverlayDate: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContentDate: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  modalHeaderDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitleDate: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  modalButtonDate: {
    color: '#007AFF',
    fontSize: 16,
  },
  datePicker: {
    height: 260,
    width: Platform.OS === 'ios' ? '100%' : 'auto',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },
})
