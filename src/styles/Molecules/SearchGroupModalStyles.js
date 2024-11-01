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
    height: '65%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  noteSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: -122
  },
  filterLabel: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '500'
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
    flex: 1,
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 110,
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
  clearFiltersButtonContainer: {
    marginLeft: 20,
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
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#1E1E1E',
    marginTop: 20,
    marginBottom: 20,
    opacity: 1,
    border: 1,
    borderColor: '#818181'
  }
})