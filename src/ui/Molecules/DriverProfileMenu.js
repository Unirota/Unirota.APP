import { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/Molecules/ProfileMenuStyles'
import BlueLine from '../Atoms/BlueLine'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class DriverProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.onRidesClick = this.onRidesClick.bind(this);
    this.onMyInfoClick = this.onMyInfoClick.bind(this);
    this.onCreateGroupClick = this.onCreateGroupClick.bind(this);
    this.onFAQClick = this.onFAQClick.bind(this);
  }

  handleLogout() {
    AsyncStorage.clear().then(() => {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'LoginPage' }],
      });
    });
  }

  onRidesClick() {
    console.log('foi pra tela de corridas')
  }

  onMyInfoClick() {
    console.log('foi pra tela minhas informações')
  }

  onCreateGroupClick() {
    this.props.navigation.navigate('RegisterGroupPage');
  }

  onFAQClick() {
    this.props.navigation.navigate('FaqPage');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <BlueLine />
        {/* Criar grupo */}
        <TouchableOpacity
          style={[styles.buttonContainer, styles.buttonFirstItem]}
          onPress={this.onCreateGroupClick}
        >
          <Ionicons
            name={'people'}
            size={24}
            color={'#fff'}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonText, styles.buttonFirstItemText]}>
            Criar grupo de carona
          </Text>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={'#fff'}
          />
        </TouchableOpacity>
        {/* CORRIDAS */}
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={this.onRidesClick}
        >
          <Ionicons
            name={'car'}
            size={24}
            color={'#1E1E1E'}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonText]}>
            Corridas
          </Text>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={'#1E1E1E'}
          />
        </TouchableOpacity>
        {/* minhas informações */}
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={this.onMyInfoClick}
        >
          <Ionicons
            name={'person'}
            size={24}
            color={'#1E1E1E'}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonText]}>
            Minhas informações
          </Text>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={'#1E1E1E'}
          />
        </TouchableOpacity>
        {/* FAQ */}
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={this.onFAQClick}
        >
          <Ionicons
            name={'help-circle'}
            size={24}
            color={'#1E1E1E'}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonText]}>
            FAQ
          </Text>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={'#1E1E1E'}
          />
        </TouchableOpacity>
        {/* SAIR */}
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={this.handleLogout}
        >
          <Ionicons
            name={'exit-outline'}
            size={24}
            color={'red'}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonText, styles.buttonColorRedText]}>
            Sair
          </Text>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={'red'}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
