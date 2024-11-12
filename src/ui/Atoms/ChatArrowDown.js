import { Component } from 'react'
import { View, Image } from 'react-native'
import ChatVectorStyles from '../../styles/Atoms/ChatArrowDownStyles';

export default class ChatArrowDown extends Component {
    render() {
        const  imageUrl  = require('../../../assets/images/ArrowDownImage.png')
        return (
            <View style={ChatVectorStyles.container}>
                <Image
                    source={imageUrl}
                    style={ChatVectorStyles.image}
                    resizeMode="cover"
                />
            </View>
        )
    }
}