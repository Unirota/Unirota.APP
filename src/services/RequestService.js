import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiUnirota from "../api/ApiUnirota";

const requestBaseRoute = 'solicitacaoentrada'

export default new class RequestService {
  groups = [
    {
      id: 1,
      nome: 'Grupo da Folha',
      destino: 'UniCesumar',
      nota: 4.5,
      horaInicio: '07:30',
      onAccept: () => console.log('Convite aceito'),
      onReject: () => console.log('Convite rejeitado')
    },
    {
      id: 2,
      nome: 'Grupo Alpha',
      destino: 'UEM',
      nota: 4,
      horaInicio: '08:30',
      onAccept: () => console.log('Convite aceito'),
      onReject: () => console.log('Convite rejeitado')
    },
  ];

  async GetRequests() {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.get(`/${requestBaseRoute}`, {
      headers: {
        'Authorization': token
      }
    })
    .then(response => {
      
      return response;

    }).catch(error => {
      
      console.log(error)
    })
    
    return response;
  }
};