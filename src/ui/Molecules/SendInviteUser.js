import { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import {SendInviteUsersStyles} from '../../styles/Molecules/SendInviteUsersStyles'


export default class SendInviteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: null,
      email: '',
      groups: [
        { id: 1, nome: 'grupo muito legal' },
        { id: 2, nome: 'grupo da uem' },
      ],
    };
  }

  handleSendInvite = () => {
    const { selectedGroup, email } = this.state;
    console.log('Grupo ID:', selectedGroup);
    console.log('Email:', email);
    // Lógica de envio aqui
  };

  render() {
    const { selectedGroup, email, groups } = this.state;

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
        <TouchableOpacity style={SendInviteUsersStyles.button} onPress={this.handleSendInvite}>
          <Text style={SendInviteUsersStyles.buttonText}>Convidar</Text>
        </TouchableOpacity>
      </View>
    );
  }
};