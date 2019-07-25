import { ComponentsUIScreen, HomeScreen } from './screens';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

export const MyContext = React.createContext({
    text: '',
    changeText: text => {}
});

class Ctx extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: 'teste 2' };
    }

    changeText = text => {
        this.setState({ text });
    };

    render() {
        return (
            <MyContext.Provider
                value={{ ...this.state, changeText: this.changeText }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: props => (
            <Ctx>
                <HomeScreen {...props} />
            </Ctx>
        )
    },
    Second: {
        screen: ComponentsUIScreen
    }
});

export default createAppContainer(AppNavigator);
