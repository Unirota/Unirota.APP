import { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import NavigationFooter from '../../Molecules/NavigationFooter'
import GroupDataHeader from '../../Atoms/GroupDataHeader'
import GroupDataContainer from '../../Atoms/GroupDataContainer'
export default class GroupDataPage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={{flex: 1}}>
          <View style={{flex: 1}}>
            <GroupDataHeader />
            <GroupDataContainer/>
          </View>
        <NavigationFooter navigation={this.props.navigation} />
      </LinearGradient>
    )
  }
}
