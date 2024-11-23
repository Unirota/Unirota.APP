import { Component } from 'react'
import { View, Text } from 'react-native'
import ChatMessageReceivedStyles from '../../styles/Atoms/ChatMessageReceivedStyles'


export default class ChatMessageReceived extends Component {
    render() {
        return (
            <View>
                <Text style={{color: 'black'}}>
                    {this.props.message.nomeUsuario}
                </Text>
                <View style={ChatMessageReceivedStyles.messageReceived}>
                    <Text style={{color: 'black'}}>
                        {this.props.message.conteudo}
                
                    </Text>
                </View>
            </View>
        )
    }
}