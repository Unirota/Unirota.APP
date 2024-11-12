import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { EditProfileTitleStyles } from '../../styles/Atoms/EditProfileTitleStyles'

export default class EditProfileTitle extends Component {
  render() {
    return (
      <View style={EditProfileTitleStyles.container}>
        {/* <Image
          source={require('../../assets/discord-icon.png')}
          style={EditProfileTitleStyles.icon}
        /> */}
        <Text style={EditProfileTitleStyles.title}>Editar Perfil</Text>
      </View>
    )
  }
}
