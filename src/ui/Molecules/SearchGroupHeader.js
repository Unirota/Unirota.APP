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








import { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/Molecules/SearchGroupHeaderStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SearchGroupHeader extends Component {
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
        
        <TouchableOpacity style={styles.filterButton}>
          <View style={styles.filterContent}>
            <Icon name='menu' color='#E3E8EF' size={20}/>
            <Text style={styles.filterButtonText}>Filtros</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
