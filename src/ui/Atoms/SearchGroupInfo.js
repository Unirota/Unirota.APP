import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupInfoStyles'

const GroupInfo = ({ nome, destino }) => (
  <View style={styles.container}>
    <Text style={styles.groupName}>{nome}</Text>
    <View style={styles.institutionContainer}>
      <Icon name="school" size={12} color="#666" />
      <Text style={styles.institutionText}>{destino === "" ? "Não definido" : destino}</Text>
    </View>
  </View>
)

export default GroupInfo