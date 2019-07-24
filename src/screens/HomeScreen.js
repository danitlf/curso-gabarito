import React, { Fragment, Component } from 'react';
import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Second')}
                >
                    <Text>HomeScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;
