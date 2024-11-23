import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RequestCard from './RequestCard';
import RequestService from '../../services/RequestService';
import Icon from 'react-native-vector-icons/FontAwesome';
import RequestPageStyles from '../../styles/Molecules/RequestPageStyles';
import Loading from '../Atoms/Loading';

export default class RequestInvite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: null,
    };
  }

  async ObterDados() {
    const dados = await RequestService.GetRequests();
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
        <View style={RequestPageStyles.container}>
          <View style={RequestPageStyles.titleSection}>
            <Icon name="send-o" size={24} color="#FFF" style={RequestPageStyles.mailIcon} />
            <Text style={RequestPageStyles.title}>Solicitações</Text>
          </View>
          <View>
            <Loading/>
          </View>
        </View>
      )
    }

    if(groups.length === 0) {
      return(
        <View style={RequestPageStyles.container}>
          <View style={RequestPageStyles.titleSection}>
            <Icon name="send-o" size={24} color="#FFF" style={RequestPageStyles.mailIcon} />
            <Text style={RequestPageStyles.title}>Solicitações</Text>
          </View>
          <View>
            <Text style={{color: 'white', textAlign: 'center', justifyContent: 'center', alignSelf: 'center'}}>
              Usuário não possui solicitações.
            </Text>
          </View>
        </View>
      )
    }
    
    return (
      <View style={RequestPageStyles.container}>
          <View style={RequestPageStyles.titleSection}>
            <Icon name="send-o" size={24} color="#FFF" style={RequestPageStyles.mailIcon} />
            <Text style={RequestPageStyles.title}>Solicitações</Text>
          </View>

          <ScrollView style={RequestPageStyles.scrollView}>
            {this.state.groups.map((group) => (
              <RequestCard key={group.id} group={group} />
            ))}
          </ScrollView>
      </View>
    );
  }
}