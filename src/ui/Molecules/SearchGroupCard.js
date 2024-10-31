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
          <GroupAvatar />
          <View style={styles.infoContainer}>
            <GroupInfo name={group.name} institution={group.institution} />
          </View>
        </View>
        
        <View style={styles.rightContent}>
          <TimeInfo time={group.time} />
          <InfoButton onPress={group.onInfoPress} />
        </View>
      </View>
    )
  }
}