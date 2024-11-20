import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RequestCard from './RequestCard';
import RequestService from '../../services/RequestService';
import Icon from 'react-native-vector-icons/FontAwesome';
import RequestPageStyles from '../../styles/Molecules/RequestPageStyles';


export default class RequestInvite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    const groups = RequestService.getGroups();
    this.setState({ groups });
  }

  render() {
    const { navigation } = this.props;
    
    return (
      <View style={RequestPageStyles.container}>
          <View style={RequestPageStyles.titleSection}>
            <Icon name="send-o" size={24} color="#FFF" style={RequestPageStyles.sendlIcon} />
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