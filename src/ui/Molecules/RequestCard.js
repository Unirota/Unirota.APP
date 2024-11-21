import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import GroupAvatar from '../Atoms/SearchGroupAvatar'
import GroupInfo from '../Atoms/SearchGroupInfo'
import RequestInfoButton from '../Atoms/RequestInfoButton'
import RequestGroupModal from './RequestGroupModal'
import RequestCardStyles from '../../styles/Molecules/RequestCardStyles'

export default class RequestCard extends Component {
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
      <View style={RequestCardStyles.container}>
        <View style={RequestCardStyles.leftContent}>
          <GroupAvatar nota={group.nota} />
          <View style={RequestCardStyles.infoContainer}>
            <GroupInfo nome={group.nome} destino={group.destino} />
          </View>
        </View>
        
        <View style={RequestCardStyles.rightContent}>
          <Text style={RequestCardStyles.timeText}>{formattedTime}</Text>
          <View style={RequestCardStyles.buttonsContainer}>
            <TouchableOpacity onPress={this.toggleModal}>
              <RequestInfoButton onPress={this.toggleModal}/>
            </TouchableOpacity>
          </View>
        </View>

        <RequestGroupModal
          group={group}
          isVisible={isModalVisible}
          onClose={this.toggleModal}
        />

      </View>
    )
  }
}