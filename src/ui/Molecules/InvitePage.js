import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import InviteCard from '../Molecules/InviteCard'
import InviteService from '../../services/InviteService'
import Icon from 'react-native-vector-icons/MaterialIcons';
import InvitePageStyles from '../../styles/Molecules/InvitePageStyles';
import Loading from '../Atoms/Loading';


export default class PageInvite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: null,
    };
  }

  async ObterDados() {
    const dados = await InviteService.GetInvites();
    return dados.data;
  }

  async componentDidMount() {
    const dadosGrupos = await this.ObterDados();
    
    if(dadosGrupos !== null){
      this.setState({ groups: dadosGrupos})
    }
  }

  render() {
    const { navigation } = this.props;
    const { groups } = this.state;

    if(groups === null) {
      return(
        <View style={InvitePageStyles.container}>
          <View style={InvitePageStyles.titleSection}>
            <Icon name="mail" size={24} color="#FFF" style={InvitePageStyles.mailIcon} />
            <Text style={InvitePageStyles.title}>Convites</Text>
          </View>
          <View>
            <Loading/>
          </View>
        </View>
      )
    }

    if(groups === null) {
      return(
        <View style={InvitePageStyles.container}>
          <View style={InvitePageStyles.titleSection}>
            <Icon name="mail" size={24} color="#FFF" style={InvitePageStyles.mailIcon} />
            <Text style={InvitePageStyles.title}>Convites</Text>
          </View>
          <View>
            <Text>
              Usuário não possui convites.
            </Text>
          </View>
        </View>
      )
    }
    
    return (
      <View style={InvitePageStyles.container}>
          <View style={InvitePageStyles.titleSection}>
            <Icon name="mail" size={24} color="#FFF" style={InvitePageStyles.mailIcon} />
            <Text style={InvitePageStyles.title}>Convites</Text>
          </View>

          <ScrollView style={InvitePageStyles.scrollView}>
            {this.state.groups.map((group) => (
              <InviteCard key={group.id} group={group} navigation={this.props.navigation} />
            ))}
          </ScrollView>
      </View>
    );
  }
}