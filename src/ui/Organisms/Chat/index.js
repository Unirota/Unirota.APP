import { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import ChatHeader from '../../Molecules/ChatHeader';
import ChatContainer from '../../Molecules/ChatContainer';

export default class ChatPage extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#00112B', '#003A90']}
                style={{flex: 1}}
            >
                <ChatHeader/>     
                <ChatContainer/>
            </LinearGradient>
            
        )
    }
}