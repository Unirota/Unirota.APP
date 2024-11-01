import { Component } from 'react'
import { View, TouchableOpacity, Text, Modal } from 'react-native'
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
  };

  destinations = [
    'UEM',
    'UniCesumar',
    'Uningá',
    'UniCV',
    'Feitep',
  ];

  onTimeChange = (event, selectedTime) => {
    this.setState({ showTimePicker: Platform.OS === 'ios' });
    if (selectedTime) {
      this.setState({ startTime: selectedTime });
    }
  };

  clearFilters = () => {
    this.setState({
      startTime: new Date(),
      selectedDestination: '',
      rating: 0,
    });
  };

  searchGroups = () => {
    const { startTime, selectedDestination, rating } = this.state;
    const filters = {
      startTime: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      destination: selectedDestination,
      rating: rating,
    };

    const filteredGroups = SearchGroupService.getGroups(filters);
    this.setState({ filteredGroups }, () => {
      // Aqui você pode chamar uma função para atualizar a lista de grupos na tela principal
      this.props.onSearch(filteredGroups);
      this.props.onClose(); // Fecha o modal após a pesquisa
    });
  };

  render() {
    const { isVisible, onClose } = this.props;

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
              <Icon name='close' size={20} color='#999'/>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Filtros</Text>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>Hora Início:</Text>
              <TouchableOpacity 
                style={styles.filterInput}
                onPress={() => this.setState({ showTimePicker: true })}
              >
                <Text>{this.state.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</Text>
              </TouchableOpacity>
              {this.state.showTimePicker && (
                <DateTimePicker
                  value={this.state.startTime}
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
                  selectedValue={this.state.selectedDestination}
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
                rating={this.state.rating}
                onChange={(rating) => this.setState({ rating })}
                maxStars={5}
                starSize={30}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.buttonContainer}>
              <View style={styles.clearFiltersButtonContainer}>
                <TouchableOpacity style={styles.clearFiltersButton} onPress={this.clearFilters}>
                  <Text style={styles.clearFiltersButtonText}>Limpar Filtros</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.searchButtonContainer}>
                <TouchableOpacity style={styles.searchButton} onPress={this.searchGroups}>
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