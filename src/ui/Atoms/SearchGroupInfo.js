import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupInfoStyles'

const GroupInfo = ({ name, institution }) => (
  <View style={styles.container}>
    <Text style={styles.groupName}>{name}</Text>
    <View style={styles.institutionContainer}>
      <Icon name="school" size={12} color="#666" />
      <Text style={styles.institutionText}>{institution}</Text>
    </View>
  </View>
)

export default GroupInfo