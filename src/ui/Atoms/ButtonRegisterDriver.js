import { LinearGradient } from "expo-linear-gradient"
import { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import ButtonLoginStyles from "../../styles/Atoms/ButtonLoginStyles"


export default class ButtonRegisterDriver extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}>
                    <LinearGradient style={ButtonLoginStyles.buttonRegisterGroup}
                        colors={['#008E86', '#007DF0']}
                        locations={[0.0, 1.0]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={ButtonLoginStyles.buttonLogin}>Enviar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}