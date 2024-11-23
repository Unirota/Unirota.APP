import ApiUnirota from "../api/ApiUnirota";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default new class RegisterGroupService{
    async Register(group){
        const token = await AsyncStorage.getItem('token');
        return ApiUnirota.post('/Grupo', {
            nome: group.nome,
            passageiroLimite: group.passageiroLimite,
            descricao: group.descricao,
            horaInicio: group.horaInicio,
            ativo: group.ativo,
            destino: group.destino
        }, { headers: { 'Authorization': token } })
        .then((response) => {
            return true
        })
        .catch(async (error) => {
            console.log(error.response.data)
            return false
        })
    }
}