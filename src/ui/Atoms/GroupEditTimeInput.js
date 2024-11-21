import { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RegisterInputStyles from "../../styles/Atoms/RegisterInputStyles";

export default class GroupEditTimeInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            showTimePicker: false,
            selectedTime: null, // Inicialmente, nenhum horário está selecionado
        };
    }

    formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    onTimeChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.selectedTime;
        this.setState({ showTimePicker: false, selectedTime: currentDate });
        this.props.onChangeText(currentDate);
    };

    render() {
        return (
            <View style={{ marginBottom: 16}}>
                <TouchableOpacity
                    onPress={() => this.setState({ showTimePicker: true })}
                >
                    <Text style={RegisterInputStyles.inputDate}>
                        {this.state.selectedTime ? this.formatTime(this.state.selectedTime) : "Hora de início"}
                    </Text>
                </TouchableOpacity>
                {this.state.showTimePicker && (
                    <DateTimePicker
                        value={this.state.selectedTime || new Date()}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={this.onTimeChange}
                    />
                )}
            </View>
        )
    }
}