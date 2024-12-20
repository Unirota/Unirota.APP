import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiUnirota from "../api/ApiUnirota";

const groupBaseRoute = 'grupo';

export default new class GroupService {
  async GetHomeGroups(destino) {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.get(`/${groupBaseRoute}/home?destino=${destino}`, {
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

  async GetGroups(destino, nota, horaInicio) {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.get(`/${groupBaseRoute}/home?destino=${destino}&nota=${nota}&horaInicio=${horaInicio}`, {
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

  async GetUserGroups() {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    if(token === null){ 
      return;
    }

    let response = await ApiUnirota.get(`/${groupBaseRoute}/usuario/${userId}`, {
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

  async GetUserGroupsAsDriver() {
    const token = await AsyncStorage.getItem('token');

    let response = await ApiUnirota.get(`/${groupBaseRoute}/meusgrupos`, {
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