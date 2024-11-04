import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontProvider } from './src/provider/FontProvider'
import AppService from './src/services/AppService'
import LoginPage from './src/ui/Organisms/Login'
import HomePage from './src/ui/Organisms/Home'
import DriverProfilePage from './src/ui/Organisms/DriverProfile'
import ProfilePage from './src/ui/Organisms/Profile'
import SearchGroupPage from './src/ui/Organisms/Search'
const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthorized: null, // Começa nulo para indicar o loading
    }
  }

  async componentDidMount() {
    const isAuthorized = await AppService.AutomaticLogin()
    this.setState({ isAuthorized })
  }

  render() {
    const { isAuthorized } = this.state

    if (isAuthorized === null) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#00BBAA" />
        </View>
      )
    }

    let initialRoute = isAuthorized ? 'HomePage' : "LoginPage"

    return (
      <FontProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DriverProfilePage"
              component={DriverProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchGroupPage"
              component={SearchGroupPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FontProvider>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',

  },
})