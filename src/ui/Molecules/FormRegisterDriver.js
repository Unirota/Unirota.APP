import { Component } from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { Alert } from 'react-native';
import styles from '../../styles/Organisms/Home/styles'
import HeaderRegisterDriver from './HeaderRegisterDriver';
import NumberLicenseInput from '../Atoms/NumberLicenseInput';
import CarNumberInput from '../Atoms/CarNumberInput';
import CarColorInput from '../Atoms/CarColorInput';
import TypeCarInput from '../Atoms/TypeCarInput';
import DescriptionDriverInput from '../Atoms/DescriptionDriverInput';
import ButtonRegisterDriver from '../Atoms/ButtonRegisterDriver';
import RegisterDriverService from '../../services/RegisterDriverService';

export default class FormRegisterDriver extends Component {
    constructor(props) {
        super(props)
        this.state = {
            habilitacao: "",
            placa: "",
            cor: "",
            carroceria: "",
            descricao: ""
        }
        this.handleHabilitacaoChange = this.handleHabilitacaoChange.bind(this)
        this.handlePlacaChange = this.handlePlacaChange.bind(this)
        this.handleCorChange = this.handleCorChange.bind(this)
        this.handleCarroceriaChange = this.handleCarroceriaChange.bind(this)
        this.handleDescricaoChange = this.handleDescricaoChange.bind(this)
        this.registerDriver = this.registerDriver.bind(this)
    }

    handleHabilitacaoChange = (habilitacao) => {
        this.setState({ habilitacao });
    };

    handlePlacaChange = (placa) => {
        this.setState({ placa });
    };

    handleCorChange = (cor) => {
        this.setState({ cor })
    }

    handleCarroceriaChange = (carroceria) => {
        this.setState({ carroceria })
    }

    handleDescricaoChange = (descricao) => {
        this.setState({ descricao })
    }

    async registerDriver() {
        let habilitacao = this.state.habilitacao
        if (habilitacao === '' || habilitacao === null || habilitacao === undefined) {
            Alert.alert("Alerta!", "Campo habilitação não pode estar vazio.")
            return;
        }
        let vehicle = {
            placa: this.state.placa,
            cor: this.state.cor,
            carroceria: this.state.carroceria,
            descricao: this.state.descricao
        }
        let vehicleResult = await RegisterDriverService.VehicleRegister(vehicle)
        if(vehicleResult){
            var result = await RegisterDriverService.Register(habilitacao)
            if(result){
                Alert.alert("Usuario cadastrado como motorista com sucesso!", "por favor faça login novamente.")
                this.props.navigation.replace("LoginPage")
                return;
            }
        }
        Alert.alert("Algo de errado aconteceu ao realizar seu cadastro.", "tente se cadastrar novamente em instantes!")
    }

    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <HeaderRegisterDriver /> },
            { id: '2', component: <NumberLicenseInput onChangeText={this.handleHabilitacaoChange} /> },
            { id: '3', component: <CarNumberInput onChangeText={this.handlePlacaChange} /> },
            { id: '4', component: <CarColorInput onChangeText={this.handleCorChange} /> },
            { id: '5', component: <TypeCarInput onChangeText={this.handleCarroceriaChange} /> },
            { id: '6', component: <DescriptionDriverInput onChangeText={this.handleDescricaoChange} /> },
            { id: '7', component: <ButtonRegisterDriver onPress={this.registerDriver} /> },

        ];

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={Components}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.scrollContainer}
                />

            </View>
        );
    }
}