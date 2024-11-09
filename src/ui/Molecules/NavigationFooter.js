import { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import NavigationFooterStyles from '../../styles/Molecules/NavigationFooterStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../Atoms/Loading'

export default class NavigationFooter extends Component {
  constructor(props){
    super(props);
    this.state = {
      isUserDriver: null
    }
  }

  async checkUserIsDriver() {
    const isUserDriver = await AsyncStorage.getItem('isUserDriver')
    this.setState({ isUserDriver });
  }

  async componentDidMount() {
    await this.checkUserIsDriver();
  }
  
  render() {
    const { navigation } = this.props;
    const { isUserDriver } = this.state;
    
    if(isUserDriver === null) {
      return (
        <Loading />
      )
    }

    return (
      <View style={NavigationFooterStyles.footer}>
        
        <TouchableOpacity style={NavigationFooterStyles.button} onPress={() => {
          navigation.navigate('HomePage')
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
          navigation.navigate('SearchGroupPage')
        }}>
          <Icon name="search" size={30} color="white" height={50} />
        </TouchableOpacity>

        <TouchableOpacity style={NavigationFooterStyles.button}>
          <Icon name="message" size={30} color="white" height={50} />
        </TouchableOpacity>

        <TouchableOpacity style={NavigationFooterStyles.button} onPress={() => {
          navigation.navigate( isUserDriver ? 'DriverProfilePage' : 'ProfilePage')
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