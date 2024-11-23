import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Modal, FlatList } from 'react-native';
import { EditProfileStyles } from '../../styles/Molecules/EditProfileStyles';
import EditProfileService from '../../services/EditProfileService';
import BlueLineEditProfile from '../Atoms/BlueLineEditProfile';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
      modalVisible: false,
      states: [],
      selectedState: null,
      dateOfBirth: new Date(),
      showDatePicker: false,
      datePickerModalVisible: false,
    };
  }

  componentDidMount() {
    const states = EditProfileService.getStates();
    this.setState({ states });
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState(prevState => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  };

  openStatesModal = () => {
    this.setState({ modalVisible: true });
  };

  closeStatesModal = () => {
    this.setState({ modalVisible: false });
  };

  selectState = (state) => {
    this.setState({ selectedState: state, modalVisible: false });
  };

  showDatePicker = () => {
    this.setState({ showDatePicker: true });
  };

  onChangeDate = (event, selectedDate) => {
    this.setState({ showDatePicker: Platform.OS === 'ios' });
    if (selectedDate) {
      this.setState({ dateOfBirth: selectedDate });
    }
  };
  
  showDatePickerModal = () => {
    this.setState({ datePickerModalVisible: true });
  };

  hideDatePickerModal = () => {
    this.setState({ datePickerModalVisible: false });
  };

  onChangeDate = (event, selectedDate) => {
    if (selectedDate) {
      this.setState({ 
        dateOfBirth: selectedDate,
      });
    }
  };

  formatDate = (date) => {
    try {
      return date.toLocaleDateString('pt-BR');
    } catch (error) {
      return '';
    }
  };

  confirmDate = () => {
    this.setState({ datePickerModalVisible: false });
  };

  render() {
    return (
      <View style={EditProfileStyles.container}>
        <View style={EditProfileStyles.formContainer}>
          <Text style={EditProfileStyles.sectionTitle}>Dados pessoais</Text>

          <View style={EditProfileStyles.inputContainer}>
            <TextInput
              style={EditProfileStyles.input}
              placeholder="Nome completo"
              placeholderTextColor="#777"
            />
          </View>

          <View style={EditProfileStyles.inputContainer}>
            <TouchableOpacity 
              onPress={this.showDatePickerModal}
              style={EditProfileStyles.input}
            >
              <Text style={{ color: '#777' }}>
                {this.state.dateOfBirth ? this.formatDate(this.state.dateOfBirth) : 'Data de nascimento'}
              </Text>
            </TouchableOpacity>
          </View>

          <Modal
          transparent={true}
          visible={this.state.datePickerModalVisible}
          animationType="slide"
          onRequestClose={this.hideDatePickerModal}
        >
          <View style={EditProfileStyles.modalOverlayDate}>
            <View style={[EditProfileStyles.modalContentDate, { backgroundColor: '#FFFFFF' }]}>
              <View style={EditProfileStyles.modalHeaderDate}>
                <TouchableOpacity onPress={this.hideDatePickerModal}>
                  <Text style={EditProfileStyles.modalButtonDate}>Cancelar</Text>
                </TouchableOpacity>
                <Text style={[EditProfileStyles.modalTitleDate, { color: '#000000' }]}>
                  Selecione a data
                </Text>
                <TouchableOpacity onPress={this.confirmDate}>
                  <Text style={EditProfileStyles.modalButtonDate}>Confirmar</Text>
                </TouchableOpacity>
              </View>
              {Platform.OS === 'ios' ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.dateOfBirth}
                  mode="date"
                  display="spinner"
                  onChange={this.onChangeDate}
                  style={[EditProfileStyles.datePicker, { backgroundColor: '#FFFFFF' }]}
                  textColor="#000000"
                />
              ) : (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.dateOfBirth}
                  mode="date"
                  display="default"
                  onChange={this.onChangeDate}
                  style={EditProfileStyles.datePicker}
                />
              )}
            </View>
          </View>
        </Modal>

          <View style={EditProfileStyles.passwordContainer}>
            <TextInput
              style={EditProfileStyles.passwordInput}
              placeholder="Senha"
              placeholderTextColor="#777"
              secureTextEntry={!this.state.showPassword}
            />
            <TouchableOpacity
              style={EditProfileStyles.eyeIcon}
              onPress={this.togglePasswordVisibility}
            >
              <Text>👁️</Text>
            </TouchableOpacity>
          </View>

          <View style={EditProfileStyles.passwordContainer}>
            <TextInput
              style={EditProfileStyles.passwordInput}
              placeholder="Confirmar senha"
              placeholderTextColor="#777"
              secureTextEntry={!this.state.showConfirmPassword}
            />
            <TouchableOpacity
              style={EditProfileStyles.eyeIcon}
              onPress={this.toggleConfirmPasswordVisibility}
            >
              <Text>👁️</Text>
            </TouchableOpacity>
          </View>

          <BlueLineEditProfile />


          <Text style={EditProfileStyles.sectionTitle}>Endereço</Text>

          <View style={EditProfileStyles.inputContainer}>
            <TextInput
              style={EditProfileStyles.input}
              placeholder="Rua"
              placeholderTextColor="#777"
            />
          </View>

          <View style={EditProfileStyles.rowContainer}>
            <View style={[EditProfileStyles.halfInputContainer, { marginRight: -50 }]}>
              <TextInput
                style={EditProfileStyles.input}
                placeholder="Bairro"
                placeholderTextColor="#777"
              />
            </View>
            <View style={EditProfileStyles.halfInputContainer}>
              <TextInput
                style={[EditProfileStyles.input, { marginLeft: 50 }]}
                placeholder="Número"
                placeholderTextColor="#777"
              />
            </View>
          </View>

          <View style={EditProfileStyles.inputContainer}>
            <TextInput
              style={EditProfileStyles.input}
              placeholder="Complemento"
              placeholderTextColor="#777"
            />
          </View>

          <View style={EditProfileStyles.inputContainer}>
            <TextInput
              style={EditProfileStyles.input}
              placeholder="CEP"
              placeholderTextColor="#777"
            />
          </View>

          <View style={EditProfileStyles.rowContainer}>
            <View style={[EditProfileStyles.halfInputContainer, { marginRight: -50 }]}>
              <TextInput
                style={EditProfileStyles.input}
                placeholder="Cidade"
                placeholderTextColor="#777"
              />
            </View>
            <View style={EditProfileStyles.halfInputContainer}>
              <TouchableOpacity style={[EditProfileStyles.stateButton, { marginLeft: 50 }]} onPress={this.openStatesModal}>
                <Text style={EditProfileStyles.stateButtonText}>
                  {this.state.selectedState ? this.state.selectedState.name : 'Estado ▼'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <LinearGradient 
            colors={['#008E86', '#007DF0']} 
            style={EditProfileStyles.saveButton}
          >
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={EditProfileStyles.saveButtonText}>salvar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>


        <Modal
  transparent={true}
  visible={this.state.modalVisible}
  animationType="slide"
>
  <View style={EditProfileStyles.modalContainer}>
    <View style={EditProfileStyles.modalContent}>
      <FlatList
        data={this.state.states}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.selectState(item)}>
            <Text style={{ padding: 15 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={this.closeStatesModal} style={{ padding: 15, alignItems: 'center' }}>
        <Text style={{ color: 'blue' }}>Fechar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
      </View>
    );
  }
}