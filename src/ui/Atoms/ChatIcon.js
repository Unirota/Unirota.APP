import { Component } from 'react'
import { View, Image } from 'react-native'
import ChatIconStyles from '../../styles/Atoms/ChatIconStyles';

    
export default class ChatIcon extends Component {
    render() {
        const  imageUrl  = require('./../../../assets/images/ChatImage.jpeg')
        return (
            <View>
                <Image
                    source={imageUrl}
                    style={ChatIconStyles.image}
                    resizeMode="cover"
                />
            </View>
        )
    }
}