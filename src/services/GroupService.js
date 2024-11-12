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
}