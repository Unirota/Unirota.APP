import { StyleSheet } from 'react-native';

export const SendInviteUsersStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1E51',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  titleHighlight: {
    color: '#007DF0',
  },
  dropdownContainer: {
    backgroundColor: '#F0F4FF',
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    paddingHorizontal: 10,
    marginTop: 100
  },
  picker: {
    height: 50,
    color: '#333',
  },
  input: {
    backgroundColor: '#F0F4FF',
    borderRadius: 10,
    width: '80%',
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#00B100',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    width: '80%',
    marginTop: 50
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});