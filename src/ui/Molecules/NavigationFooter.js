import { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import NavigationFooterStyles from '../../styles/Molecules/NavigationFooterStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../Atoms/Loading'

export default class NavigationFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserDriver: null,
      currentPage: ""
    }
  }

  async checkUserIsDriver() {
    let isUserDriver = await AsyncStorage.getItem('isUserDriver')
    if (isUserDriver === null)
      isUserDriver = false
    this.setState({ isUserDriver });
  }

  async componentDidMount() {
    await this.checkUserIsDriver();
    this.setState({
      currentPage: this.props.navigation.getState().routes[0].name
    })
  }

  render() {
    const { navigation } = this.props;
    const { isUserDriver } = this.state;
    if (isUserDriver === null) {
      return (
        <Loading />
      )
    }

    return (
      <View style={NavigationFooterStyles.footer}>
      
        <TouchableOpacity style={NavigationFooterStyles.button} onPress={() => {
          if (this.state.currentPage !== 'HomePage')
            navigation.replace('HomePage')
        }}>
          <Icon
            name="home"
            size={30}
            color="white"
            height={50}
            marginLeft={10}
          />
        </TouchableOpacity>

        <TouchableOpacity style={NavigationFooterStyles.button} onPress={() => {
          if (this.state.currentPage !== 'SearchGroupPage')
            navigation.replace('SearchGroupPage')
        }}>
          <Icon name="search" size={30} color="white" height={50} />
        </TouchableOpacity>

        <TouchableOpacity style={NavigationFooterStyles.button} onPress={() => {
          if (this.state.currentPage !== 'GroupListPage')
            navigation.navigate('GroupListPage')
        }}>
          <Icon name="message" size={30} color="white" height={50} />
        </TouchableOpacity>

        <TouchableOpacity style={NavigationFooterStyles.button} onPress={() => {
          if (isUserDriver && this.state.currentPage !== 'DriverProfilePage')
            navigation.replace('DriverProfilePage')
          else if (!isUserDriver && this.state.currentPage !== 'ProfilePage')
              navigation.replace('ProfilePage')
        }}>
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
