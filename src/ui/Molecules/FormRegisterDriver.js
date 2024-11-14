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
import NumberLicenseInput from '../Atoms/NumberLicenseInput';
import CarNumberInput from '../Atoms/CarNumberInput';
import CarColorInput from '../Atoms/CarColorInput';
import TypeCarInput from '../Atoms/TypeCarInput';
import DescriptionDriverInput from '../Atoms/DescriptionDriverInput';
import ButtonRegisterDriver from '../Atoms/ButtonRegisterDriver';


export default class FormRegisterGroup extends Component {
    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <HeaderRegisterCreateGroup /> },
            { id: '2', component: <NumberLicenseInput /> },
            { id: '3', component: <CarNumberInput /> },
            { id: '4', component: <CarColorInput /> },
            { id: '5', component: <TypeCarInput /> },
            { id: '6', component: <DescriptionDriverInput /> },
            { id: '7', component: <ButtonRegisterDriver /> },
            
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