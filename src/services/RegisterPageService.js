import ApiUnirota from "../api/ApiUnirota"
import AlertAsync from "react-native-alert-async"
import { Alert } from "react-native"

export default new class RegisterPageService{
    async Register(user){
        const response = await ApiUnirota.post("/Usuario", user)
        .then((response) => {
            return true
        })
        .catch( async (error) => {
            if(error.response){

                if(error.response.status === 400){
                    let errorInfo = error.response.data.errors
                    let index = Object.keys(errorInfo)[0]
                    console.log(errorInfo[index][0])
                    Alert.alert('Erro ao realizar cadastro.',errorInfo[index][0])
                    return
                }
                console.log(error.response.status)
            }
            console.log(error)
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