import { Component } from 'react'
import { Text, View } from 'react-native'
import CardDestinyCityLabelStyles from '../../styles/Atoms/CardDestinyCityLabelStyles'

export default class CardDestinyCityLabel extends Component {
    render() {
        const { city } = this.props.data
        return (
            <View>
                <Text style={CardDestinyCityLabelStyles.text}>{city}</Text>
            </View>
        )
    }
}