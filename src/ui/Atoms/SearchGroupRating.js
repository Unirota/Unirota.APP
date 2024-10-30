import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupRatingStyles'

const GroupRating = ({ rating }) => (
  <View style={styles.container}>
    <Icon name="star" size={16} color="#FFD700" />
    <Text style={styles.ratingText}>{rating}</Text>
  </View>
)

export default GroupRating