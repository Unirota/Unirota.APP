import { Component } from "react";
import GroupEditNameInput from "../Atoms/GroupEditNameInput";
import GroupEditTimeInput from "../Atoms/GroupEditTimeInput";
import { View } from "react-native";
import GroupEditDestinationInput from "../Atoms/GroupEditDestinationInput";
import GroupEditDescriptionInput from "../Atoms/GroupEditDescriptionInput";
import ButtonEditGroup from "../Atoms/ButtonEditGroup";

export default class GroupEditForm extends Component{
    render(){
        return(
            <View>
                <GroupEditNameInput/>
                <GroupEditTimeInput/>
                <GroupEditDestinationInput/>
                <GroupEditDescriptionInput/>
                <ButtonEditGroup/>
            </View>
        )
    }
}