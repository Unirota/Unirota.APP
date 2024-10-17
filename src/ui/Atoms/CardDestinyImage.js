import { Component } from 'react'
import { View, Image } from 'react-native'
import CardDestinyImageStyles from '../../styles/Atoms/CardDestinyImageStyles';
export default class CardDestinyImage extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { imageUrl } = this.props.data;
        return (
            <View>
                <Image
                    source={imageUrl}
                    style={CardDestinyImageStyles.image}
                    resizeMode="cover"
                />
            </View>
        )
    }
}