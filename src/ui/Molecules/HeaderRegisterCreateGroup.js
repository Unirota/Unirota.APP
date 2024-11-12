import { Component } from 'react'
import { View, Text, Image } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';

export default class HeaderRegisterCreateGroup extends Component {
    render() {
        const imageUrl = require('../../../assets/images/logoUnirota2.png')
        return (
            <View>
                <Image source={imageUrl} style={HeaderLoginStyle.icon}/>
                
                <Text style={[
                    HeaderLoginStyle.commonTextRegisterDriver,
                    UnirotaTitleStyles.whiteText,
                    HeaderLoginStyle.titleLogin]}>
                    Criar grupo de{' '}  
                    <Text style={[
                        HeaderLoginStyle.commonTextRegisterDriver,
                        UnirotaTitleStyles.blueText,
                        HeaderLoginStyle.titleLogin]}>
                        carona
                    </Text>
                </Text>

            </View>
        )
    }
}