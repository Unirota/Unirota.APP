import React, { Component } from 'react'
import { View } from 'react-native'
import GroupAvatar from '../Atoms/SearchGroupAvatar'
import GroupInfo from '../Atoms/SearchGroupInfo'
import TimeInfo from '../Atoms/SearchGroupTimeInfo'
import InfoButton from '../Atoms/SearchGroupInfoButton'
import styles from '../../styles/Molecules/SearchGroupCardStyles'

export default class SearchGroupCard extends Component {
  render() {
    const { group } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <GroupAvatar nota={group.nota} /> 
          <View style={styles.infoContainer}>
            <GroupInfo nome={group.nome} destino={group.destino} />
          </View>
        </View>
        
        <View style={styles.rightContent}>
          <TimeInfo horaInicio={group.horaInicio} />
          <InfoButton onPress={group.onInfoPress} />
        </View>
      </View>
    )
  }
}