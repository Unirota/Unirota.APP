import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Atoms/SearchGroupRatingStyles'
import SearchGroupService from '../../services/SearchGroupService'

export default class GroupRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null, // Inicializa a nota como null
    };
  }

  componentDidMount() {
    this.fetchRating(); // Chama a função para buscar a nota quando o componente é montado
  }

  fetchRating() {
    const groups = SearchGroupService.getGroups(); // Obtém os grupos da service
    if (groups.length > 0) {
      this.setState({ rating: groups[0].rating }); // Define a nota do primeiro grupo
    }
  }

  render() {
    const { rating } = this.state; // Obtém a nota do estado

    return (
      <View style={styles.container}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>{rating !== null ? rating : 'Loading...'}</Text>
      </View>
    );
  }
}
