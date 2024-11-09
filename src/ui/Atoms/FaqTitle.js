import { Component } from 'react'
import { View, Text } from 'react-native'
import FaqTitleStyles from '../../styles/Atoms/FaqTitleStyles'

export default class FaqTitle extends Component {
    render() {
        return (
            <View style={FaqTitleStyles.titleContainer}>
                <Text style={[
                    FaqTitleStyles.commonText,
                    FaqTitleStyles.blueText]}>
                    Como podemos
                </Text>
                <Text style={[
                    FaqTitleStyles.commonText,
                    FaqTitleStyles.whiteText]}>
                    ajudar?
                </Text>
            </View>
        )
    }
}

