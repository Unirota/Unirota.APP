import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontProvider } from './src/provider/FontProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppService from './src/services/AppService'
import LoginPage from './src/ui/Organisms/Login';
import HomePage from './src/ui/Organisms/Home';
const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: null, // Começa nulo para indicar o loading
    };
  }

  async componentDidMount() {
    const email = "front@email.com"
    const password = "123456"
    const isAuthorized = await AppService.Login(email, password);
    this.setState({ isAuthorized });
  }

  render() {
    const { isAuthorized } = this.state;

    if (isAuthorized === null) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#00BBAA" />
        </View>
      );
    }

    let initialRoute = isAuthorized ? "HomePage" : "LoginPage";
    return (
      <FontProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FontProvider>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  }
});
