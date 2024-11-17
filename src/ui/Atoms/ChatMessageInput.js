import { Component } from 'react'
import { View, Text ,TextInput} from 'react-native'
import ChatMessageInputStyles from '../../styles/Atoms/ChatMessageInputStyles'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ChatMessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    handleSend = () => {
        if (this.state.message.trim()) {
            this.props.onSendMessage(this.state.message);
            this.setState({ message: '' });
        }
    }

    render() {
        return (
            <View style={ChatMessageInputStyles.messageInputContainer}>
                <TextInput
                    style={ChatMessageInputStyles.message}
                    placeholder='Mensagem...'
                    value={this.state.message}
                    onChangeText={(text) => this.setState({ message: text })}
                />
                <TouchableOpacity onPress={this.handleSend} style={ChatMessageInputStyles.sendButton}>
                    <Ionicons name="send" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        );
    }
}