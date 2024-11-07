import AlertAsync from "react-native-alert-async";
import ApiUnirota from "../api/ApiUnirota"
import { BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userBaseRoute = 'usuario';

export default new class UserService {
  async GetUserById(id) {
    const token = await AsyncStorage.getItem('token');
    let response = await ApiUnirota.get(`/${userBaseRoute}/${id}`, {
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