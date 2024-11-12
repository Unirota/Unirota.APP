import { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import FaqTitle from '../../Atoms/FaqTitle'
import NavigationFooter from '../../Molecules/NavigationFooter'
import styles from '../../../styles/Organisms/Faq/styles'
import FAQComponent from '../../Molecules/Faq'
import FaqAvatar from '../../Atoms/FaqAvatar'

export default class FaqPage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <FaqAvatar />
          <FaqTitle />
          <FAQComponent />
          <NavigationFooter navigation={this.props.navigation} />
        </View>
      </LinearGradient>
    )
  }
}
