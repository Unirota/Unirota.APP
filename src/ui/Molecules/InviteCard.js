import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import GroupAvatar from '../Atoms/SearchGroupAvatar'
import GroupInfo from '../Atoms/SearchGroupInfo'
import InviteCardStyles from '../../styles/Molecules/InviteCardStyles'
import InviteInfoButton from '../Atoms/InviteInfoButton'
import InfoGroupModal from './InfoGroupModal'


export default class InviteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
  }
}
  
  formatTime(time) {
    return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
  }

  toggleModal = () => {
    this.setState((prevState) => ({ isModalVisible: !prevState.isModalVisible }));
  };

  render() {
    const { group } = this.props
    const { isModalVisible } = this.state
    const formattedTime = this.formatTime(group.horaInicio)

    return (
      <View style={InviteCardStyles.container}>
        <View style={InviteCardStyles.leftContent}>
          <GroupAvatar nota={group.nota} />
          <View style={InviteCardStyles.infoContainer}>
            <GroupInfo nome={group.nome} destino={group.destino} />
          </View>
        </View>
        
        <View style={InviteCardStyles.rightContent}>
          <Text style={InviteCardStyles.timeText}>{formattedTime}</Text>
          <View style={InviteCardStyles.buttonsContainer}>
            <TouchableOpacity onPress={this.toggleModal}>
              <InviteInfoButton onPress={this.toggleModal}/>
            </TouchableOpacity>
          </View>
        </View>

        <InfoGroupModal
          group={group}
          navigation={this.props.navigation}
          isVisible={isModalVisible}
          onClose={this.toggleModal}
        />
        
      </View>
    )
  }
}