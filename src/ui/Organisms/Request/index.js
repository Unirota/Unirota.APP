import { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Faq/styles'
import RequestInvite from '../../Molecules/RequestPage'
import RequestUnirotaTitle from '../../Atoms/RequestUnirotaTitle'

export default class RequestPage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <RequestUnirotaTitle/>
          <RequestInvite navigation={this.props.navigation}/>
        </View>
        <NavigationFooter navigation={this.props.navigation} />
      </LinearGradient>
    )
  }
}
