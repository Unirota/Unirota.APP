import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiUnirota from "../api/ApiUnirota";

const mensagemBaseRoute = 'mensagem';

export default new class MensagemService {
  async SendMessage(mensagem, grupoId) {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.post(`/${mensagemBaseRoute}`, {
      conteudo: mensagem,
      grupoId: grupoId
    }, {
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

  async ObterMensagens(grupoId) {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.get(`/${mensagemBaseRoute}/grupo/${grupoId}`, {
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
}