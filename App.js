import React, { Fragment, Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { ComponentStateLess } from './src/components';
function ComponentStateLessFunc() {
    return <Text>ComponentStateLessFunc</Text>;
}

class ComponentWithState extends Component {
    render() {
        return <Text>ComponentWithState</Text>;
    }
}

const App = () => {
    console.log('ooi');
    return (
        <Fragment>
            <SafeAreaView>
                <ComponentStateLess />
                <ComponentStateLessFunc />
                <ComponentWithState />
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({});

export default App;
