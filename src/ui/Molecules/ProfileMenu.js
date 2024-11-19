import { Component } from 'react'
import { View, FlatList } from 'react-native'
import ProfileMenuItem from '../Atoms/ProfileMenuItem'
import ProfileService from '../../services/ProfileService'
import styles from '../../styles/Molecules/ProfileMenuStyles'
import BlueLine from '../Atoms/BlueLine'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class ProfileMenu extends Component {
  handleMenuPress = async (id) => {
    if (id === '5') {
      await AsyncStorage.clear();
      this.props.navigation.navigate('LoginPage'); 
    } else {
      switch (id) {
        case '1':
          this.props.navigation.navigate('HomePage');
          break;
        case '2':
          this.props.navigation.navigate('HomePage');
          break;
        case '3':
          this.props.navigation.navigate('HomePage');
          break;
        case '4':
          this.props.navigation.navigate('HomePage');
          break;
        default:
          console.log('Unhandled menu item:', id);
      }
    }
  };

  render() {
    const menuItems = ProfileService.getMenuItems()
    return (
      <View style={styles.container}>
        <BlueLine />
        <FlatList
          data={menuItems}
          renderItem={({ item, index }) => (
            <ProfileMenuItem data={item} isFirstItem={index === 0} onPress={this.handleMenuPress}/>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
