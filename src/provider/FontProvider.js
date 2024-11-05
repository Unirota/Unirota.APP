import React, { createContext, Component } from 'react'
import * as Font from 'expo-font'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
export const FontContext = createContext()

export class FontProvider extends Component {
  state = {
    isFontLoaded: false,
  }

  async componentDidMount() {
    await this.loadFonts()
  }

  loadFonts = async () => {
    await Font.loadAsync({
      'LexendExa-ExtraBold': require('../../assets/fonts/LexendExa-ExtraBold.ttf'),
      Inter: require('../../assets/fonts/Inter-18pt-Medium.ttf'),
    })
    this.setState({ isFontLoaded: true })
  }

  render() {
    const { isFontLoaded } = this.state

    return (
      <FontContext.Provider value={{ isFontLoaded }}>
        {isFontLoaded ? (
          this.props.children
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#00BBAA" />
          </View>
        )}
      </FontContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
