import { Component } from "react";
import { TextInput, View } from "react-native";
import RegisterInputStyles from "../../styles/Atoms/RegisterInputStyles";

export default class GroupEditDestinationInput extends Component {
    render() {
        return (
            <View style={{ marginBottom: 32}}>
                <TextInput
                    style={[RegisterInputStyles.input, {fontWeight: 'bold'}]}
                    placeholderTextColor='black'
                    placeholder="Destino"
                />
            </View>
        )
    }
}