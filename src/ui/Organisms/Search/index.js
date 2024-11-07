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
  state = {
    groups: []
  };

  componentDidMount() {
    const initialGroups = SearchGroupService.getGroups();
    this.setState({ groups: initialGroups });
  }

  handleUpdateGroups = (updatedGroups) => {
    this.setState({ groups: updatedGroups });
  };

  render() {
    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <UnirotaTitle />
          <SearchGroupHeader onUpdateGroups={this.handleUpdateGroups} />
          <ScrollView style={styles.groupList}>
            {this.state.groups.map((group, index) => (
              <GroupCard key={index} group={group} />
            ))}
          </ScrollView>
          <NavigationFooter navigation={this.props.navigation}/>
        </View>
      </LinearGradient>
    )
  }
}