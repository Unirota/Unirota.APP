import { Component } from 'react'
import { FlatList, View } from 'react-native'
import HomePageService from '../../services/HomePageService'
import CardDestinyStyles from '../../styles/Molecules/CardDestinyStyles'
import CardDestinyTitle from '../Atoms/CardDestinyTitle'
import CardDestinyImage from '../Atoms/CardDestinyImage'
import CardDestinyDestinyLabel from '../Atoms/CardDestinyDestinyLabel'
import CardDestinyCityLabel from '../Atoms/CardDestinyCityLabel'
import { TouchableOpacity } from 'react-native'
export default class CardDestiny extends Component {
    handleSelect(item) {
        this.props.onDestinySelect(item.destiny);
    }

    render() {
        const destinyData = HomePageService.getDestinyData()
        const groupData = HomePageService.getGroupData()
        return (
            <View style={CardDestinyStyles.container}>

                <CardDestinyTitle />

                {/* image container */}
                <FlatList
                    data={destinyData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={CardDestinyStyles.imageContainer} onPress={() => this.handleSelect(item)}>
                            <CardDestinyImage data={item} />
                            <CardDestinyDestinyLabel data={item} />
                            <CardDestinyCityLabel data={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                />

                {/* TODO: group container */}
                <FlatList
                    data={groupData}
                    renderItem={({ item }) => {
                        <View>
                            
                        </View>
                    }}
                />



            </View>
        )
    }
}