import { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';
import LoginInputStyles from '../../styles/Atoms/LoginInputStyles';
import RegisterInputStyles from '../../styles/Atoms/RegisterInputStyles';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';

export default class DateRegisterInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null, // Inicialmente, a data é null
            show: false,
        };
    }

    onChange = (event, selectedDate) => {
        if (event.type === "set") {
            // Atualiza a data somente se a ação for de confirmação ("set")
            const currentDate = selectedDate || this.state.date;
            this.setState({ show: false, date: currentDate });
        } else {
            // Fecha o picker se a ação for de cancelamento ("dismissed")
            this.setState({ show: false });
        }
    };

    showDatePicker = () => {
        this.setState({ show: true });
    };

    render() {
        const { date, show } = this.state;
        const displayDate = date ? date.toLocaleDateString('pt-BR') : '';

        return (
            <View>
                <TouchableOpacity onPress={this.showDatePicker}>
                    <TextInput
                        style={RegisterInputStyles.input}
                        placeholder="Data de Nascimento"
                        placeholderTextColor="black"
                        value={displayDate}
                        editable={false}
                    />
                </TouchableOpacity>
                {show && (
                    <RNDateTimePicker
                        locale="pt-BR"
                        mode="date"
                        value={date || new Date()}
                        display="spinner"
                        onChange={this.onChange}
                    />
                )}
            </View>
        );
    }
}