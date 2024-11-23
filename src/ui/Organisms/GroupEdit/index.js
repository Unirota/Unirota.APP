import { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GroupEditHeader from "../../Molecules/GroupEditHeader";
import GroupEditForm from "../../Molecules/GroupEditForm";

export default class GroupEditPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <LinearGradient colors={['#00112B', '#003A90']} style={{ flex: 1 }}>
                <GroupEditHeader />
                <GroupEditForm />
            </LinearGradient>

        )
    }
}