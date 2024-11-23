import { Component } from 'react'
import { View, Text } from 'react-native'
import ChatTitleStyles from '../../styles/Atoms/ChatTitleStyles'
import ChatSubTitleStyles from '../../styles/Atoms/ChatSubTitleStyles'

export default class ChatTitle extends Component {
    render (){
        return(
            <View style={ChatTitleStyles.titleContainer}>
                 
              <Text style={[
                ChatTitleStyles.commonText,
                ChatTitleStyles.whiteText]}>
                {this.props.nome}
              </Text>
              <View style={ChatSubTitleStyles.chatSubtitle}></View>
            </View>
        )
    }
}

