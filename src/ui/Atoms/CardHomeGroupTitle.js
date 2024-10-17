import { Component } from 'react'
import { View, Text } from 'react-native'
import CardHomeGroupTitleStyles from '../../styles/Atoms/CardHomeGroupTitleStyles'

export default class CardHomeGroupTitle extends Component {
    render() {
        return (
            <View style={CardHomeGroupTitleStyles.titleContainer}>
                <Text style={[
                    CardHomeGroupTitleStyles.commonText,
                    CardHomeGroupTitleStyles.blackText]}>
                    Alguns
                </Text>
                <Text style={[
                    CardHomeGroupTitleStyles.commonText,
                    CardHomeGroupTitleStyles.blueText]}>
                    grupos
                </Text>
                <Text style={[
                    CardHomeGroupTitleStyles.commonText,
                    CardHomeGroupTitleStyles.blackText]}>
                    disponíveis
                </Text>
            </View>
        )
    }
}

