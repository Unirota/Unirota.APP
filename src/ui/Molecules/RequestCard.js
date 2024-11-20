import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import GroupAvatar from '../Atoms/SearchGroupAvatar'
import GroupInfo from '../Atoms/SearchGroupInfo'
import RequestInfoButton from '../Atoms/RequestInfoButton'
import RequestCardStyles from '../../styles/Molecules/RequestCardStyles'

export default class RequestCard extends Component {
  formatTime(time) {
    if (!time) return '';
    
    if (typeof time === 'string' && time.match(/^\d{2}:\d{2}$/)) {
      return time;
    }
    
    try {
      const [hours, minutes] = time.split(':');
      return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    } catch (error) {
      console.error('Erro ao formatar hora:', error);
      return 'Horário indisponível';
    }
  }

  render() {
    const { group } = this.props
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
            <TouchableOpacity>
              <RequestInfoButton/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}