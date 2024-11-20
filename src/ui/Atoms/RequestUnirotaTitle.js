import { Component } from 'react'
import { View, Text } from 'react-native'
import RequestUnirotaTitleStyles from '../../styles/Atoms/RequestUnirotaTitleStyles'

export default class RequestUnirotaTitle extends Component {
    render() {
        return (
            <View style={RequestUnirotaTitleStyles.titleContainer}>
                <Text style={[
                    RequestUnirotaTitleStyles.commonText,
                    RequestUnirotaTitleStyles.blueText]}>
                    Uni
                </Text>
                <Text style={[
                    RequestUnirotaTitleStyles.commonText,
                    RequestUnirotaTitleStyles.whiteText]}>
                    Rota
                </Text>
            </View>
        )
    }
}

