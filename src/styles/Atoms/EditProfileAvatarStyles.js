import { StyleSheet } from 'react-native'

export const EditProfileAvatarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 40,
    height: 40,
    tintColor: '#777',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#00D1FF',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
