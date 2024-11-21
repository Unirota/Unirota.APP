import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
export default class GroupDataHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Dados do grupo</Text>
        </View>
        <View>
          <Text style={styles.groupName}>Grupo Alpha</Text>
        </View>
        <View>
          <Text style={styles.members}>4 membros</Text>
        </View>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    marginBottom: 40
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Inter',
    marginBottom: 40
  },
  groupName: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'Inter'
  },
  members: {
    color: '#C3C3C3',
    alignSelf: 'center',
    fontSize: 16,
  }
})