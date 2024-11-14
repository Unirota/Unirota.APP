import { Component } from "react";
import { View } from "react-native";
import GroupListButtonInvites from "../Atoms/GroupListButtonInvites";
import GroupListButtonRequests from "../Atoms/GroupListButtonRequests";

export default class GroupListButtonRow extends Component {
    render() {
        return (
            <View style={{flexDirection: `row`}}>
                <GroupListButtonInvites />
                <GroupListButtonRequests />
            </View>
        )
    }
}