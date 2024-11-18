import { Component } from "react"
import { View, Text, Image } from "react-native"
import { EditProfileAvatarStyles } from "../../styles/Atoms/EditProfileAvatarStyles"
import GroupRequestContainerStyle from "../../styles/Atoms/GroupRequestContainerStyle"
import BlueLineRegister from "./BlueLineRegister"
import BlueLineRegisterStyles from "../../styles/Atoms/BlueLineRegisterStyles"
import ButtonRegisterGroups from "./ButtonRequestGroups"

export default class ImageGrupoRequest extends Component {
    render() {
        return (
            <View style={GroupRequestContainerStyle.itensGroupRequest}>
                <Image
                    source={require('../../../assets/images/IconCameraUser.png')}
                    style={GroupRequestContainerStyle.cameraIcon}
                />
                <Text style={GroupRequestContainerStyle.titleGroup}>Grupo Alpha</Text>
                <View style={BlueLineRegisterStyles.greyLineRegister} />
                <Text style={GroupRequestContainerStyle.subTitleGroup}>
                    Motorista:
                    <Text style={GroupRequestContainerStyle.subTitleDriver}>
                        Thiago Alves
                    </Text>
                </Text>
                <Text style={GroupRequestContainerStyle.subTitleDriver}>
                    3 participantes
                </Text>
                <View style={GroupRequestContainerStyle.infosGroup}>
                    <View style={GroupRequestContainerStyle.row2}>
                        <Image
                            source={require('../../../assets/images/Localizacao.png')}
                            style={GroupRequestContainerStyle.localizationIcon}
                        />
                        <Text style={GroupRequestContainerStyle.textLocal}>Unicesumar - Maringá</Text>
                    </View>
                    <View style={GroupRequestContainerStyle.row}>
                        <Image
                            source={require('../../../assets/images/Hour.png')}
                            style={GroupRequestContainerStyle.localizationIcon}
                        />
                        <Text style={GroupRequestContainerStyle.textHour}>7:30</Text>
                        <Text style={GroupRequestContainerStyle.textStars}>⭐ 4.9</Text>
                    </View>


                </View>
                <Text style={GroupRequestContainerStyle.textDateCreate}>
                    Grupo criado em 20 de fev de 2024
                </Text>
                <ButtonRegisterGroups />
            </View>
        )
    }
}
