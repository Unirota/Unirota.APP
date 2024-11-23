import { Component } from 'react'
import { View, Text } from 'react-native'
import InviteUnirotaTitleStyles from '../../styles/Atoms/InviteUnirotaTitleStyles'

export default class InviteUnirotaTitle extends Component {
    render() {
        return (
            <View style={InviteUnirotaTitleStyles.titleContainer}>
                <Text style={[
                    InviteUnirotaTitleStyles.commonText,
                    InviteUnirotaTitleStyles.blueText]}>
                    Uni
                </Text>
                <Text style={[
                    InviteUnirotaTitleStyles.commonText,
                    InviteUnirotaTitleStyles.whiteText]}>
                    Rota
                </Text>
            </View>
        )
    }
}

