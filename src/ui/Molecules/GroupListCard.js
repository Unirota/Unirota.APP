import { Component } from "react";
import { View, Text, Image } from "react-native";
import GroupListCardStyles from "../../styles/Molecules/GroupListCardStyles";

export default class GroupListCard extends Component {
    render() {
        return (
            <View style={GroupListCardStyles.container}>
                {/* card title */}
                <View style={GroupListCardStyles.header}>
                    <Text style={[GroupListCardStyles.font, GroupListCardStyles.title]}>Grupo Alpha</Text>
                    {/* time container */}
                    <View style={GroupListCardStyles.hourContainer}>
                        <Image
                            source={require('./../../../assets/images/ClockIcon.png')}
                            style={GroupListCardStyles.image}
                        />
                        <Text style={GroupListCardStyles.font}>7:30</Text>
                    </View>
                </View>
                {/* description container */}
                <View style={GroupListCardStyles.description}>
                    <Text
                        style={GroupListCardStyles.font}
                        numberOfLines={2}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
                <View style={GroupListCardStyles.blackLine}></View>
                <View style={GroupListCardStyles.header}>
                    {/* location container */}
                    <View style={GroupListCardStyles.footerContainer}>
                        <Image
                            source={require('./../../../assets/images/locationPinIcon.png')}
                            style={GroupListCardStyles.image}
                        />
                        <Text style={GroupListCardStyles.font}>Unicesumar</Text>
                    </View>
                    {/* rating container */}
                    <View style={GroupListCardStyles.footerContainer}>
                        <Image
                            source={require('./../../../assets/images/ratingIcon.png')}
                            style={GroupListCardStyles.image}
                        />
                        <Text style={GroupListCardStyles.font}>4.9</Text>
                    </View>
                </View>
            </View>
        )
    }
}