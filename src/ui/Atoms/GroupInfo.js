import { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/Atoms/GroupInfoStyles'

export default class GroupInfo extends Component {
    render() {
        const { years, rides } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Usuário há {years} anos
                </Text>
                <Text style={styles.text}>
                    {rides} corridas
                </Text>
            </View>
        )
    }
}