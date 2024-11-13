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
      groups: null,
      filters: {
        destino: "",
        nota: 0,
        filters: ""
      }
    }
  }

  async ObterDados(filters) {
    const dados = await GroupService.GetGroups(filters.destino ?? "", filters.nota ?? 0, filters.horaInicio ?? "");
    return dados.data;
  }

  async componentDidMount() {
    const dadosGrupos = await this.ObterDados(this.state.filters);
    
    if(dadosGrupos !== null){
      this.setState({ groups: dadosGrupos})
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.filters) !== JSON.stringify(this.state.filters)) {
      const dadosGrupos = await this.ObterDados(this.state.filters);
      
      if (dadosGrupos !== null) {
        this.setState({ groups: dadosGrupos });
      }
    }
  }

  handleTextFilterChange = async (texto) => {
    if(texto && texto !== ""){
      const filteredGroups = this.state.groups.filter(group => 
        group.nome.toLowerCase().includes(texto.toLowerCase()) ||
        group.destino.toLowerCase().includes(texto.toLowerCase())
      );
  
      this.setState({ groups: filteredGroups })
    } else {
      const dadosGrupos = await this.ObterDados(this.state.filters);
      
      if (dadosGrupos !== null) {
        this.setState({ groups: dadosGrupos });
      }
    }
  }

  handleFilterChanges = (filters) => {
    this.setState({ filters });
  };

  render() {
    const { groups } = this.state;

    if(groups === null) {
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
          <SearchGroupHeader onTextFilterChange={this.handleTextFilterChange} onFilterChanges={this.handleFilterChanges} />
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