import { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/Atoms/GroupBadgeStyles'

export default class GroupBadge extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>motorista</Text>
            </View>
        )
    }
}