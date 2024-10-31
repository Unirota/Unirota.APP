import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center', // Alinha os itens no centro
  },
  avatarContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#3D3D3D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  ratingContainer: {
    marginTop: 8, // Espaçamento entre o ícone da câmera e a avaliação
    flexDirection: 'row', // Permite que o ícone e o texto da avaliação fiquem lado a lado
    alignItems: 'center', // Alinha o ícone e o texto verticalmente no centro
  },
})