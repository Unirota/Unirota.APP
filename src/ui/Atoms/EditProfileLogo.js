import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { EditProfileLogoStyles } from '../../styles/Atoms/EditProfileLogoStyles';

export default class EditProfileLogo extends Component {
    render() {
        return (
            <View style={EditProfileLogoStyles.container}>
                <Image
                    source={require('../../../assets/images/logo_unirota.png')}
                    style={EditProfileLogoStyles.avatar}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

