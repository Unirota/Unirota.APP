import { Component } from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import PhotoUserRegister from '../Atoms/PhotoUserRegister';
import styles from '../../styles/Organisms/Home/styles'
import NameGroupDriverInput from '../Atoms/NameGroupDriverInput';
import QuantityPeopleDriver from '../Atoms/QuantityPeopleDriverInput';
import HourDriverInput from '../Atoms/HourDriverInput';
import DestinyDriverInput from '../Atoms/DestinyDriverInput';
import DescriptionDriverInput from '../Atoms/DescriptionDriverInput';
import ButtonRegisterGroup from '../Atoms/ButtonRegisterGroup';
import HeaderRegisterCreateGroup from './HeaderRegisterCreateGroup';


export default class FormRegisterDriver extends Component {
    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <HeaderRegisterCreateGroup /> },
            { id: '2', component: <PhotoUserRegister /> },
            { id: '3', component: <NameGroupDriverInput /> },
            { id: '4', component: <QuantityPeopleDriver /> },
            { id: '5', component: <HourDriverInput /> },
            { id: '6', component: <DestinyDriverInput /> },
            { id: '7', component: <DescriptionDriverInput /> },
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