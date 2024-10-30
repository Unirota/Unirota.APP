// import { StyleSheet } from 'react-native'

// export default StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 73,
//     borderRadius: 8,
//     marginHorizontal: 14
//   },
//   searchContainer: {
//     flex: 1
//   },
//   searchInputText: {
//     fontSize: 16,
//     backgroundColor: '#3D3D3D',
//     borderRadius: 12,
//     height: 39,
//     width: 280,
//     marginVertical: 12,
//     marginLeft: 40,
//     marginRight: 139
//   },
//   filterButton: {
//     backgroundColor: '#007DF0',
//     borderRadius: 12,
//     marginLeft: 16,
//     width: 88,
//     height: 39
//   },
//   filterButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginVertical: 12,
//     marginRight: 12,
//     marginLeft: 40
//   },
// })











import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 73,
    paddingHorizontal: 14,
    gap: 8 // Adiciona um espaçamento entre os elementos
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
    flex: 1, // Permite que o input ocupe o espaço disponível
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

  }
})