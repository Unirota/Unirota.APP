import { Component } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import CarRegisterStyles from '../../styles/Atoms/CarRegisterStyles';
import { TouchableOpacity } from 'react-native';

export default class TypeCarInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            modalVisible: false,
            states: [
                { id: 8, name: 'Hatch' },
                { id: 9, name: 'Sedã' },
                { id: 10, name: 'SUV' },
                { id: 11, name: 'Picape' },
                { id: 12, name: 'Minivan' },
                { id: 13, name: 'Van' },
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
                            {this.state.selectedState ? this.state.selectedState.name : 'Carroceria do veículo                  ▼'}
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