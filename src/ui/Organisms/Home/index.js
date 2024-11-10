import { Component } from 'react'
import { FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import UnirotaTitle from '../../Atoms/UnirotaTitle'
import CardDestiny from '../../Molecules/CardDestiny';
import styles from '../../../styles/Organisms/Home/styles';
import CardHomeGroup from '../../Molecules/CardHomeGroup';
import NavigationFooter from '../../Molecules/NavigationFooter';

export default class HomePage extends Component {
    renderItem = ({ item }) => item.component;
    render() {
        const Components = [
            { id: '1', component: <UnirotaTitle /> },
            { id: '2', component: <CardDestiny /> },
            { id: '3', component: <CardHomeGroup /> },
        ];
        return (
            <LinearGradient
                colors={['#00112B', '#003A90']}
                style={styles.gradient}
            >
                    <FlatList
                        data={Components}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.scrollContainer}
                    />
                <NavigationFooter navigation={this.props.navigation}/>
            </LinearGradient>
        )
    }
}