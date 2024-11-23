import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Modal, Image, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InfoGroupModalStyles from '../../styles/Molecules/InfoGroupModalStyles'
import GreyLineInfoGroupModal from '../Atoms/GreyLineInfoGroupModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import InviteService from '../../services/InviteService'

// falta implementar lógica da data de criação do grupo, qual motorista criou e n° participantes

export default class InviteModal extends Component {
  constructor(props) {
    super(props)
  }

  handleAccept = (inviteId) => {
    InviteService.AcceptInvite(inviteId)
    .then(() => {
      this.props.navigation.replace('GroupListPage');
    })
    .catch(() => {
      Alert.alert('Erro ao aceitar convite.')
    })
  }

  handleReject = (inviteId) => {
    InviteService.RefuseInvite(inviteId)
    .then(() => {
      this.props.navigation.replace('GroupListPage');
    })
    .catch(() => {
      Alert.alert('Erro ao recusar convite.')
    });
  }

  render() {
    const { group, isVisible, onClose } = this.props 
    const imageUrl = require('./../../../assets/images/carro-azul-icone.png')

    return (
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}
      >
        <View style={InfoGroupModalStyles.modalOverlay}>
          <View style={InfoGroupModalStyles.modalContent}>

            {/* <Image source={{ uri: group.imagem }} style={InfoGroupModalStyles.groupImage} /> */}
            {/* Só coloquei dessa forma da linha de baixo para eu poder ajustar, use a de cima para integrar */}
            <Image source={imageUrl} style={InfoGroupModalStyles.groupImage} />

            {/* Título e informações principais */}
            <Text style={InfoGroupModalStyles.modalTitle}>{group.nome}</Text>
            
            <GreyLineInfoGroupModal/>
            
            <Text style={InfoGroupModalStyles.modalText}>
              <Text style={InfoGroupModalStyles.boldText}>Motorista:</Text> {group.motorista} {"\n"}
              {group.participantes} {group.participantes === 1 ? 'participante' : 'participantes'}
            </Text>

            {/* Destino e nota */}
            <View style={InfoGroupModalStyles.infoBox}>
              <View style={InfoGroupModalStyles.infoRow}>
                <Icon name="location-on" size={20} color="#FFF" style={InfoGroupModalStyles.icon} />
                <Text style={InfoGroupModalStyles.infoText}>{group.destino}</Text>
              </View>
              <View style={InfoGroupModalStyles.infoRow}>
                <Icon name="access-time" size={20} color="#FFF" style={InfoGroupModalStyles.icon} />
                <Text style={InfoGroupModalStyles.infoText}>{new Date(group.horaInicio).getHours()}{':'}{new Date(group.horaInicio).getMinutes()}</Text>
                <View style={{ marginHorizontal: 20 }} />
                <Icon name="star" size={20} color="#FFD700" style={InfoGroupModalStyles.icon} />
                <Text style={InfoGroupModalStyles.infoText}>{group.nota}</Text>
              </View>
            </View>
            <Text style={InfoGroupModalStyles.footerText}>
              Grupo criado em {new Date(group.dataCriacao).toLocaleDateString()}
            </Text>

            {/* Container para os botões */}
            <View style={InfoGroupModalStyles.buttonContainer}>
              <View style={InfoGroupModalStyles.buttonWrapper}>
                <TouchableOpacity 
                  style={InfoGroupModalStyles.acceptButton}
                  onPress={() => this.handleAccept(group.id)}
                >
                  <Text style={InfoGroupModalStyles.acceptButtonText}>Aceitar</Text>
                </TouchableOpacity>
              </View>
              <View style={InfoGroupModalStyles.buttonWrapper}>
                <TouchableOpacity 
                  style={InfoGroupModalStyles.rejectButton}
                  onPress={() => this.handleReject(group.id)}
                >
                  <Text style={InfoGroupModalStyles.rejectButtonText}>Recusar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}