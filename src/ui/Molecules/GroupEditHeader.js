import { Component } from "react";
import { Text, View } from "react-native";
import GroupEditHeaderStyles from "../../styles/Molecules/GroupEditHeaderStyles";

export default class GroupEditHeader extends Component{
    render(){
        return(
            <View style={GroupEditHeaderStyles.container}>
                <Text style={GroupEditHeaderStyles.title}>Editar grupo</Text>
            </View>
        )
    }
}   