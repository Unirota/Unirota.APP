import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginLeft: 14,
    color: '#white'
  },
  filterButton: {
    backgroundColor: '#007DF0',
    borderRadius: 12,
    height: 39,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  filterButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
    width: 36,
    height: 15,
    fontFamily: 'Inter',
    alignSelf: 'center',
  },
  filterContent: {
    flexDirection: 'row',
    alignItems:  'center',
    gap: 4,
  }
})