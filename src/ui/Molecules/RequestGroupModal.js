import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Modal, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RequestGroupModalStyles from '../../styles/Molecules/RequestGroupModalStyles'
import GreyLineInfoGroupModal from '../Atoms/GreyLineInfoGroupModal'
import { LinearGradient } from 'expo-linear-gradient'

// falta implementar lógica da data de criação do grupo, qual motorista criou e n° participantes

export default class RequestGroupModal extends Component {
  constructor(props) {
    super(props)
  }

  handleAccept = () => {
    console.log('Convite pendente')
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
        <View style={RequestGroupModalStyles.modalOverlay}>
          <View style={RequestGroupModalStyles.modalContent}>

            {/* <Image source={{ uri: group.imagem }} style={RequestGroupModalStyles.groupImage} /> */}
            {/* Só coloquei dessa forma da linha de baixo para eu poder ajustar, use a de cima para integrar */}
            <Image source={imageUrl} style={RequestGroupModalStyles.groupImage} />

            {/* Título e informações principais */}
            <Text style={RequestGroupModalStyles.modalTitle}>{group.nome}</Text>
            
            <GreyLineInfoGroupModal/>
            
            <Text style={RequestGroupModalStyles.modalText}>
              <Text style={RequestGroupModalStyles.boldText}>Motorista:</Text> {group.motorista} {"\n"}
              {group.participantes} {group.participantes === 1 ? 'participante' : 'participantes'}
            </Text>

            {/* Destino e nota */}
            <View style={RequestGroupModalStyles.infoBox}>
              <View style={RequestGroupModalStyles.infoRow}>
                <Icon name="location-on" size={20} color="#FFF" style={RequestGroupModalStyles.icon} />
                <Text style={RequestGroupModalStyles.infoText}>{group.destino === "" ? "Não definido" : group.destino}</Text>
              </View>
              <View style={RequestGroupModalStyles.infoRow}>
                <Icon name="access-time" size={20} color="#FFF" style={RequestGroupModalStyles.icon} />
                <Text style={RequestGroupModalStyles.infoText}>{new Date(group.horaInicio).getHours()}{':'}{new Date(group.horaInicio).getMinutes()}</Text>
                <View style={{ marginHorizontal: 20 }} />
                <Icon name="star" size={20} color="#FFD700" style={RequestGroupModalStyles.icon} />
                <Text style={RequestGroupModalStyles.infoText}>{group.nota}</Text>
              </View>
            </View>
            <Text style={RequestGroupModalStyles.footerText}>
              Grupo criado em {new Date(group.dataCriacao).toLocaleDateString()}
            </Text>

            {/* Container para os botões */}
            <View style={RequestGroupModalStyles.buttonContainer}>
              <View style={RequestGroupModalStyles.buttonWrapper}>
                <LinearGradient
                colors={['#008E86', '#007DF0']}
                style={RequestGroupModalStyles.pendingButton}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              >
                <TouchableOpacity 
                  style={{width: '100%', alignItems: 'center'}}
                  onPress={this.handleAccept}
                >
                  <Text style={RequestGroupModalStyles.pendingButtonText}>Pendente</Text>
                </TouchableOpacity>
              </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}