import { Component } from 'react'
import { View, Text } from 'react-native'
import ProfileUnirotaTitleStyles from '../../styles/Atoms/ProfileUnirotaTitleStyles'

export default class ProfileUnirotaTitle extends Component {
    render() {
        return (
            <View style={ProfileUnirotaTitleStyles.titleContainer}>
                <Text style={[
                    ProfileUnirotaTitleStyles.commonText,
                    ProfileUnirotaTitleStyles.blueText]}>
                    Uni
                </Text>
                <Text style={[
                    ProfileUnirotaTitleStyles.commonText,
                    ProfileUnirotaTitleStyles.whiteText]}>
                    Rota
                </Text>
            </View>
        )
    }
}

