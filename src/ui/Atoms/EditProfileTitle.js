import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { EditProfileTitleStyles } from '../../styles/Atoms/EditProfileTitleStyles'


export default class EditProfileTitle extends Component {
  render() {
    return (
      <View style={EditProfileTitleStyles.container}>
        <View>
          <Text style={EditProfileTitleStyles.firstTitle}>Editar</Text>
        </View>
        <View>
          <Text style={EditProfileTitleStyles.secondTitle}>Perfil</Text>
        </View>
      </View>
    )
  }
}