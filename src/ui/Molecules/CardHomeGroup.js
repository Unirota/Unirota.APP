import { Component } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import CardHomeGroupStyle from '../../styles/Molecules/CardHomeGroupStyle'
import CardHomeGroupTitle from '../Atoms/CardHomeGroupTitle'

export default class CardHomeGroup extends Component {
    render() {
        const grupoData = [
            {
                id: 1,
                nome: "Grupo Alpha",
                motorista: "João Pedro",
                Destino: "Unicesumar",
                Horario: "18:30"
            },
            {
                id: 2,
                nome: "Grupo Beta",
                motorista: "Maria Luiza",
                Destino: "UEM",
                Horario: "12:00"
            },
            {
                id: 3,
                nome: "Grupo Primeiro",
                motorista: "José Carlos",
                Destino: "Uninga",
                Horario: "09:00"
            }
        ]
        return (
            <View style={CardHomeGroupStyle.container}>
                <CardHomeGroupTitle />
                <FlatList
                    data={grupoData}
                    style={CardHomeGroupStyle.list}
                    renderItem={({ item }) => (
                        <View style={CardHomeGroupStyle.groupContainer}>
                            <Text style={CardHomeGroupStyle.font}>{item.nome}</Text>
                            <Text style={CardHomeGroupStyle.font}>Motorista: {item.motorista}</Text>
                            <View style={CardHomeGroupStyle.groupTextLast}>
                                <Text style={CardHomeGroupStyle.font}>Destino: {item.Destino}</Text>
                                <Text style={CardHomeGroupStyle.font}>Horário: {item.Horario}</Text>
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