import { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ProfileHeader from '../../Molecules/ProfileHeader'
import ProfileMenu from '../../Molecules/ProfileMenu'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Profile/styles'
import UnirotaTitle from '../../Atoms/UnirotaTitle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserService from '../../../services/UserService'
import Loading from '../../Atoms/Loading'

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: null,
    }
  }  

  async ObterDadosUsuario() {
    const userId = await AsyncStorage.getItem('userId');
    const dados = await UserService.GetUserById(userId);
    return dados.data;
  }

  async componentDidMount() {
    const dados = await this.ObterDadosUsuario();
    
    if(dados !== null){
      this.setState({ headerData: dados})
    }
  }

  render() {
    const { headerData } = this.state;
    
    if (headerData === null) {
      return (
        <Loading />
      )
    }

    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <UnirotaTitle />
          <ProfileHeader headerData={ headerData }/>
          <ProfileMenu navigation={this.props.navigation}/>
        </View>
        <NavigationFooter navigation={this.props.navigation}/>
      </LinearGradient>
    )
  }
}