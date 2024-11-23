import { Component } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";

export default class GroupDataContainer extends Component {
    constructor(props) {
        super(props)
        this.renderMemberContainer = this.renderMemberContainer.bind(this)
    }

    renderMemberContainer = (data) => {
        return (
            <View style={styles.memberLabelContainer}>
                <Text style={styles.memberLabel}>{data.item.name}</Text>
            </View>
        )
    }

    renderItem = ({ item }) => {
        return item.component
    }

    renderMain() {
        let member = [{
            name: 'Você'
        },
        {
            name: 'John Doe'
        },
        {
            name: 'Bob Brown'
        },
        {
            name: 'Jane Doe '
        }
        ]
        return (
            <View style={styles.container}>

                <View style={styles.dataContainer}>
                    <Text style={styles.dataInput}>
                        Horário de início: 07:30
                    </Text>
                    <Text style={styles.dataInput}>
                        Destino: Unicesumar
                    </Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisci
                        elit. Nam dolor mauris, ultricies in metus id, vulput
                        pulvinar arcu. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis
                        egestas.
                    </Text>
                </View>

                <FlatList
                    style={styles.memberContainer}
                    data={member}
                    renderItem={(data) => this.renderMemberContainer(data)}
                    keyExtractor={(item, index) => index}
                />

                <TouchableOpacity style={styles.leaveGroupContainer}>
                    <Text style={styles.leaveGroupText}>
                        Sair do grupo
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    render() {

        let component = [{
            id: 1, component: this.renderMain()
        }]
        return (
            <FlatList
                data={component}
                renderItem={(item) => this.renderItem(item)}
            />
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dataContainer: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#00112B',
        borderRadius: 16,
        padding: 16,
        paddingTop: 24,
        paddingBottom: 24,
        borderColor: 'white',
        borderWidth: 0.5
    },
    dataInput: {
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        marginTop: 32,
        backgroundColor: 'white',
        width: '90%',
        height: 160,
        borderRadius: 16,
        padding: 16,
        paddingTop: 24,
        paddingBottom: 24,
        alignSelf: 'center'
    },
    leaveGroupContainer: {
        marginTop: 16,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        width: '90%'
    },
    leaveGroupText: {
        color: 'red',
        fontFamily: 'Inter',
        fontSize: 14
    },
    memberContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 16,
        alignSelf: 'center',
        marginTop: 16,
        height: 250
    },
    memberLabelContainer: {
        borderBottomColor: '#C3C3C3',
        borderBottomWidth: 1,
        padding: 16,
        height: 56
    },
    memberLabel: {
        fontFamily: 'Inter',
        fontSize: 14,
        color: 'black',
    }

})