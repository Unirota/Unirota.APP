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

  handleSearch = (filteredGroups) => {
    if (this.props.onUpdateGroups) {
      this.props.onUpdateGroups(filteredGroups);
    }
  };

  handleTextSearch = (text) => {
    this.setState({ searchText: text });
    
    if (!text.trim()) {
      const allGroups = SearchGroupService.getGroups();
      this.handleSearch(allGroups);
      return;
    }

    const filteredGroups = SearchGroupService.getGroups().filter(group => 
      group.name.toLowerCase().includes(text.toLowerCase()) ||
      group.institution.toLowerCase().includes(text.toLowerCase())
    );

    this.handleSearch(filteredGroups);
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
          onSearch={this.handleSearch}
        />
      </View>
    )
  }
}