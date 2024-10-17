import { Component } from 'react'
import { Text, View } from 'react-native'
import CardDestinyDestinyLabelStyles from '../../styles/Atoms/CardDestinyDestinyLabelStyles'

export default class CardDestinyDestinyLabel extends Component {
    render() {
        const { destiny } = this.props.data
        return (
            <View>
                <Text style={CardDestinyDestinyLabelStyles.text}>{destiny}</Text>
            </View>
        )
    }
}