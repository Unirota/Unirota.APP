import { Component } from 'react'
import { View, Text } from 'react-native'
import CardDestinyTitleStyles from '../../styles/Atoms/CardDestinyTitleStyles'

export default class CardDestinyTitle extends Component {
    render() {
        return (
            <View style={CardDestinyTitleStyles.titleContainer}>
                <Text style={[
                    CardDestinyTitleStyles.commonText,
                    CardDestinyTitleStyles.blackText]}>
                    Alguns
                </Text>
                <Text style={[
                    CardDestinyTitleStyles.commonText,
                    CardDestinyTitleStyles.blueText]}>
                    destinos
                </Text>
                <Text style={[
                    CardDestinyTitleStyles.commonText,
                    CardDestinyTitleStyles.blackText]}>
                    disponíveis
                </Text>
            </View>
        )
    }
}

