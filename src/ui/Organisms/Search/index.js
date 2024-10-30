// import { Component } from 'react'
// import { View } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient'
// import DriverProfileHeader from '../../Molecules/DriverProfileHeader'
// import DriverProfileMenu from '../../Molecules/DriverProfileMenu'
// import NavigationFooter from '../../Molecules/NavigationFooter'
// import styles from '../../../styles/Organisms/Profile/styles'
// import UnirotaTitle from '../../Atoms/UnirotaTitle'
// import SearchGroupHeader from '../../Molecules/SearchGroupHeader'
// import SearchGroupCard from '../../Molecules/SearchGroupCard'

// export default class SearchGroupPage extends Component {
//   render() {
//     return (
//       <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
//         <View style={styles.container}>
//           <UnirotaTitle />
//           <SearchGroupHeader />
//           <SearchGroupCard />
          
//         </View>
//         <NavigationFooter />
//       </LinearGradient>
//     )
//   }
// }





import { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import UnirotaTitle from '../../Atoms/UnirotaTitle'
import SearchGroupHeader from '../../Molecules/SearchGroupHeader'
import NavigationFooter from '../../Molecules/NavigationFooter'
import GroupCard from '../../Molecules/SearchGroupCard'
import styles from '../../../styles/Organisms/Profile/styles'
import SearchGroupService from '../../../services/SearchGroupService'

export default class SearchGroupPage extends Component {
  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <UnirotaTitle />
          <SearchGroupHeader />
          <ScrollView style={styles.groupList}>
            {SearchGroupService.getGroups().map((group, index) => (
              <GroupCard key={index} group={group} />
            ))}
          </ScrollView>
          <NavigationFooter />
        </View>
      </LinearGradient>
    )
  }
}