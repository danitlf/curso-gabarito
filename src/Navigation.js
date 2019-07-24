import { ComponentsUIScreen, HomeScreen } from './screens';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Second: {
        screen: ComponentsUIScreen
    }
});

export default createAppContainer(AppNavigator);
