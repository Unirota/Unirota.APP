import { LinearGradient } from "expo-linear-gradient"
import { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import ButtonLoginStyles from "../../styles/Atoms/ButtonLoginStyles"
import GroupRequestContainerStyle from "../../styles/Atoms/GroupRequestContainerStyle"

export default class ButtonRegisterGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            buttonText: 'Entrar no Grupo'
        };
    }

    handlePress = () => {
        this.setState((prevState) => {
            const isPressed = !prevState.isPressed;
            return {
                isPressed,
                buttonText: isPressed ? 'Pendente' : 'Entrar no Grupo' // Alterna o texto conforme a cor
            };
        });

        if (this.props.onPress) {
            this.props.onPress();
        }
    };

    render() {
        const buttonColors = this.state.isPressed ? ['#008E86', '#007DF0'] : ['#00B100', '#00B100'];

        return (
            <View>
                <TouchableOpacity onPress={this.handlePress}>
                    <LinearGradient
                        style={ButtonLoginStyles.buttonRegisterGroup}
                        colors={buttonColors}
                        locations={[0.0, 1.0]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={GroupRequestContainerStyle.buttonRequestGroup}>
                            {this.state.buttonText}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}
