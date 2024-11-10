import React, { Component } from 'react'
import { View } from 'react-native'
import BlueLineRegisterStyles from '../../styles/Atoms/BlueLineRegisterStyles'
BlueLineRegisterStyles

export default class BlueLineRegister extends Component {
  render() {
    return (
      <View style={BlueLineRegisterStyles.container}>
        {/* Linha Azul */}
        <View style={BlueLineRegisterStyles.blueLineRegister} />
      </View>
    )
  }
}
