import { Component } from 'react'
import { View, Text, Image } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import PhotoUserRegister from '../Atoms/PhotoUserRegister';

export default class HeaderRegister extends Component {
    render() {
        const imageUrl = require('./../../../assets/images/carro-azul-icone.png')
        return (
            <View>
                <Image source={imageUrl} style={HeaderLoginStyle.icon}/>
                
                <Text style={[
                    HeaderLoginStyle.commonTextLogin,
                    UnirotaTitleStyles.whiteText,
                    HeaderLoginStyle.titleLogin]}>
                    Cadastrar
                </Text>
                <Text style={[
                    HeaderLoginStyle.commonSubtitleLogin,
                    UnirotaTitleStyles.whiteText,
                    HeaderLoginStyle.subtitleLogin,]}>
                    Bem vindo ao Unirota!
                </Text>

            </View>
        )
    }
}