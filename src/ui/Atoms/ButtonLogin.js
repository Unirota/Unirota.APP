import { LinearGradient } from "expo-linear-gradient"
import { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import ButtonLoginStyles from "../../styles/Atoms/ButtonLoginStyles"


export default class ButtonLogin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}>
                    <LinearGradient style={ButtonLoginStyles.button}
                        colors={['#008E86', '#007DF0', '#003585']}
                        locations={[0.0, 0.5, 1.0]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={ButtonLoginStyles.buttonLogin}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}