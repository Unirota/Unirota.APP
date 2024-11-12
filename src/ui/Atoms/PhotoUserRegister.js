import { Component } from 'react'
import { View, Image } from 'react-native'
import styles from '../../styles/Atoms/ProfileAvatarStyles'
import HeaderLoginStyle from '../../styles/Atoms/HeaderLoginStyle';


export default class PhotoUserRegister extends Component {
  constructor (props) {
    super(props)
  }

    render() {
        const imageUrl = require('./../../../assets/images/photoUser.png')
        return (
            <View  style={HeaderLoginStyle.iconUser}>
                <Image source={imageUrl}/>
            </View>
        )
    }
}