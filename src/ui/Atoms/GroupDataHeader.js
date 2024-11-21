import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GroupDataAvatarHeaderStyles } from '../../styles/Atoms/GroupDataAvatarHeaderStyles'
import { GrupoDataHeaderStyles } from '../../styles/Atoms/GrupoDataHeaderStyles'


//uma view geral dentro dela icone, titulo do grupo e quantidade de membro. Para cada um deles vai ter sua view 

export default class GroupDataHeader extends Component {
    render() {
      return (
        <View style={GroupDataAvatarHeaderStyles.container}>
          <View style={GroupDataAvatarHeaderStyles.icongroupdata}>
  
          </View>
          <View style={GrupoDataHeaderStyles.textgroupname}>
            <Text style={GrupoDataHeaderStyles.firstTitle}>Grupo Alpha</Text>
          </View>
          <View style={GrupoDataHeaderStyles.textgroupmembers}>
            <Text style={GrupoDataHeaderStyles.secondTitle}>4 membros</Text>
          </View>
        </View>
      )
    }
  }