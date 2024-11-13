import React, { Component } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BlueLineEditProfileStyles from '../../styles/Atoms/BlueLineEditProfileStyles';

export default class BlueLineEditProfile extends Component {
  render() {
    return (
      <View style={BlueLineEditProfileStyles.container}>
        <LinearGradient 
          colors={['#007DF0', '#00B5AA']}
          style={BlueLineEditProfileStyles.blueLine}
        />
      </View>
    );
  }
}