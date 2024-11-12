import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { EditProfileStyles } from '../../styles/Molecules/EditProfileStyles'

export default class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
    }
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }))
  }

  toggleConfirmPasswordVisibility = () => {
    this.setState(prevState => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }))
  }

  render() {
    return (
      <View style={EditProfileStyles.container}>
        {/* Back Button */}
        <TouchableOpacity style={EditProfileStyles.backButton}>
          <Text style={EditProfileStyles.backIcon}>{'<'}</Text>
        </TouchableOpacity>

        {/* Form Container */}
        <View style={EditProfileStyles.formContainer}>
          {/* Dados Pessoais Section */}
          <Text style={EditProfileStyles.sectionTitle}>Dados pessoais</Text>

          <View style={EditProfileStyles.inputContainer}>
            <TextInput
              style={EditProfileStyles.input}
              placeholder="Nome completo"
              placeholderTextColor="#777"
            />
          </View>

          <View style={EditProfileStyles.inputContainer}>
            <TextInput
              style={EditProfileStyles.input}
              placeholder="Data de nascimento"
              placeholderTextColor="#777"
            />
          </View>

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

          {/* Endereço Section */}
          <Text style={EditProfileStyles.sectionTitle}>Endereço</Text>

          <View style={EditProfileStyles.inputContainer}>
            <TextInput
              style={EditProfileStyles.input}
              placeholder="Rua"
              placeholderTextColor="#777"
            />
          </View>

          <View style={EditProfileStyles.rowContainer}>
            <View style={EditProfileStyles.halfInputContainer}>
              <TextInput
                style={EditProfileStyles.input}
                placeholder="Bairro"
                placeholderTextColor="#777"
              />
            </View>
            <View style={EditProfileStyles.halfInputContainer}>
              <TextInput
                style={EditProfileStyles.input}
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
            <View style={EditProfileStyles.halfInputContainer}>
              <TextInput
                style={EditProfileStyles.input}
                placeholder="Cidade"
                placeholderTextColor="#777"
              />
            </View>
            <View style={EditProfileStyles.halfInputContainer}>
              <TouchableOpacity style={EditProfileStyles.stateButton}>
                <Text style={EditProfileStyles.stateButtonText}>Estado ▼</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={EditProfileStyles.saveButton}>
            <Text style={EditProfileStyles.saveButtonText}>salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
