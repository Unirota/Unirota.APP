import { Component } from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import PhotoUserRegister from '../Atoms/PhotoUserRegister';
import styles from '../../styles/Organisms/Home/styles'
import NameGroupDriverInput from '../Atoms/NameGroupDriverInput';
import HourDriverInput from '../Atoms/HourDriverInput';
import ButtonRegisterGroup from '../Atoms/ButtonRegisterGroup';
import HeaderRegisterCreateGroup from './HeaderRegisterCreateGroup';
import QuantityPeopleGroup from '../Atoms/QuantityPeopleDriverInput';
import DestinyGroupInput from '../Atoms/DestinyDriverInput';
import DescriptionGroupInput from '../Atoms/DescriptionGroupInput';
import HourGroupInput from '../Atoms/HourDriverInput';


export default class FormRegisterGroup extends Component {
    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <HeaderRegisterCreateGroup /> },
            // { id: '2', component: <PhotoUserRegister /> },
            { id: '3', component: <NameGroupDriverInput /> },
            { id: '4', component: <QuantityPeopleGroup /> },
            { id: '5', component: <HourGroupInput /> },
            { id: '6', component: <DestinyGroupInput /> },
            { id: '7', component: <DescriptionGroupInput /> },
            { id: '8', component: <ButtonRegisterGroup /> },
            
        ];
        
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={Components}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.scrollContainer}
                />
                
            </View>
        );
    }
}