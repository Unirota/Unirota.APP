import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiUnirota from "../api/ApiUnirota";

const inviteBaseRoute = 'convite'

export default new class InviteService {
  async GetInvites() {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.get(`/${inviteBaseRoute}`, {
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

  async AcceptInvite(inviteId) {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.patch(`/${inviteBaseRoute}/${inviteId}`, {}, {
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

  async RefuseInvite(inviteId) {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.delete(`/${inviteBaseRoute}/recusar/${inviteId}`, {
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