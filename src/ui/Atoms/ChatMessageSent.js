import { Component } from 'react'
import { View, Text, TextInput} from 'react-native'
import ChatMessageSentStyles from '../../styles/Atoms/ChatMessageSentStyles'


export default class ChatMessageSent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={ChatMessageSentStyles.messageSent}>
                <Text style={{color: 'white'}}>
                    {this.props.message.conteudo}
                </Text>
            </View>
        )
    }
}