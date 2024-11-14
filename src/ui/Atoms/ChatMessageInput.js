import { Component } from 'react'
import { View, Text ,TextInput} from 'react-native'
import ChatMessageInputStyles from '../../styles/Atoms/ChatMessageInputStyles'
import { TouchableOpacity } from 'react-native';
import ButtonLoginStyles from '../../styles/Atoms/ButtonLoginStyles';

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
            this.setState({ message: '' }); // Reset the message after sending
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    style={ChatMessageInputStyles.message}
                    placeholder='Mensagem...'
                    value={this.state.message} // Bind TextInput value to state
                    onChangeText={(text) => this.setState({ message: text })} // Update state on text change
                />
                <TouchableOpacity onPress={this.handleSend}>
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
        );
    }
}