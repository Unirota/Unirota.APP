import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiUnirota from "../api/ApiUnirota"
import { Alert } from "react-native"
import AlertAsync from "react-native-alert-async"

export default new class AppService {

    async Login(email, password) {
        let response = await ApiUnirota.post("/Auth", {
            email: email,
            senha: password
        }).then(async response => {
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem('password', password)
            await AsyncStorage.setItem('userId', response.data.usuario.id.toString())
            await AsyncStorage.setItem('token', `Bearer ${response.data.accessToken}`)
            return true
        }).catch(async (error) => {
            if(error.response){

                if(error.response.status === 400){
                    Alert.alert('Erro ao fazer login.', 'Credenciais inválidas.')
                    return
                }

            }
            await AlertAsync(
                'Erro',
                'Não foi possível se comunicar com o servidor.',
                [
                    { text: 'Ok', onPress: () => BackHandler.exitApp() },
                ],
                {
                    cancelable: false
                },
            );
        })
        return response
    }

}