import { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import NavigationFooterStyles from '../../styles/Molecules/NavigationFooterStyles'

export default class NavigationFooter extends Component {
    render() {
        return (
            <View style={NavigationFooterStyles.footer}>
                <TouchableOpacity style={NavigationFooterStyles.button}>
                    <Text style={NavigationFooterStyles.buttonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={NavigationFooterStyles.button}>
                    <Text style={NavigationFooterStyles.buttonText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={NavigationFooterStyles.button}>
                    <Text style={NavigationFooterStyles.buttonText}>Messages</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={NavigationFooterStyles.button}>
                    <Text style={NavigationFooterStyles.buttonText}>Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}