import { Component } from "react";
import { FlatList, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import UnirotaTitle from "../../Atoms/UnirotaTitle";
import styles from "../../../styles/Organisms/GroupList/styles";
import NavigationFooter from "../../Molecules/NavigationFooter";
import GroupListButtonRow from "../../Molecules/GroupListButtonRow";
import GroupListCard from "../../Molecules/GroupListCard";

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
                    data={groups}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

    render() {
        let data = [
            { id: 1, component: <GroupListButtonRow /> },
            { id: 2, component: <GroupListCard/>},
            { id: 3, component: <GroupListCard/>},
            { id: 4, component: <GroupListCard/>}
        ]
        let groups = [
            {
                id: 1,
                name: "Grupo Alpha",
                descricao: "Thiago: isso aqui é um teste",
                horaInicio: "7:30",
                Local: "Unicesumar",
                Avaliacao: 4.9
            },
            {
                id: 2,
                name: "Grupo Beta",
                descricao: "Thiago: isso aqui é outro teste",
                horaInicio: "6:30",
                Local: "Unicesumar",
                Avaliacao: 3.9
            },
            {
                id: 3,
                name: "Grupo Omega",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                horaInicio: "5:30",
                Local: "Unicesumar",
                Avaliacao: 2.9
            },
        ]
        return (
            <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
                <UnirotaTitle />
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                />
                {/* <GroupListCard/> */}
                <View style={{ flex: 1 }}>
                </View>
                <NavigationFooter navigation={this.props.navigation} />
            </LinearGradient>
        )
    }
}