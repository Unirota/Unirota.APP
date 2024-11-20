import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import InviteCard from '../Molecules/InviteCard'
import InviteService from '../../services/InviteService'
import Icon from 'react-native-vector-icons/MaterialIcons';
import InvitePageStyles from '../../styles/Molecules/InvitePageStyles';


export default class PageInvite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    const groups = InviteService.getGroups();
    this.setState({ groups });
  }

  render() {
    const { navigation } = this.props;
    
    return (
      <View style={InvitePageStyles.container}>
          <View style={InvitePageStyles.titleSection}>
            <Icon name="mail" size={24} color="#FFF" style={InvitePageStyles.mailIcon} />
            <Text style={InvitePageStyles.title}>Convites</Text>
          </View>

          <ScrollView style={InvitePageStyles.scrollView}>
            {this.state.groups.map((group) => (
              <InviteCard key={group.id} group={group} />
            ))}
          </ScrollView>
      </View>
    );
  }
}