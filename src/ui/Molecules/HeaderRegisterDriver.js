import { Component } from 'react'
import { View, Text, Image } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderRegisterDriverStyles from '../../styles/Molecules/HeaderRegisterDriverStyles';

export default class HeaderRegisterDriver extends Component {
    render() {
        const imageUrl = require('../../../assets/images/logoUnirota2.png')
        return (
            <View>
                <Image source={imageUrl} style={HeaderRegisterDriverStyles.icon}/>
                
                <Text style={[
                    HeaderRegisterDriverStyles.commonTextRegisterDriver,
                    UnirotaTitleStyles.whiteText,
                    HeaderRegisterDriverStyles.titleLogin]}>
                    Quero ser{' '}  
                    <Text style={[
                        HeaderRegisterDriverStyles.commonTextRegisterDriver,
                        UnirotaTitleStyles.blueText,
                        HeaderRegisterDriverStyles.titleLogin]}>
                        Motorista
                    </Text>
                </Text>

            </View>
        )
    }
}