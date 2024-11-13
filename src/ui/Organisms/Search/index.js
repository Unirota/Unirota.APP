import { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import UnirotaTitle from '../../Atoms/UnirotaTitle'
import SearchGroupHeader from '../../Molecules/SearchGroupHeader'
import NavigationFooter from '../../Molecules/NavigationFooter'
import GroupCard from '../../Molecules/SearchGroupCard'
import styles from '../../../styles/Organisms/Profile/styles'
import GroupService from '../../../services/GroupService'
import Loading from '../../Atoms/Loading'

export default class SearchGroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }
  }

  async ObterDados() {
    const dados = await GroupService.GetGroups();
    return dados.data;
  }

  async componentDidMount() {
    const dadosGrupos = await this.ObterDados();
    
    if(dadosGrupos !== null){
      this.setState({ groups: dadosGrupos})
    }
  }

  handleUpdateGroups = (updatedGroups) => {
    this.setState({ groups: updatedGroups });
  };

  render() {
    const { groups } = this.state;

    if(groups.length === 0) {
      return(
        <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
          <View style={styles.container}>
            <UnirotaTitle />
            <Loading/>
          </View>
        </LinearGradient>
      )
    }

    return (
      <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
        <View style={styles.container}>
          <UnirotaTitle />
          <SearchGroupHeader onUpdateGroups={this.handleUpdateGroups} />
          <ScrollView style={styles.groupList}>
            {this.state.groups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </ScrollView>
          <NavigationFooter navigation={this.props.navigation}/>
        </View>
      </LinearGradient>
    )
  }
}