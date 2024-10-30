import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupTimeInfoStyles'

const TimeInfo = ({ time }) => (
  <View style={styles.container}>
    <Icon name="schedule" size={16} color="#666" />
    <Text style={styles.timeText}>{time}</Text>
  </View>
)

export default TimeInfo