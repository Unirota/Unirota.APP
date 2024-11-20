import ApiUnirota from "../api/ApiUnirota";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default new class RegisterDriverService {
    async Register(habilitacao) {
        const token = await AsyncStorage.getItem('token');
        return ApiUnirota.put("/Usuario/cadastroMotorista", {
            habilitacao: habilitacao
        }, {
            headers: {
                'Authorization': token,
            }
        })
            .then((response) => {
                return true
            })
            .catch(async (error) => {
                return false
            })
    }

    async VehicleRegister(vehicle) {
        const token = await AsyncStorage.getItem('token')
        return ApiUnirota.post('/Veiculo', {
            placa: vehicle.placa,
            descricao: vehicle.descricao,
            carroceria: vehicle.carroceria,
            cor: vehicle.cor
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