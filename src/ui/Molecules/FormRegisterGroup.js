import { Component } from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { Alert } from 'react-native';
import PhotoUserRegister from '../Atoms/PhotoUserRegister';
import styles from '../../styles/Organisms/Home/styles'
import NameGroupDriverInput from '../Atoms/NameGroupDriverInput';
import ButtonRegisterGroup from '../Atoms/ButtonRegisterGroup';
import HeaderRegisterCreateGroup from './HeaderRegisterCreateGroup';
import QuantityPeopleGroup from '../Atoms/QuantityPeopleDriverInput';
import DestinyGroupInput from '../Atoms/DestinyDriverInput';
import DescriptionGroupInput from '../Atoms/DescriptionGroupInput';
import HourGroupInput from '../Atoms/HourDriverInput';
import RegisterGroupService from '../../services/RegisterGroupService';


export default class FormRegisterGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            passageiroLimite: 0,
            descricao: "",
            horaInicio: "",
            ativo: true,
            destino: ""
        }
        this.handleNomeChange = this.handleNomeChange.bind(this)
        this.handleLimiteChange = this.handleLimiteChange.bind(this)
        this.handleDescricaoChange = this.handleDescricaoChange.bind(this)
        this.handleHoraInicioChange = this.handleHoraInicioChange.bind(this)
        this.handleDestinoChange = this.handleDestinoChange.bind(this)
        this.registerGroup = this.registerGroup.bind(this)
    }

    handleNomeChange = (nome) => {
        console.log(nome)
        this.setState({ nome });
    };

    handleLimiteChange = (passageiroLimite) => {
        this.setState({ passageiroLimite })
        console.log(passageiroLimite)
    }

    handleDescricaoChange = (descricao) => {
        this.setState({ descricao })
    }

    handleHoraInicioChange = (horaInicio) => {
        this.setState({ horaInicio })
    }

    handleDestinoChange = (destino) => {
        this.setState({ destino })
    }

    registerGroup() {
        let nome = this.state.nome
        if (nome === undefined || nome === "" || nome.trim().length === 0) {
            Alert.alert("Campo invalido", "O campo nome não pode estar vazio.")
            return;
        }

        let passageiroLimite = this.state.passageiroLimite
        if (passageiroLimite === undefined || passageiroLimite === "") {
            Alert.alert("Campo invalido", "O campo quantidade máxima de pessoas não pode estar vazio.")
            return;
        }

        if (passageiroLimite > 4) {
            Alert.alert("Campo inválido", "O campo quantidade máxima de pessoas não pode ser superior a 4.")
            return
        }

        let horaInicio = this.state.horaInicio
        if (horaInicio === undefined || horaInicio === "") {
            Alert.alert("Campo invalido", "O campo Hora de inicio não pode estar vazio.")
            return;
        }

        let destino = this.state.destino
        if (destino === undefined || destino === ""){
            Alert.alert("Campo inválido", "O campo destino não pode estar vazio.")
        }

        let group = {
            nome: nome,
            passageiroLimite: passageiroLimite,
            descricao: this.state.descricao,
            imagemUrl: " ",
            horaInicio: horaInicio,
            ativo: this.state.ativo,
            destino: destino
        }
        let result = RegisterGroupService.Register(group)
        if (result) {
            Alert.alert("Grupo cadastrado com sucesso!", "O seu grupo foi cadastrado com sucesso!")
            this.props.navigation.replace("HomePage")
            return;
        }
        Alert.alert("Houve um problema ao cadastrar o grupo", "Por favor tente novamente em instantes")
    }

    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <HeaderRegisterCreateGroup /> },
            // { id: '2', component: <PhotoUserRegister /> },
            { id: '3', component: <NameGroupDriverInput onChangeText={this.handleNomeChange} /> },
            { id: '4', component: <QuantityPeopleGroup onChangeText={this.handleLimiteChange} /> },
            { id: '5', component: <HourGroupInput onChangeText={this.handleHoraInicioChange} /> },
            { id: '6', component: <DestinyGroupInput onChangeText={this.handleDestinoChange} /> },
            { id: '7', component: <DescriptionGroupInput onChangeText={this.handleDescricaoChange} /> },
            { id: '8', component: <ButtonRegisterGroup onPress={this.registerGroup} /> },

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