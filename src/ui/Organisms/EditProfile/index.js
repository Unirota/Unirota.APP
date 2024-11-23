import { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import NavigationFooter from '../../Molecules/NavigationFooter'
import EditProfileTitle from '../../Atoms/EditProfileTitle'
import EditProfileAvatar from '../../Atoms/EditProfileAvatar'
import EditProfile from '../../Molecules/EditProfile'
import Styles from '../../../styles/Organisms/EditProfile/styles'
import EditProfileLogo from '../../Atoms/EditProfileLogo'


export default class EditProfilePage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={Styles.gradient}>
        <ScrollView
          style={Styles.scrollView}
          contentContainerStyle={Styles.scrollViewContent}
        >
          <View style={Styles.container}>
            <EditProfileLogo/>
            <EditProfileTitle />
            <EditProfileAvatar />
            <EditProfile navigation={this.props.navigation} />
          </View>
        </ScrollView>
        <NavigationFooter navigation={this.props.navigation} />
      </LinearGradient>
    )
  }
}
