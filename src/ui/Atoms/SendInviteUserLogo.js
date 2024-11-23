import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { SendInviteUserLogoStyles } from '../../styles/Atoms/SendInviteUserLogoStyles';

export default class SendEnviteUserLogo extends Component {
    render() {
        return (
            <View style={SendInviteUserLogoStyles.container}>
                <Image
                    source={require('../../../assets/images/logo_unirota.png')}
                    style={SendInviteUserLogoStyles.avatar}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

