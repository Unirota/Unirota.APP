import { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import {SendInviteUsersStyles} from '../../styles/Molecules/SendInviteUsersStyles'
import Loading from '../Atoms/Loading';
import GroupService from '../../services/GroupService';
import InviteService from '../../services/InviteService';

export default class SendInviteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: null,
      email: '',
      groups: null,
    };

    this.EnviarConvite = this.EnviarConvite.bind(this);
  }
  
  async ObterDados() {
    const dados = await GroupService.GetUserGroupsAsDriver();
    return dados.data;
  }

  async EnviarConvite(selectedGroup, email){
    const dados = await InviteService.SendInvite(selectedGroup, email)
    if(dados.data !== null && dados.data !== 0) {
      this.props.navigation?.replace('GroupListPage')
    } else {
      Alert.alert('Erro ao enviar convite', '', [
        {
          text: 'OK',
          onPress: () => {},
          style: 'cancel'
        }
      ])
    }
  }

  async componentDidMount() {
    const dadosGrupos = await this.ObterDados();

    if(dadosGrupos !== null) {
      this.setState({groups: dadosGrupos});
    }

    if(dadosGrupos.length === 1) {
      this.setState({selectedGroup: dadosGrupos[0].id})
    }
  }

  render() {
    const { selectedGroup, email, groups } = this.state;

    if(groups === null) {
      return(
        <View style={SendInviteUsersStyles.container}>
          <Text style={SendInviteUsersStyles.title}>
            Convidar para <Text style={SendInviteUsersStyles.titleHighlight}>Grupo</Text>
          </Text>
          <Loading/>
        </View>
      )
    }

    if(groups.length === 0) {
      return(
        <View style={SendInviteUsersStyles.container}>
          <Text style={SendInviteUsersStyles.title}>
            Convidar para <Text style={SendInviteUsersStyles.titleHighlight}>Grupo</Text>
          </Text>
          <Text>
            Usuário não possui nenhum grupo criado.
          </Text>
        </View>
      )
    }

    return (
      <View style={SendInviteUsersStyles.container}>
    
        {/* Título */}
        <Text style={SendInviteUsersStyles.title}>
          Convidar para <Text style={SendInviteUsersStyles.titleHighlight}>Grupo</Text>
        </Text>

        {/* Dropdown para grupos */}
        <View style={SendInviteUsersStyles.dropdownContainer}>
          <Picker
            selectedValue={selectedGroup}
            onValueChange={(itemValue) => this.setState({ selectedGroup: itemValue })}
            style={SendInviteUsersStyles.picker}
          >
            {groups.map((group) => (
              <Picker.Item key={group.id} label={group.nome} value={group.id} />
            ))}
          </Picker>
        </View>

        {/* Campo de email */}
        <TextInput
          style={SendInviteUsersStyles.input}
          placeholder="Email convidado"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => this.setState({ email: text })}
        />

        {/* Botão de enviar convite */}
        <TouchableOpacity style={SendInviteUsersStyles.button} onPress={() => this.EnviarConvite(this.state.selectedGroup, this.state.email)}>
          <Text style={SendInviteUsersStyles.buttonText}>Convidar</Text>
        </TouchableOpacity>
      </View>
    );
  }
};