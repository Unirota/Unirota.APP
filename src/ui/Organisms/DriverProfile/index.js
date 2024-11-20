import { Component } from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DriverProfileHeader from '../../Molecules/DriverProfileHeader'
import DriverProfileMenu from '../../Molecules/DriverProfileMenu'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Profile/styles'
import UnirotaTitle from '../../Atoms/UnirotaTitle'
import UserService from '../../../services/UserService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../../Atoms/Loading'
import UnirotaTitleStyles from '../../../styles/Atoms/UnirotaTitleStyles'

export default class DriverProfilePage extends Component {
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
        <View style={UnirotaTitleStyles.titleContainerProfile}>
                <Text style={[
                    UnirotaTitleStyles.commonText,
                    UnirotaTitleStyles.blueText]}>
                    Uni
                </Text>
                <Text style={[
                    UnirotaTitleStyles.commonText,
                    UnirotaTitleStyles.whiteText]}>
                    Rota
                </Text>
            </View>
          <DriverProfileHeader headerData={ headerData }/>
          <DriverProfileMenu />
        </View>
        <NavigationFooter navigation={this.props.navigation}/>
      </LinearGradient>
    )
  }
}
