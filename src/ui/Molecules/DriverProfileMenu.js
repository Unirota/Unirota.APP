import { Component } from 'react'
import { View, FlatList } from 'react-native'
import ProfileMenuItem from '../Atoms/ProfileMenuItem'
import DriverProfileService from '../../services/DriverProfileService'
import styles from '../../styles/Molecules/ProfileMenuStyles'
import BlueLine from '../Atoms/BlueLine'

export default class DriverProfileMenu extends Component {
  render() {
    const menuItems = DriverProfileService.getMenuItems()
    return (
      <View style={styles.container}>
        <BlueLine />
        <FlatList
          data={menuItems}
          renderItem={({ item, index }) => (
            <ProfileMenuItem data={item} isFirstItem={index === 0} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
