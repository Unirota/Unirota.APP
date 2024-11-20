import { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import UnirotaTitle from "../../Atoms/UnirotaTitle";
import styles from "../../../styles/Organisms/GroupList/styles";
import NavigationFooter from "../../Molecules/NavigationFooter";
import GroupListButtonRow from "../../Molecules/GroupListButtonRow";
import GroupListCard from "../../Molecules/GroupListCard";
import GroupService from "../../../services/GroupService";
import Loading from "../../Atoms/Loading";

export default class GroupListPage extends Component {
    constructor(props) {
        super(props)
        this.renderItem = this.renderItem.bind(this);

        this.state = {
            groups: null
        }
    }

    async ObterDados() {
        const dados = await GroupService.GetUserGroups();
        return dados.data;
    }

    async componentDidMount() {
        const dadosGrupos = await this.ObterDados();

        if(dadosGrupos !== null) {
            this.setState({groups: dadosGrupos});
        }
    }

    renderItem = ({ item }) => {
        return (
            <GroupListCard
                id={item.id}
                nome={item.nome}
                ultimaMensagem={item.ultimaMensagem}
                motorista={item.motorista}
                destino={item.destino}
                horaInicio={item.horaInicio}
                nota={item.nota}
                navigation={this.props.navigation}
            />
        )
    }

    render() {
        const { groups } = this.state;
        
        if(groups === null) {
            return (
                <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
                    <UnirotaTitle />
                    <Loading/>
                    <NavigationFooter navigation={this.props.navigation} />
                </LinearGradient>
            )
        }

        if(groups.length === 0) {
            return (
                <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
                    <UnirotaTitle />
                    <GroupListButtonRow/>
                    <Text style={styles.usuarioSemGruposText}>Usuário não está em nenhum grupo.</Text>
                    <View style={{ flex: 1 }}>
                    </View>
                    <NavigationFooter navigation={this.props.navigation} />
                </LinearGradient>
            )
        }

        return (
            <LinearGradient colors={['#00112B', '#003A90']} style={styles.gradient}>
                <UnirotaTitle />
                <GroupListButtonRow/>
                <FlatList
                    data={groups}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />
                <View style={{ flex: 1 }}>
                </View>
                <NavigationFooter navigation={this.props.navigation} />
            </LinearGradient>
        )
    }
}