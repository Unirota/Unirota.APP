import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import InviteInfoButtonStyles from '../../styles/Atoms/InviteInfoButtonStyles'
import { LinearGradient } from 'expo-linear-gradient'

const InfoButton = ({ onPress }) => (
  <LinearGradient colors={['#008E86', '#007DF0']} style={InviteInfoButtonStyles.gradient}>
    <TouchableOpacity style={InviteInfoButtonStyles.button} onPress={onPress}>
      <Text style={InviteInfoButtonStyles.buttonText}>Informações</Text>
    </TouchableOpacity>
  </LinearGradient>
)

export default InfoButton

