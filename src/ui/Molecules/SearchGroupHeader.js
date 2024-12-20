import { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/Molecules/SearchGroupHeaderStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchGroupModal from './SearchGroupModal'
import SearchGroupService from '../../services/SearchGroupService'

export default class SearchGroupHeader extends Component {
  state = {
    isModalVisible: false,
    searchText: '',
  };

  handleFilterChanges = (filter) => {
    if (this.props.onFilterChanges) {
      this.props.onFilterChanges(filter);
    }
  };

  handleTextSearch = (text) => {
    this.setState({ searchText: text });

    this.props.onTextFilterChange(text);
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon 
            name="search" 
            size={20} 
            color="#999" 
            style={styles.searchIcon}
          />
          <TextInput 
            style={styles.searchInputText}
            placeholder="Pesquisar"
            placeholderTextColor="#999"
            value={this.state.searchText}
            onChangeText={this.handleTextSearch}
          />
        </View>
        
        <TouchableOpacity style={styles.filterButton} onPress={this.toggleModal}>
          <View style={styles.filterContent}>
            <Icon name='menu' color='#E3E8EF' size={20}/>
            <Text style={styles.filterButtonText}>Filtros</Text>
          </View>
        </TouchableOpacity>

        <SearchGroupModal 
          isVisible={this.state.isModalVisible}
          onClose={this.toggleModal}
          onSearch={this.handleFilterChanges}
        />
      </View>
    )
  }
}