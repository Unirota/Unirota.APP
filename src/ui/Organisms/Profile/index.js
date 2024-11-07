import { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ProfileHeader from '../../Molecules/ProfileHeader'
import ProfileMenu from '../../Molecules/ProfileMenu'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Profile/styles'
import UnirotaTitle from '../../Atoms/UnirotaTitle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserService from '../../../services/UserService'

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
        <View style={innerStyles.loading}>
          <ActivityIndicator size="large" color="#00BBAA" />
        </View>
      )
    }

    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <UnirotaTitle />
          <ProfileHeader headerData={ headerData }/>
          <ProfileMenu />
        </View>
        <NavigationFooter />
      </LinearGradient>
    )
  }
}

const innerStyles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',

  },
})