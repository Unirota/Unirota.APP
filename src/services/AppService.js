import ApiUnirota from "../api/ApiUnirota"
import AsyncStorage from "@react-native-async-storage/async-storage"
import AlertAsync from "react-native-alert-async"
import { BackHandler } from "react-native"
export default new class AppService {
    async Login(email, password) {
        console.log(1)
        let response = await ApiUnirota.post("/Auth", {
            email: email,
            senha: password
        }).then(async response => {
            console.log(2)
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem('password', password)
            ApiUnirota.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            await AsyncStorage.setItem('userId', response.data.usuario.id.toString())
            return true
        }).catch(async (error) => {
            console.log(`Login error: ${error.message}`)
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