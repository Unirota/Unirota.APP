import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import RequestInfoButtonStyles from '../../styles/Atoms/RequestInfoButtonStyles'
import { LinearGradient } from 'expo-linear-gradient'

const InfoButton = ({ onPress }) => (
  <LinearGradient colors={['#008E86', '#007DF0']} style={RequestInfoButtonStyles.gradient}>
    <TouchableOpacity style={RequestInfoButtonStyles.button} onPress={onPress}>
      <Text style={RequestInfoButtonStyles.buttonText}>Informações</Text>
    </TouchableOpacity>
  </LinearGradient>
)

export default InfoButton

