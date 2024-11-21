import React, { Component } from 'react'
import GreyLineInfoGroupModalStyles from '../../styles/Atoms/GreyLineInfoGroupModalStyles'
import { LinearGradient } from 'expo-linear-gradient';


export default class GreyLineInfoGroupModal extends Component {
  render() {
    return (
      <LinearGradient
        style={GreyLineInfoGroupModalStyles.blueLine}
        colors={['grey', 'grey', 'grey']}
        locations={[0.0, 0.5, 1.0]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    )
  }
}
