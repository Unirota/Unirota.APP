import { Component } from "react";
import { FlatList, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import UnirotaTitle from "../../Atoms/UnirotaTitle";
import styles from "../../../styles/Organisms/GroupList/styles";
import NavigationFooter from "../../Molecules/NavigationFooter";
import GroupListButtonRow from "../../Molecules/GroupListButtonRow";

export default class GroupListPage extends Component {
    constructor(props) {
        super(props)
        this.renderItem = this.renderItem.bind(this)
    }

    renderItem = ({ item }) => {
        return item.component
    }

    renderCards = () => {
        return(
            <View>
                <FlatList
                    
                />
            </View>
        )
    }

    render() {
        let data = [
            { id: 1, component: <GroupListButtonRow /> },
            // { id: 2, component: </>}
        ]
        return (
            <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
                <UnirotaTitle />
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                />
                <View style={{ flex: 1 }}>
                </View>
                <NavigationFooter navigation={this.props.navigation} />
            </LinearGradient>
        )
    }
}