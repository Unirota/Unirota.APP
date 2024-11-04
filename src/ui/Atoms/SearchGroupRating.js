import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupRatingStyles'

export default class GroupRating extends Component {
  render() {
    const { rating } = this.props;

    if (!rating && rating !== 0) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>{rating?.toFixed(1)}</Text>
      </View>
    );
  }
}