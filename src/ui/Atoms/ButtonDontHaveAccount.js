import { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import ButtonLoginStyles from "../../styles/Atoms/ButtonLoginStyles"


export default class ButtonDontHaveAccount extends Component {

    render() {
        return (
            <View>
                <TouchableOpacity style={ButtonLoginStyles.ButtonDontHaveAccount}>
                        <Text style={ButtonLoginStyles.ButtonDontHaveAccountText}>Não tenho uma conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}