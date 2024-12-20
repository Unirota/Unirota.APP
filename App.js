import { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontProvider } from './src/provider/FontProvider'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontProvider } from './src/provider/FontProvider'
import AppService from './src/services/AppService'
import LoginPage from './src/ui/Organisms/Login'
import HomePage from './src/ui/Organisms/Home'
import DriverProfilePage from './src/ui/Organisms/DriverProfile'
import ProfilePage from './src/ui/Organisms/Profile'
import SearchGroupPage from './src/ui/Organisms/Search'
import Loading from './src/ui/Atoms/Loading'
import FaqPage from './src/ui/Organisms/Faq'
import InvitePage from './src/ui/Organisms/Invite'
import EditProfilePage from './src/ui/Organisms/EditProfile'
import GroupRequestPage from './src/ui/Organisms/GroupRequest'
import GroupListPage from './src/ui/Organisms/GroupList'
import RequestPage from './src/ui/Organisms/Request'
import RegisterDriverPage from './src/ui/Organisms/RegisterDriver'
import RegisterGroupPage from './src/ui/Organisms/RegisterGroup'
import GroupDataPage from './src/ui/Organisms/GroupData'
import ChatPage from './src/ui/Organisms/Chat'
import GroupEditPage from './src/ui/Organisms/GroupEdit'
import SendInvitePage from './src/ui/Organisms/SendInvite'
import RegisterPage from './src/ui/Organisms/Register'

const Stack = createNativeStackNavigator()

export default class App extends Component {
  constructor(props) {
    super(props)
    super(props)
    this.state = {
      isAuthorized: null, // Começa nulo para indicar o loading
    }
    }
  }

  async componentDidMount() {
    const isAuthorized = await AppService.AutomaticLogin()
    this.setState({ isAuthorized })
    const isAuthorized = await AppService.AutomaticLogin()
    this.setState({ isAuthorized })
  }

  render() {
    const { isAuthorized } = this.state
    const { isAuthorized } = this.state

    if (isAuthorized === null) {
      return (
        <Loading />
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
              name="RegisterPage"
              component={RegisterPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DriverProfilePage"
              component={DriverProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfilePage"
              component={EditProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchGroupPage"
              component={SearchGroupPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaqPage"
              component={FaqPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InvitePage"
              component={InvitePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupRequestPage"
              component={GroupRequestPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterGroupPage"
              component={RegisterGroupPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterDriverPage"
              component={RegisterDriverPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupListPage"
              component={GroupListPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestPage"
              component={RequestPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupDataPage"
              component={GroupDataPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatPage"
              component={ChatPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupEditPage"
              component={GroupEditPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendInvitePage"
              component={SendInvitePage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FontProvider>
    )
  }
}