import { Component } from 'react'
import { View, Text ,TextInput} from 'react-native'
import ChatMessageInputStyles from '../../styles/Atoms/ChatMessageInputStyles'

export default class ChatMessageInput extends Component {
    render() {
        return(
            <View>
                <TextInput
                    style={ChatMessageInputStyles.message}
                    placeholder='Mensagem...'
                />
            </View>
        )
    }
}