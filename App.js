import React, { Fragment, Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { ComponentStateLess } from './src/components';

function ComponentStateLessFunc({ text }) {
    return <Text>{text}</Text>;
}

class ComponentWithState extends Component {
    render() {
        return (
            <View>
                <Text>
                    {this.props.children}, {this.props.outraProp}
                </Text>
            </View>
        );
    }
}

const App = () => {
    return (
        <Fragment>
            <SafeAreaView>
                <ComponentStateLess text={'Testando algum texto'} />
                <ComponentStateLessFunc text={'textooo'} />
                <ComponentWithState outraProp={'outraProp'}>
                    Prop children
                </ComponentWithState>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({});

export default App;
