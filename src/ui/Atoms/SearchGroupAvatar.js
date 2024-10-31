import React, { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import GroupRating from './SearchGroupRating'
import styles from '../../styles/Atoms/SearchGroupAvatarStyles'

export default class GroupAvatar extends Component {
  render() {
    const { rating } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Icon name="photo-camera" size={24} color="white" />
        </View>
        <View style={styles.ratingContainer}>
          <GroupRating rating={rating} />
        </View>
    </View>
    )
  }
}