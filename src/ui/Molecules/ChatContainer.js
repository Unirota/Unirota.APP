import { Component } from 'react'
import { View, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import ChatContainerStyles from '../../styles/Molecules/ChatContainerStyles'
import ChatMessageInput from '../Atoms/ChatMessageInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ChatService from '../../services/ChatService'
import ChatMessageSent from '../Atoms/ChatMessageSent'
import ChatMessageReceived from '../Atoms/ChatMessageReceived'

export default class ChatContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientId: 123
        };
    }

    renderMessage(message) {
        if (message.usuarioId === this.state.clientId) {
            return (
                <ChatMessageSent message={message}/>
            )
        }
        return (
            <ChatMessageReceived message={message}/>
        )
    }

    render() {
        messages = ChatService.getMessages()
        return (
                
            <KeyboardAvoidingView style={ChatContainerStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={ChatContainerStyles.chatContainer}>
                    <FlatList
                        data={messages}
                        renderItem={({ item }) => this.renderMessage(item)}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={ChatContainerStyles.inputContainer}>
                    <ChatMessageInput />
                </View>
                
            </KeyboardAvoidingView>
            

        )
    }
    

}
