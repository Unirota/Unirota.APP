import { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import ChatHeader from '../../Molecules/ChatHeader';
import ChatContainer from '../../Molecules/ChatContainer';
import NavigationFooter from '../../Molecules/NavigationFooter';

export default class ChatPage extends Component {
    render() {
        const {id, nome} = this.props.route.params;
        return (
            <LinearGradient
                colors={['#00112B', '#003A90']}
                style={{flex: 1}}
            >
                <ChatHeader nome={nome}/>
                <ChatContainer grupoId={id}/>
            </LinearGradient>
            
        )
    }
}