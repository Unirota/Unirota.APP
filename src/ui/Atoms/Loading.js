import { Component } from "react";
import { View,StyleSheet,ActivityIndicator } from "react-native";

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#00BBAA" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',

  },
})