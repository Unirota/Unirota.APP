import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { FaqAvatarStyles } from '../../styles/Atoms/FaqAvatarStyles';


export default class FaqAvatar extends Component {
    render() {
        return (
            <View style={FaqAvatarStyles.container}>
                <Image
                    source={require('../../../assets/images/logo_unirota.png')}
                    style={FaqAvatarStyles.avatar}
                    resizeMode="contain"
                />
            </View>
        );
    }
}

