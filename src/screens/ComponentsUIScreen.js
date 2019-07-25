import React, { Fragment, Component } from 'react';
import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class ComponentsUIScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.listData = [
            { id: '1', text: 'linha 1' },
            { id: '2', text: 'linha 2' }
        ];
    }

    componentDidMount = async () => {
        const value = await AsyncStorage.getItem('test');
        console.log(JSON.stringify(value));
        if (value) {
            this.setState({ count: parseInt(value) });
        }
    };

    shouldComponentUpdate = (newProps, newState) => {
        return true;
    };

    changeText = () => {
        const newValue = this.state.count + 1;
        AsyncStorage.setItem('test', JSON.stringify(newValue));
        this.setState({ count: newValue });
    };

    _renderItem = ({ item }) => {
        return <Text key={item.id}>{item.text}</Text>;
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.changeText}>
                    <Text>Button Troca</Text>
                </TouchableOpacity>
                <Text>{this.state.count}</Text>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../images/Suricatos.png')}
                />
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: 'https://facebook.github.io/react/logo-og.png'
                    }}
                />
                <FlatList data={this.listData} renderItem={this._renderItem} />
            </View>
        );
    }
}

export default ComponentsUIScreen;
