import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 14,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    backgroundColor: 'cyan',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  infoContainer: {
    marginLeft: 12,
  },
  rightContent: {
    alignItems: 'flex-end',
    gap: 8,
    // backgroundColor: 'red'
  }
})