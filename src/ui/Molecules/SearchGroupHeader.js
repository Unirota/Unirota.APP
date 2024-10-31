// import { Component } from 'react'
// import { View, TextInput, TouchableOpacity, Text } from 'react-native'
// import DriverProfileAvatar from '../Atoms/DriverProfileAvatar'
// import DriverProfileBadge from '../Atoms/DriverProfileBadge'
// import DriverProfileName from '../Atoms/DriverProfileName'
// import DriverProfileInfo from '../Atoms/DriverProfileInfo'
// import styles from '../../styles/Molecules/SearchGroupHeaderStyles'

// export default class SearchGroupHeader extends Component {
//   render() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.searchContainer}>
//             <TextInput style={styles.searchInputText}placeholder="Pesquisar"/>
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//                 <Text style={styles.filterButtonText}>Filtros</Text>
//             </TouchableOpacity>
//       </View>
//     )
//   }
// }






//TODO: Estilizar os filtros dentro da modal

import { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, Modal } from 'react-native'
import styles from '../../styles/Molecules/SearchGroupHeaderStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker'
import StarRating from 'react-native-star-rating-widget'
import { Picker } from '@react-native-picker/picker'

export default class SearchGroupHeader extends Component {
  state = {
    isModalVisible: false,
    startTime: new Date(),
    showTimePicker: false,
    selectedDestination: '',
    rating: 0,
  };

  // Lista de destinos disponíveis (você pode mover isso para um arquivo de configuração)
  destinations = [
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Salvador',
    'Recife',
  ];

  toggleModal = () => {
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  };

  onTimeChange = (event, selectedTime) => {
    this.setState({ showTimePicker: Platform.OS === 'ios' });
    if (selectedTime) {
      this.setState({ startTime: selectedTime });
    }
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

        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.isModalVisible}
          onRequestClose={this.toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Filtros</Text>
              
              {/* Hora Início */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Hora Início</Text>
                <TouchableOpacity 
                  style={styles.timeButton}
                  onPress={() => this.setState({ showTimePicker: true })}
                >
                  <Text>
                    {this.state.startTime.toLocaleTimeString().slice(0, 5)}
                  </Text>
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

              {/* Destino */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Destino</Text>
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

              {/* Nota */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Nota</Text>
                <StarRating
                  rating={this.state.rating}
                  onChange={(rating) => this.setState({ rating })}
                  maxStars={5}
                  starSize={30}
                />
              </View>

              {/* Botões */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={styles.applyButton}
                  onPress={this.toggleModal}
                >
                  <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}