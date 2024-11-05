import ApiUnirota from "../api/ApiUnirota"
import AsyncStorage from "@react-native-async-storage/async-storage"
export default new class AppService {
    async AutomaticLogin() {
        const email = await AsyncStorage.getItem('email')
        const password = await AsyncStorage.getItem('password')
        if(!email || !password)
            return false
        let response = await ApiUnirota.post("/Auth", {
            email: email,
            senha: password
        }).then(async response => {
            await AsyncStorage.setItem('token', `Bearer ${response.data.accessToken}`)
            return true
        }).catch(async (error) => {
            console.log(`Login error: ${error.message}`)
            return false
        })
        return response
    }
}