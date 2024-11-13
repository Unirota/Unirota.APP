import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { EditProfileAvatarStyles } from '../../styles/Atoms/EditProfileAvatarStyles';

export default class EditProfileAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUri: null,
    };
  }

  handleAvatarPress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Acesso negado", "Você precisa permitir o acesso à galeria!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      const newAvatarUri = await this.saveImage(imageUri);
      if (newAvatarUri) {
        this.setState({ avatarUri: newAvatarUri });
      }
    }
  };

  saveImage = async (uri) => {
    if (!uri) {
      console.error("A URI da imagem é indefinida");
      return null; 
    }
  
    try {
      const fileName = uri.split('/').pop();
      const newUri = `${FileSystem.documentDirectory}${fileName}`;
  
      await FileSystem.copyAsync({
        from: uri,
        to: newUri,
      });
  
      return newUri; 
    } catch (error) {
      console.error("Erro ao salvar a imagem:", error);
      return null;
    }
  };

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
    );
  }
}