import { Component } from 'react';
import { FlatList, Image, View, Text } from 'react-native';
import UnirotaTitleStyles from '../../styles/Atoms/UnirotaTitleStyles';
import ImageGrupoRequest from '../Atoms/ImageGroupRequest';
import GroupRequestContainerStyle from '../../styles/Atoms/GroupRequestContainerStyle';


export default class GroupRequestContainer extends Component {
    renderItem = ({ item }) => item.component;

    render() {
        return (
            <View>
                <View style={UnirotaTitleStyles.titleContainer}>
                    <Text style={[UnirotaTitleStyles.commonText, UnirotaTitleStyles.blueText]}>
                        Uni
                    </Text>
                    <Text style={[UnirotaTitleStyles.commonText, UnirotaTitleStyles.whiteText]}>
                        Rota
                    </Text>
                </View>
                <View style={GroupRequestContainerStyle.container}>
                    <ImageGrupoRequest/>
                </View>
            </View>
        );
    }
}
