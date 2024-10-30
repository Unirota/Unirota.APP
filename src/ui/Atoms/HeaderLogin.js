import { Component } from 'react'
import { View, Text, Image } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';

export default class HeaderLogin extends Component {
    render() {
        const imageUrl = require('./../../../assets/images/carro-azul-icone.png')
        return (
            <View>
                <Image source={imageUrl} style={HeaderLoginStyle.icon}/>
                
                <Text style={[
                    HeaderLoginStyle.commonTextLogin,
                    UnirotaTitleStyles.whiteText,
                    HeaderLoginStyle.titleLogin]}>
                    Entrar
                </Text>
                <Text style={[
                    HeaderLoginStyle.commonSubtitleLogin,
                    UnirotaTitleStyles.whiteText,
                    UnirotaTitleStyles.subtitleLogin,]}>
                    Bem vindo de volta!
                </Text>

            </View>
        )
    }
}