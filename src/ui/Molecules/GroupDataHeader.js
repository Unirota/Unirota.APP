import { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import GroupDataHeaderStyles from '../../styles/Atoms/GroupDataAvatarHeaderStyles'
import GroupDataHeader from '../Atoms/GroupDataHeader'


export default class GroupDataHeader extends Component {
    render (){
        return(
            <View style={GroupDataHeader.groupContainer} >
                <GroupDataHeader/>
                <View style={GroupDataHeaderStyles.commonText}>
                    <GroupDataHeader nome={this.props.nome}/>
                </View>
               //botao de editar  
            </View>
        )
    }
    
}
