import React, { Component } from 'react'
import { View } from 'react-native'
import BlueLineStyles from '../../styles/Atoms/BlueLineStyles'

export default class BlueLine extends Component {
  render() {
    return (
      <View style={BlueLineStyles.container}>
        {/* Linha Azul */}
        <View style={BlueLineStyles.blueLine} />
      </View>
    )
  }
}
