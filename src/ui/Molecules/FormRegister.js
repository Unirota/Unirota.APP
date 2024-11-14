import { Component } from 'react'
import { FlatList } from 'react-native'
import { View, Alert } from 'react-native'
import PhotoUserRegister from '../Atoms/PhotoUserRegister';
import NameRegisterInput from '../Atoms/NameRegisterInput';
import CPFRegisterInput from '../Atoms/CPFRegisterInput';
import DateRegisterInput from '../Atoms/DateRegisterInput';
import EmailInputRegister from '../Atoms/EmailInputRegister';
import SenhaInputRegister from '../Atoms/SenhaInputRegister';
import SenhaConfirmInputRegister from '../Atoms/SenhaConfirmInputRegister';
import styles from '../../styles/Organisms/Home/styles'
import HeaderRegister from './HeaderRegister';
import BlueLineRegister from '../Atoms/BlueLineRegister';
import AdressRegisterInput from '../Atoms/AdressRegisterInput';
import NeighborhoodRegisterInput from '../Atoms/NeighborhoodRegisterInput';
import ComplementRegisterInput from '../Atoms/ComplementRegisterInput';
import CEPRegisterInput from '../Atoms/CEPRegisterInput';
import CityRegisterInput from '../Atoms/CityRegisterInput';
import ButtonRegister from '../Atoms/ButtonRegister';
import ButtonHaveAccount from '../Atoms/ButtonHaveAccount';
import RegisterPageService from '../../services/RegisterPageService';

export default class FormRegister extends Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this)
        this.handleCPFChange = this.handleCPFChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleStreetChange = this.handleStreetChange.bind(this)
        this.handleNeighborhoodChange = this.handleNeighborhoodChange.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleComplementChange = this.handleComplementChange.bind(this)
        this.handleCepChange = this.handleCepChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.state = {
            nome: "",
            email: "",
            senha: "",
            senhaConfirmar: "",
            cpf: "",
            dataNascimento: new Date().toISOString(),
            endereco: {
                logradouro: "",
                bairro: "",
                numero: 0,
                complemento: "",
                cep: "",
                cidade: "",
                uf: ""
            }
        }
    }

    async register() {
        if(this.state.senha !== this.state.senhaConfirmar){
            Alert.alert("Senhas diferentes!", "As senhas inseridas divergem, por favor insira senhas iguais.")
            return;
        }
        let user = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            cpf: this.state.cpf,
            dataNascimento: this.state.dataNascimento,
            endereco: this.state.endereco
        }
        const response = await RegisterPageService.Register(user)
        if(response)
            this.props.goToLogin()
    }

    handleNameChange = (nome) => {
        this.setState({ nome });
    };

    handleEmailChange = (email) => {
        this.setState({ email })
    }

    handlePasswordChange = (senha) => {
        this.setState({ senha })
    }

    handlePasswordConfirmChange = (senhaConfirmar) => {
        this.setState({ senhaConfirmar })
    }

    handleCPFChange = (cpf) => {
        this.setState({ cpf })
    }

    handleDateChange = (dataNascimento) => {
        this.setState({ dataNascimento })
    }

    handleStreetChange = (logradouro) => {
        let endereco = this.state.endereco
        endereco.logradouro = logradouro
        this.setState({ endereco })
    }

    handleNeighborhoodChange = (bairro) => {
        let endereco = this.state.endereco
        endereco.bairro = bairro
        this.setState({ endereco })
    }

    handleNumberChange = (numero) => {
        let endereco = this.state.endereco
        endereco.numero = numero
        this.setState({ endereco })
    }

    handleComplementChange = (complemento) => {
        let endereco = this.state.endereco
        endereco.complemento = complemento
        this.setState({ endereco })
    }

    handleCepChange = (cep) => {
        let endereco = this.state.endereco
        endereco.cep = cep
        this.setState({ endereco })
    }

    handleCityChange = (cidade) => {
        let endereco = this.state.endereco
        endereco.cidade = cidade
        this.setState({ endereco })
    }

    handleStateChange = (uf) => {
        let endereco = this.state.endereco
        endereco.uf = uf
        this.setState({ endereco })
    }

    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <HeaderRegister /> },
            // { id: '2', component: <PhotoUserRegister /> },
            { id: '3', component: <NameRegisterInput onChangeText={this.handleNameChange} /> },
            { id: '4', component: <CPFRegisterInput onChangeText={this.handleCPFChange} /> },
            { id: '5', component: <DateRegisterInput onChangeText={this.handleDateChange} /> },
            { id: '6', component: <EmailInputRegister onChangeText={this.handleEmailChange} /> },
            { id: '7', component: <SenhaInputRegister onChangeText={this.handlePasswordChange} /> },
            { id: '8', component: <SenhaConfirmInputRegister onChangeText={this.handlePasswordConfirmChange} /> },
            { id: '9', component: <BlueLineRegister /> },
            { id: '10', component: <AdressRegisterInput onChangeText={this.handleStreetChange} /> },
            { id: '11', component: <NeighborhoodRegisterInput onChangeTextNeighborhood={this.handleNeighborhoodChange} onChangeTextNumber={this.handleNumberChange} /> },
            { id: '12', component: <ComplementRegisterInput onChangeText={this.handleComplementChange} /> },
            { id: '13', component: <CEPRegisterInput onChangeText={this.handleCepChange} /> },
            { id: '14', component: <CityRegisterInput onChangeTextCity={this.handleCityChange} onChangeTextState={this.handleStateChange} /> },
            { id: '15', component: <ButtonRegister onPress={this.register} /> },
            { id: '16', component: <ButtonHaveAccount onPress={this.props.goToLogin} /> },

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