import {
    createStackNavigator
} from 'react-navigation';

import search from '../screen/search';
import HomeScreen from '../screen/home/HomeScreen';
import Login from '../screen/profile/Login';

const HomeNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Login:{
        screen: Login
    },
    Search: {
        screen: search
    },
}, {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#2980b9"
        }
    },
    tabBarOptions: {
        activeTintColor: "#1BAA56",
        inactiveTintColor: "grey"
    }
})

export default HomeNavigator