import { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import CardHomeGroupStyle from '../../styles/Molecules/CardHomeGroupStyle'
import CardHomeGroupTitle from '../Atoms/CardHomeGroupTitle'
import GroupService from '../../services/GroupService';
import Loading from '../Atoms/Loading';

export default class CardHomeGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupsData: null
        }
    }

    async ObterDadosHome(selectedDestiny) {
        const dados = await GroupService.GetHomeGroups(selectedDestiny);
        return dados.data;
    }

    async componentDidMount() {
        const dadosGrupos = await this.ObterDadosHome(this.props.selectedDestiny);
        
        if(dadosGrupos !== null){
          this.setState({ groupsData: dadosGrupos})
        }
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.selectedDestiny !== this.props.selectedDestiny) {
            this.setState({groupsData: null})
            const dadosGrupos = await this.ObterDadosHome(this.props.selectedDestiny);

            if (dadosGrupos !== null) {
                this.setState({ groupsData: dadosGrupos });
            }
        }
    }

    render() {
        const { groupsData } = this.state;

        if(groupsData === null) {
            return(
                <View style={CardHomeGroupStyle.container}>
                    <CardHomeGroupTitle />
                    <Loading/>
                </View>
            )
        }


        return (
            <View style={CardHomeGroupStyle.container}>
                <CardHomeGroupTitle />
                <FlatList
                    data={groupsData}
                    style={CardHomeGroupStyle.list}
                    renderItem={({ item }) => (
                        <View style={CardHomeGroupStyle.groupContainer}>
                            <Text style={CardHomeGroupStyle.font}>{item.nome}</Text>
                            <Text style={CardHomeGroupStyle.font}>Motorista: {item.motorista}</Text>
                            <View style={CardHomeGroupStyle.groupTextLast}>
                                <Text style={CardHomeGroupStyle.font}>Destino: {item.destino}</Text>
                                <Text style={CardHomeGroupStyle.font}>Horário: {new Date(item.horaInicio).getHours()}{':'}{new Date(item.horaInicio).getMinutes()}</Text>
                            </View>
                        </View>

                    )}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                />
            </View>
        )
    }
}