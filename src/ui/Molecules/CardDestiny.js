import { Component } from 'react'
import { FlatList, View } from 'react-native'
import HomePageService from '../../services/HomePageService'
import CardDestinyStyles from '../../styles/Molecules/CardDestinyStyles'
import CardDestinyTitle from '../Atoms/CardDestinyTitle'
import CardDestinyImage from '../Atoms/CardDestinyImage'
import CardDestinyDestinyLabel from '../Atoms/CardDestinyDestinyLabel'
import CardDestinyCityLabel from '../Atoms/CardDestinyCityLabel'
export default class CardDestiny extends Component {

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
                        <View style={CardDestinyStyles.imageContainer}>
                            <CardDestinyImage data={item} />
                            <CardDestinyDestinyLabel data={item} />
                            <CardDestinyCityLabel data={item} />
                        </View>
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