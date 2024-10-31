import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupTimeInfoStyles'

export default class TimeInfo extends Component {
  render() {
    const { time } = this.props

    return (
      <View style={styles.container}>
        <Icon name="schedule" size={16} color="#666" />
        <Text style={styles.timeText}>{time}</Text>
      </View>
    )
  }
}