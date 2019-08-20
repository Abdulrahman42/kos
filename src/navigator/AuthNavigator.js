import { createStackNavigator } from 'react-navigation';

import Login from '../screen/profile/Login'
import Register from '../screen/profile/Register'
import Auth from '../screen/profile/Auth'
import Profile from '../screen/profile/Profile'

const AuthNavigator = createStackNavigator({
    Auth:{
        screen:Auth,
        navigationOptions: {
            header: null
          }
    },
    Login:{
        screen:Login,
        navigationOptions: {
            header: null
          }
    },
    Register:{
        screen:Register,
        navigationOptions: {
            header: null
          }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            header:null
        }
    }
}, {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#2980b9"
      },
      headerTintColor: "#fff"
    },
    tabBarOptions: {
      activeTintColor: "#1BAA56",
      inactiveTintColor: "grey"
    }
  });
export default AuthNavigator