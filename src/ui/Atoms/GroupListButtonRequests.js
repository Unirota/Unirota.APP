import { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import GroupListButtonRequestsStyles from "../../styles/Atoms/GroupListButtonRequestsStyles";

export default class GroupListButtonRequests extends Component {
    constructor(props) {
        super(props)
        this.handleRequestPageClick = this.handleRequestPageClick.bind(this)
    }

    handleRequestPageClick() {
        this.props.navigation.navigate('RequestPage')
    }
    render() {
        return (
            <View style={GroupListButtonRequestsStyles.container}>
                <TouchableOpacity onPress={this.handleRequestPageClick} style={{ flexDirection: `row`, width: '100%' }}>
                    <Image
                        style={{ marginLeft: 16, marginRight: 8, alignSelf: 'center' }}
                        source={require('./../../../assets/images/RequestIcon.png')}
                    />
                    <Text style={{ alignSelf: 'center', color: '#1E1E1E', fontWeight: '600' }}>Solicitações</Text>
                </TouchableOpacity>
            </View>
        )
    }
}