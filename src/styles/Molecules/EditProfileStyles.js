import { StyleSheet } from 'react-native'

export const EditProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00184A',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    color: 'white',
    fontSize: 24,
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
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    color: '#000',
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
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
