import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 73,
    paddingHorizontal: 14,
    gap: 8
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D3D3D',
    borderRadius: 12,
    height: 39,
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1
  },
  searchInputText: {
    fontSize: 16,
    backgroundColor: '#3D3D3D',
    borderRadius: 12,
    height: 39,
    flex: 1,
    paddingLeft: 40,
    paddingRight: 12,
    marginLeft: 14
  },
  filterButton: {
    backgroundColor: '#007DF0',
    borderRadius: 12,
    height: 39,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    width: 36,
    height: 15,
    fontFamily: 'Inter',
    bottom: 1
  },
  filterContent: {
    flexDirection: 'row',
    alignItems:  'center',
    gap: 4,
  },
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
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderRadius: 25
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
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
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 110,
  },
  searchButtonContainer: {
    marginLeft: 20
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
})