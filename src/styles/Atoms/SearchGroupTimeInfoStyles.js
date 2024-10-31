import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Mantém os elementos em linha
    alignItems: 'center',  // Alinha verticalmente os itens no centro
    padding: 10,           // Adiciona espaçamento interno
    marginTop: -5
  },
  timeText: {
    fontSize: 16,          // Tamanho da fonte
    color: '#333',         // Cor do texto
    marginLeft: 5,        // Espaçamento à esquerda do texto
    fontWeight: '500'
  },
});

export default styles;