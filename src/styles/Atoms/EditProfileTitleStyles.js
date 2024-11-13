import { StyleSheet } from 'react-native'

export const EditProfileTitleStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: '#00D1FF',
  },
  firstTitle: {
    color: '#00D1FF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondTitle: {
    color: '#E3E8EF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5
  }
})
