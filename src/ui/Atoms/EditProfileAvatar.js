import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { EditProfileAvatarStyles } from '../../styles/Atoms/EditProfileAvatarStyles'

export default class EditProfileAvatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarUri: null,
    }
  }

  handleAvatarPress = () => {
    console.log('Avatar pressed')
  }

  render() {
    return (
      <View style={EditProfileAvatarStyles.container}>
        <TouchableOpacity
          style={EditProfileAvatarStyles.avatarContainer}
          onPress={this.handleAvatarPress}
        >
          <View style={EditProfileAvatarStyles.avatar}>
            {this.state.avatarUri ? (
              <Image
                source={{ uri: this.state.avatarUri }}
                style={EditProfileAvatarStyles.avatarImage}
              />
            ) : (
              <Image
                source={require('../../../assets/images/camera.png')}
                style={EditProfileAvatarStyles.cameraIcon}
              />
            )}
          </View>
          <View style={EditProfileAvatarStyles.badge}>
            <Text style={EditProfileAvatarStyles.badgeText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
