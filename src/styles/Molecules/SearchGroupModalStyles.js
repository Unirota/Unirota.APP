import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '64%',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 32,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center'
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  filterSection: {
    flexDirection: 'row',
    marginBottom: 10,
    // borderColor: 'red',
    // borderWidth: 2,
    justifyContent: `space-between`
  },
  noteSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: '32%'
  },
  filterInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  pickerContainer: {
    flex: 1
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 32
  },
  searchButtonContainer: {
    marginLeft: 20,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#1E1E1E',
    borderColor: '#1E1E1E',
    borderWidth: 1,
    borderRadius: 16,
  },
  searchButtonText: {
    fontSize: 16,
    color: '#D9D9D9',
  },
  clearFiltersButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#1E1E1E',
    borderWidth: 1,
    borderRadius: 16,
  },
  clearFiltersButtonText: {
    fontSize: 16,
    color: '#333',
  },
  starRatingContainer: {
    flex: 1,
    alignItems: 'flex-end',
  }
})