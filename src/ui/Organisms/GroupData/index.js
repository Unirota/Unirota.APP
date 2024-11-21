import { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import NavigationFooter from '../../Molecules/NavigationFooter'
import GroupDataHeader from '../../Atoms/GroupDataHeader'
import { GroupDataAvatarHeaderStyles } from '../../../styles/Atoms/GroupDataAvatarHeaderStyles'
export default class GroupDataPage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']}>
       
          <View>
            <GroupDataAvatarHeaderStyles/>
            <GroupDataHeader navigation={this.props.navigation} />
          </View>
        
        <NavigationFooter navigation={this.props.navigation} />
      </LinearGradient>
    )
  }
}
