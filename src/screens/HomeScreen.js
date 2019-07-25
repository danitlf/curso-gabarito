import React, { Fragment, Component } from 'react';
import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import { MyContext } from '../Navigation';

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
                    <MyContext.Consumer>
                        {({ text, changeText }) => (
                            <View>
                                <Text>ctx: {text}</Text>
                                <TouchableOpacity
                                    onPress={() => changeText('ooi')}
                                >
                                    <Text>Button Troca</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </MyContext.Consumer>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;
