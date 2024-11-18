import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import GroupAvatar from '../Atoms/SearchGroupAvatar'
import GroupInfo from '../Atoms/SearchGroupInfo'
import InviteCardStyles from '../../styles/Molecules/InviteCardStyles'
import InviteInfoButton from '../Atoms/InviteInfoButton'

export default class InviteCard extends Component {
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
            <TouchableOpacity>
              <InviteInfoButton/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}