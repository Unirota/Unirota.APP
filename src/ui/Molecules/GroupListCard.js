import { Component } from "react";
import { View, Text, Image } from "react-native";
import GroupListCardStyles from "../../styles/Molecules/GroupListCardStyles";
import { TouchableOpacity } from "react-native";

export default class GroupListCard extends Component {
    render() {
        const { id, nome, destino, ultimaMensagem, horaInicio, nota, navigation } = this.props;

        return (
            <TouchableOpacity onPress={() => navigation.navigate('ChatPage', { id, nome })}>
                <View style={GroupListCardStyles.container}>
                    {/* card title */}
                    <View style={GroupListCardStyles.header}>
                        <Text style={[GroupListCardStyles.font, GroupListCardStyles.title]}>{nome}</Text>
                        {/* time container */}
                        <View style={GroupListCardStyles.hourContainer}>
                            <Image
                                source={require('./../../../assets/images/ClockIcon.png')}
                                style={GroupListCardStyles.image}
                            />
                            <Text style={GroupListCardStyles.font}>{new Date(horaInicio).getHours()}{':'}{new Date(horaInicio).getMinutes()}</Text>
                        </View>
                    </View>
                    {/* description container */}
                    <View style={GroupListCardStyles.description}>
                        <Text
                            style={GroupListCardStyles.font}
                            numberOfLines={2}
                        >{ultimaMensagem == "" ? 'Ainda não há mensagens neste grupo.' : ultimaMensagem}</Text>
                    </View>
                    <View style={GroupListCardStyles.blackLine}></View>
                    <View style={GroupListCardStyles.header}>
                        {/* location container */}
                        <View style={GroupListCardStyles.footerContainer}>
                            <Image
                                source={require('./../../../assets/images/locationPinIcon.png')}
                                style={GroupListCardStyles.image}
                            />
                            <Text style={GroupListCardStyles.font}>{destino}</Text>
                        </View>
                        {/* rating container */}
                        <View style={GroupListCardStyles.footerContainer}>
                            <Image
                                source={require('./../../../assets/images/ratingIcon.png')}
                                style={GroupListCardStyles.image}
                            />
                            <Text style={GroupListCardStyles.font}>{nota}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}