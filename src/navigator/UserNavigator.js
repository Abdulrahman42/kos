import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React, {Component}from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Kostlist from '../screen/Kostlist'
// import Kostdetail from '../screen/Kostdetail'
import HomeScreen from '../screen/home/HomeScreen'
import HomeNavigator from './HomeNavigator'
// import AuthNavigator from './AuthNavigator'
// import Booking from '../screen/Booking'
// import Bookinglist from '../screen/Bookinglist'
// import Calender from '../screen/Calender'
// import Duration from '../screen/Duration'
// import Search from '../screen/Search'
// import Auth from '../screen/profile/Auth' 
import Chat from '../screen/Chat'
import Profile from '../screen/Private/Profile'
// import Ads from '../screen/Ads'
import WishlishNavigator from '../navigator/WishlistNavigator'


// const KostNavigator = createStackNavigator({
//     Kostlist:{
//         screen:Kostlist
//     },
//     Kostdetail:{
//         screen:Kostdetail
//     },
//     Booking: {
//         screen: Booking,
//       },
//       Calender: {
//         screen: Calender
//       },
//       Bookinglist: {
//         screen: Bookinglist
//       },
//       Duration:{
//         screen: Duration
//       },
//       HomeScreen:{
//         screen: HomeScreen
//       }
// },
// {
//     defaultNavigationOptions: {
//       headerStyle: {
//         elevation: 0
//       },
//       headerTintColor: "#2980b9"
//     }
//   }
// );

// const HomeNavigator = createStackNavigator({
//     HomeScreen: {
//         screen: HomeScreen
//     },
//     AuthNavigator:{
//         screen: AuthNavigator,
//         navigationOptions: {
//             header: null
//           }
//     },
//     Search: {
//         screen: Search,
//         navigationOptions: {
//             header: null
//           }
//     },
//     Kost:{
//         screen: KostNavigator,
//         navigationOptions: {
//             header: null
//           }
//     }
// }, {
//     initialRouteName: 'HomeScreen',
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: "#2980b9"
//         }
//     },
//     tabBarOptions: {
//         activeTintColor: "#1BAA56",
//         inactiveTintColor: "grey"
//     }
// })
// HomeNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//       tabBarVisible = false;
//     }
//     return {
//       tabBarVisible
//     };
//   };
const UserNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor }) => ( < EvilIcons name = "search"color = {tintColor}size = {25}/>
        )
      }
    },
    Wishlist: {
      screen: WishlishNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => ( <EvilIcons name = "heart"color = {tintColor}size = {25} />)}, title:'Wishlist'
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => ( <EvilIcons name = "comment"color = {tintColor}size = {25}/>
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => ( <EvilIcons name = "user"color = {tintColor}size = {25}/>
        )
      }
    }
  }, {
    tabBarOptions: {
      activeTintColor: '#0597f2',
      inactiveTintColor: '#0071b8',
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 6,
        paddingTop: 10
      }
    }
  })
// const UserNavigator = createStackNavigator({
//    UserNavigator:{
//        screen: TabNavigator
//    }
// })

export default  createAppContainer (UserNavigator)