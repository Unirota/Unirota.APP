import { Component } from 'react'
import { View, FlatList } from 'react-native'
import ProfileMenuItem from '../Atoms/ProfileMenuItem'
import ProfileService from '../../services/ProfileService'
import styles from '../../styles/Molecules/ProfileMenuStyles'
import BlueLine from '../Atoms/BlueLine'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../Atoms/Loading'

export default class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      loading: true,
    };
  }

  
  handleLogout() {
    AsyncStorage.clear().then(() => {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'LoginPage' }],
      });
    });
  }
  
  renderMenuItem({ item, index }) {
    return (
      <ProfileMenuItem
      data={item}
      isFirstItem={index === 0}
      onLogout={item.id === '5' ? this.handleLogout : null}
      />
    );
  }
  
  componentDidMount() {
    const menuItems = ProfileService.getMenuItems();
    this.setState({ menuItems, loading: false });
  }

  render() {
    const { menuItems, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Loading/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <BlueLine />
        <FlatList
          data={menuItems}
          renderItem={this.renderMenuItem}
          keyExtractor={(item) =>{
            return item.id;
          }}
        />
      </View>
    )
  }
}
