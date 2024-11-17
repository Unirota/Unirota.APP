import { Component } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import CarRegisterStyles from '../../styles/Atoms/CarRegisterStyles';
import { TouchableOpacity } from 'react-native';

export default class CarColorInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            modalVisible: false,
            states: [
                { id: 14, name: 'Vermelho' },
                { id: 15, name: 'Azul' },
                { id: 16, name: 'Verde' },
                { id: 17, name: 'Preto' },
                { id: 18, name: 'Branco' },
                { id: 19, name: 'Prata' },
                { id: 20, name: 'Cinza' },
                { id: 21, name: 'Amarelo' },
                { id: 22, name: 'Laranja' },
                { id: 23, name: 'Rosa' },
                { id: 24, name: 'Outro' },
            ],
            selectedState: null,
            selectedColor: '',
        };
    }
    openStatesModal = () => {
        this.setState({ modalVisible: true });
    };
    closeStatesModal = () => {
        this.setState({ modalVisible: false });
    };
    selectState = (state) => {
        this.setState({ selectedState: state, selectedColor: state.name });
        this.closeStatesModal();
    };
    render() {
        return (
            <View>
                <View style={CarRegisterStyles.container}>
                    <TouchableOpacity onPress={this.openStatesModal}>
                        <Text style= {CarRegisterStyles.input}>
                            {this.state.selectedState ? this.state.selectedState.name : 'Cor do veículo                               ▼'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    transparent={true}
                    visible={this.state.modalVisible}
                    animationType="slide"
                >
                    <View style={CarRegisterStyles.modalContainer}>
                        <View style={CarRegisterStyles.modalContent}>
                            <FlatList
                                data={this.state.states}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => this.selectState(item)}>
                                        <Text style={{ padding: 15 }}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                            <TouchableOpacity onPress={this.closeStatesModal} style={{ padding: 15, alignItems: 'center' }}>
                                <Text style={{ color: 'blue' }}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}