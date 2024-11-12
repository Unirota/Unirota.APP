import { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import ChatTitleStyles from '../../styles/Atoms/ChatTitleStyles'
import ChatSubTitleStyles from '../../styles/Atoms/ChatSubTitleStyles'
import ChatIconStyles from  '../../styles/Atoms/ChatIconStyles'
import ChatHeaderStyles from '../../styles/Molecules/ChatHeaderStyles'
import ChatVectorStyles from '../../styles/Atoms/ChatArrowDownStyles'
import ChatIcon from '../Atoms/ChatIcon'
import ChatTitle from '../Atoms/ChatTitle'
import ChatArrowDown from '../Atoms/ChatArrowDown'

export default class ChatHeader extends Component {
    render() {
        return (
            <View style={ChatHeaderStyles.groupContainer} >
                
                {/* TODO: CHAMAR ATOMO DO ICON */}
                <ChatIcon/>
                <View style={ChatTitleStyles.commonText}>
                    {/* TODO: CHAMAR ATOMOS DO TEXTO */}
                    <ChatTitle/>
                </View>
                <ChatArrowDown/>

            
            </View>
            
        )
    }
}