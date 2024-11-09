import { Component } from 'react'
import { FlatList } from 'react-native'
import { View, Text, Image } from 'react-native'
import PhotoUserRegister from '../Atoms/PhotoUserRegister';
import NameRegisterInput from '../Atoms/NameRegisterInput';
import CPFRegisterInput from '../Atoms/CPFRegisterInput';
import DateRegisterInput from '../Atoms/DateRegisterInput';
import EmailInputRegister from '../Atoms/EmailInputRegister';
import SenhaInputRegister from '../Atoms/SenhaInputRegister';
import SenhaConfirmInputRegister from '../Atoms/SenhaConfirmInputRegister';
import styles from '../../styles/Organisms/Home/styles'
import HeaderRegister from './HeaderRegister';
import BlueLineRegister from '../Atoms/BlueLineRegister';
import AdressRegisterInput from '../Atoms/AdressRegisterInput';
import NeighborhoodRegisterInput from '../Atoms/NeighborhoodRegisterInput';
import ComplementRegisterInput from '../Atoms/ComplementRegisterInput';
import CEPRegisterInput from '../Atoms/CEPRegisterInput';
import CityRegisterInput from '../Atoms/CityRegisterInput';
import StateRegisterInput from '../Atoms/StateRegisterInput';
import ButtonRegister from '../Atoms/ButtonRegister';
import ButtonHaveAccount from '../Atoms/ButtonHaveAccount';

export default class FormRegister extends Component {
    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <HeaderRegister /> },
            { id: '2', component: <PhotoUserRegister /> },
            { id: '3', component: <NameRegisterInput /> },
            { id: '4', component: <CPFRegisterInput /> },
            { id: '5', component: <DateRegisterInput /> },
            { id: '6', component: <EmailInputRegister /> },
            { id: '7', component: <SenhaInputRegister /> },
            { id: '8', component: <SenhaConfirmInputRegister /> },
            { id: '9', component: <BlueLineRegister /> },
            { id: '10', component: <AdressRegisterInput /> },
            { id: '11', component: <NeighborhoodRegisterInput /> },
            { id: '12', component: <ComplementRegisterInput /> },
            { id: '13', component: <CEPRegisterInput /> },
            { id: '14', component: <CityRegisterInput /> },
            { id: '15', component: <StateRegisterInput /> },
            { id: '16', component: <ButtonRegister /> },
            { id: '17', component: <ButtonHaveAccount /> },
            
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