import {
    createStackNavigator, createMaterialTopTabNavigator
} from 'react-navigation';

import Search from '../screen/Search'
import HomeScreen from '../screen/home/HomeScreen'
import AuthNavigator from './AuthNavigator'

import Kostlist from '../screen/Kostlist'
import Kostdetail from '../screen/Kostdetail'
import Booking from '../screen/Booking'
import Bookinglist from '../screen/Bookinglist'
import Calender from '../screen/Calender'
import Duration from '../screen/Duration'
import Map from '../screen/Map'


// const KostListnavigator = createMaterialTopTabNavigator({
//     Map:{
//         screen:Map
//     },
//     Kostlist:{
//         screen:Kostlist
//     }

// },
// {
//   tabBarPosition: 'top',
//   swipeEnabled: true,
//   animationEnabled: true,
//   tabBarOptions: {
//     activeTintColor: '#FFFFFF',
//     inactiveTintColor: '#F8F8F8',
//     style: {
//       backgroundColor: '#d0d0d0d',
//     },
//     labelStyle: {
//       textAlign: 'center',
//     },
//     indicatorStyle: {
//       borderBottomColor: '#87B56A',
//       borderBottomWidth: 2,
//     },
//   },
// })

const KostNavigator = createStackNavigator({
    Kostlist:{
        screen:Kostlist
    },
    Kostdetail:{
        screen:Kostdetail
    },
    Booking: {
        screen: Booking,
      },
      Calender: {
        screen: Calender
      },
      Bookinglist: {
        screen: Bookinglist
      },
      Duration:{
        screen: Duration
      },
      HomeScreen:{
        screen: HomeScreen
      }
},
{
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#2980b9"
    }
  }
);

const HomeNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    AuthNavigator:{
        screen: AuthNavigator,
        navigationOptions: {
            header: null
          }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null
          }
    },
    Kost:{
        screen: KostNavigator,
        navigationOptions: {
            header: null
          }
    }
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
HomeNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible
    };
  };

export default HomeNavigator