import { Component } from 'react'
import { View, Text } from 'react-native'
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles'

export default class UnirotaTitle extends Component {
    render() {
        return (
            <View style={UnirotaTitleStyles.titleContainer}>
                <Text style={[
                    UnirotaTitleStyles.commonText,
                    UnirotaTitleStyles.blueText]}>
                    Uni
                </Text>
                <Text style={[
                    UnirotaTitleStyles.commonText,
                    UnirotaTitleStyles.whiteText]}>
                    Rota
                </Text>
            </View>
        )
    }
}

