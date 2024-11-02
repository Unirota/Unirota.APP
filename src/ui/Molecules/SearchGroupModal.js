import { Component } from 'react'
import { View, TouchableOpacity, Text, Modal, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker'
import StarRating from 'react-native-star-rating-widget'
import { Picker } from '@react-native-picker/picker'
import styles from '../../styles/Molecules/SearchGroupModalStyles'
import SearchGroupService from '../../services/SearchGroupService'

export default class SearchGroupModal extends Component {
  state = {
    startTime: new Date(),
    showTimePicker: false,
    selectedDestination: '',
    rating: 0,
    groups: [],
  };

  componentDidMount() {
    const groups = SearchGroupService.getGroups();
    this.setState({ groups });
  }

  destinations = [
    'UEM',
    'UniCesumar',
    'Uningá',
    'UniCV',
    'Feitep',
  ];

  onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || this.state.startTime;
    this.setState({ 
      showTimePicker: Platform.OS === 'ios',
      startTime: currentTime
    });
  };

  clearFilters = () => {
    this.setState({
      startTime: new Date(),
      selectedDestination: '',
      rating: 0,
    }, () => {
      
      const allGroups = SearchGroupService.getGroups();
      this.setState({ groups: allGroups });
      this.props.onSearch(allGroups);
    });
  };

  formatTimeForFilter = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  searchGroups = () => {
    const { startTime, selectedDestination, rating } = this.state;

    
    const formattedTime = this.formatTimeForFilter(startTime);


    const filters = {};
    
    if (formattedTime) {
      filters.startTime = formattedTime;
    }
    
    if (selectedDestination) {
      filters.destination = selectedDestination;
    }
    
    if (rating > 0) {
      filters.rating = rating;
    }

    
    const filteredGroups = SearchGroupService.getGroups(filters);
    
    
    this.setState({ groups: filteredGroups });

    
    this.props.onSearch(filteredGroups);
    this.props.onClose();
  };

  render() {
    const { isVisible, onClose } = this.props;
    const { startTime, showTimePicker, selectedDestination, rating } = this.state;

    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButtonContainer}>
              <Icon name="close" size={20} color="#999"/>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Filtros</Text>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>Hora Início:</Text>
              <TouchableOpacity 
                style={styles.filterInput}
                onPress={() => this.setState({ showTimePicker: true })}
              >
                <Text>
                  {this.formatTimeForFilter(startTime)}
                </Text>
              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={startTime}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={this.onTimeChange}
                />
              )}
            </View>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>Destino:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedDestination}
                  onValueChange={(itemValue) => 
                    this.setState({ selectedDestination: itemValue })
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Selecione um destino" value="" />
                  {this.destinations.map((destination) => (
                    <Picker.Item 
                      key={destination}
                      label={destination} 
                      value={destination} 
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.noteSection}>
              <Text style={styles.filterLabel}>Nota:</Text>
              <StarRating
                rating={rating}
                onChange={(rating) => this.setState({ rating })}
                maxStars={5}
                starSize={30}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.buttonContainer}>
              <View style={styles.clearFiltersButtonContainer}>
                <TouchableOpacity 
                  style={styles.clearFiltersButton} 
                  onPress={this.clearFilters}
                >
                  <Text style={styles.clearFiltersButtonText}>Limpar Filtros</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.searchButtonContainer}>
                <TouchableOpacity 
                  style={styles.searchButton} 
                  onPress={this.searchGroups}
                >
                  <Text style={styles.searchButtonText}>Pesquisar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}