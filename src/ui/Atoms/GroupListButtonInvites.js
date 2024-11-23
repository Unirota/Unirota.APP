import { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import GroupListButtonInvitesStyles from "../../styles/Atoms/GroupListButtonInvitesStyles";

export default class GroupListButtonInvites extends Component {
    constructor(props) {
        super(props)
        this.handleInvitesPageClick = this.handleInvitesPageClick.bind(this)
    }

    handleInvitesPageClick() {
        this.props.navigation.navigate('InvitePage')
    }

    render() {
        return (
            <View style={GroupListButtonInvitesStyles.container}>
                <TouchableOpacity onPress={this.handleInvitesPageClick} style={{ flexDirection: `row`, width: '100%' }}>
                    <Image
                        style={{ marginLeft: 16, marginRight: 8, alignSelf: 'center' }}
                        source={require('./../../../assets/images/MessageIcon.png')}
                    />
                    <Text style={{ alignSelf: 'center', color: 'white', fontWeight: '600' }}>Convites</Text>
                </TouchableOpacity>
            </View>
        )
    }
}