import { Component } from "react";
import { TextInput, View } from "react-native";
import RegisterInputStyles from "../../styles/Atoms/RegisterInputStyles";

export default class GroupEditNameInput extends Component {
    render() {
        return (
            <View style={{ marginTop: 32, marginBottom: 32}}>
                <TextInput
                    style={[RegisterInputStyles.input, {fontWeight: 'bold'}]}
                    placeholderTextColor='black'
                    placeholder="Nome do grupo"
                />
            </View>
        )
    }
}