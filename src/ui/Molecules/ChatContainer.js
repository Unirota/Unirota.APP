import { Component } from 'react'
import { View, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import ChatContainerStyles from '../../styles/Molecules/ChatContainerStyles'
import ChatMessageInput from '../Atoms/ChatMessageInput'
import ChatService from '../../services/ChatService'
import ChatMessageSent from '../Atoms/ChatMessageSent'
import ChatMessageReceived from '../Atoms/ChatMessageReceived'
import * as signalR from '@microsoft/signalr';
import Loading from '../Atoms/Loading'
import MensagemService from '../../services/MensagemService'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class ChatContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grupoId: 3,
            messages: null,
            usuarioId: 0
        };

        this.connection = null;
    }

    async ObterTodasMensagens(grupoId) {
        const dados = await MensagemService.ObterMensagens(grupoId);
        return dados.data;
    }

    async EnviarMensagem(mensagem, grupoId) {
        const dados = await MensagemService.SendMessage(mensagem, grupoId);
        return dados.data;
    }

    async componentDidMount() {
        const usuarioId = await AsyncStorage.getItem('userId');
        this.setState({usuarioId})
        console.log(usuarioId)

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("http://unirotaapiloadbalancer-291617151.us-east-2.elb.amazonaws.com:8080/chatHub", {
                withCredentials: false
            })
            .withAutomaticReconnect()
            .build();

        try {
            let mensagens = await this.ObterTodasMensagens(this.state.grupoId);
            this.setState({messages: [...mensagens]})
            
            await this.connection.start();
            console.log("signalR connected");

            await this.connection.invoke("EntrarGrupo", this.state.grupoId);

            this.connection.on("ReceiveMessage", (usuarioId, conteudo) => {
                const newMessage = { usuarioId, conteudo }
                this.setState(prevState => ({
                    messages: [...prevState.messages, newMessage],
                }))
            });

        } catch(error) {
            console.error("signalR connection error: ", error);
        }
    }

    componentWillUnmount() {
        if(this.connection) {
            this.connection.stop();
        }
    }

    sendMessage = async (conteudo) => {
        try {
            await this.EnviarMensagem(conteudo, this.state.grupoId);
        } catch(error) {
            console.error("Erro ao enviar mensagem: ", error);
        }
    }

    renderMessage(message) {
        if (message.usuarioId == this.state.usuarioId) {
            return (
                <ChatMessageSent message={message}/>
            )
        }

        return (
            <ChatMessageReceived message={message}/>
        )
    }

    render() {
        const { messages, usuarioId } = this.state;
        if(messages === null || usuarioId === 0) {
            return (
                <Loading/>
            )
        }

        return (
                
            <KeyboardAvoidingView style={ChatContainerStyles.container}
            behavior={'padding'}>
                <View style={ChatContainerStyles.chatContainer}>
                    <FlatList
                        data={this.state.messages}
                        renderItem={({ item }) => this.renderMessage(item)}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={ChatContainerStyles.inputContainer}>
                    <ChatMessageInput onSendMessage={this.sendMessage}/>
                </View>
                
            </KeyboardAvoidingView>
        )
    }
    

}
