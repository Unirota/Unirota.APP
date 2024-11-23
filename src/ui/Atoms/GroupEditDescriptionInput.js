import { Component } from "react";
import { TextInput, View } from "react-native";
import RegisterInputStyles from "../../styles/Atoms/RegisterInputStyles";

export default class GroupEditDescriptionInput extends Component {
    render() {
        return (
            <View style={{ marginBottom: 32}}>
                <TextInput
                    style={[RegisterInputStyles.input, {fontWeight: 'bold', height: 160 }]}
                    placeholderTextColor='black'
                    placeholder="Descrição"
                    multiline={true}
                    numberOfLines={6}
                />
            </View>
        )
    }
}