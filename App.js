import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { ComponentStateLess } from './src/components';
import Navigation from './src/Navigation';

function ComponentStateLessFunc({ text }) {
    return <Text>{text}</Text>;
}

class ComponentWithState extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    changeText = () => {
        this.setState({ count: ++this.state.count });
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.changeText}>
                    <Text>Button Troca</Text>
                </TouchableOpacity>
                <Text>{this.state.count}</Text>
                <Text>
                    {this.props.children}, {this.props.outraProp}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default Navigation;
