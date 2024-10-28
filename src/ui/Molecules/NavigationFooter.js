import { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import NavigationFooterStyles from '../../styles/Molecules/NavigationFooterStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NavigationFooter extends Component {
  render() {
    return (
      <View style={NavigationFooterStyles.footer}>
        <TouchableOpacity style={NavigationFooterStyles.button}>
          <Icon
            name="home"
            size={30}
            color="white"
            height={50}
            marginLeft={10}
          />
        </TouchableOpacity>
        <TouchableOpacity style={NavigationFooterStyles.button}>
          <Icon name="search" size={30} color="white" height={50} />
        </TouchableOpacity>
        <TouchableOpacity style={NavigationFooterStyles.button}>
          <Icon name="message" size={30} color="white" height={50} />
        </TouchableOpacity>
        <TouchableOpacity style={NavigationFooterStyles.button}>
          <Icon
            name="person"
            size={30}
            color="white"
            height={50}
            marginRight={10}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
