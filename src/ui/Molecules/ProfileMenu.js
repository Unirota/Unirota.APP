import { Component } from 'react'
import { View, FlatList } from 'react-native'
import ProfileMenuItem from '../Atoms/ProfileMenuItem'
import ProfileService from '../../services/ProfileService'
import styles from '../../styles/Molecules/ProfileMenuStyles'
import BlueLine from '../Atoms/BlueLine'

export default class ProfileMenu extends Component {
  render() {
    const menuItems = ProfileService.getMenuItems()
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
