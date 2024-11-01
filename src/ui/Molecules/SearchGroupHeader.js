import { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/Molecules/SearchGroupHeaderStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchGroupModal from './SearchGroupModal'
import SearchGroupService from '../../services/SearchGroupService'

export default class SearchGroupHeader extends Component {
  state = {
    isModalVisible: false,
    groups: []
  };

  componentDidMount() {
    this.loadGroups(); // Carregue os grupos iniciais
  }

  loadGroups = () => {
    const groups = SearchGroupService.getGroups();
    this.setState({ groups });
  };

  handleSearch = (filteredGroups) => {
    this.setState({ groups: filteredGroups });
    // Se você precisar passar os grupos filtrados para um componente pai,
    // você pode fazê-lo aqui, por exemplo:
    this.props.onGroupsFiltered(filteredGroups);
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