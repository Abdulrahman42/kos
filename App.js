import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { YellowBox } from 'react-native';
//private 
import HomePrivate from './src/screen/Private/Home'
import ChatPrivate from './src/screen/Private/Chat'
import WishlistPrivate from './src/screen/Private/Wishlist'
import Profile from './src/screen/Private/Profile'

import Kostdetail from './src/screen/Kostdetail'
import Kostlist from './src/screen/Kostlist'
import Calender from './src/screen/Calender'
import Duration from './src/screen/Duration'
import Booking from './src/screen/Booking';
import Bookinglist from './src/screen/Bookinglist';
import Ads from './src/screen/Ads';

//auth
import Auth from './src/screen/Auth/Auth'
import Login from './src/screen/Auth/Login';
import Register from './src/screen/Auth/Register'

//public
import Chat from './src/screen/Public/ChatPublic'
import Home from './src/screen/Public/HomePublic'
import Wishlist from './src/screen/wishlist/index'

const PrivateBottom = createBottomTabNavigator({
  Home: {
      screen: HomePrivate,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => ( <EvilIcons name = "search" color = { tintColor } size = {25}/>
          )
        }
      },
      Wishlist: {
        screen: WishlistPrivate,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => ( <EvilIcons name = "heart"color = {tintColor}size = {25} />)}, title:'Wishlist'
      },
      Chat: {
        screen: ChatPrivate,
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
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#F95516"
    },
    tabBarOptions: {
      activeTintColor: "#F95516",
      inactiveTintColor: "grey"
    }
  })
  YellowBox.ignoreWarnings(['ViewPagerAndroid']);
const PrivateNavigator = createStackNavigator({
      Main:{
          screen:PrivateBottom
      },
      Kostlist:{
          screen:Kostlist
      },
      Kostdetail:{
          screen:Kostdetail
      },
      Booking:{
          screen:Booking
      },
      Bookinglist:{
          screen:Bookinglist
      },
      Calender:{
          screen:Calender
      },
      Ads:{
          screen:Ads
      },Duration:{
          screen: Duration
      }
  })
  


const PublicBottom = createBottomTabNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => ( <EvilIcons name = "search" color = { tintColor } size = {25}/>
          )
        }
      },
      Wishlist: {
        screen: Wishlist,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => ( <EvilIcons name = "heart"color = {tintColor}size = {25} />)}, title:'Wishlist'
      },
      Chat: {
        screen: Ads,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => ( <EvilIcons name = "comment"color = {tintColor}size = {25}/>
          )
        }
      },
      Login: {
        screen: Auth,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => ( <EvilIcons name = "user"color = {tintColor}size = {25}/>
          )
        }
      }
  },
  {
    initialRouteName: "Home",
    headerMode: null,
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#F95516"
    },
    tabBarOptions: {
      activeTintColor: "#F95516",
      inactiveTintColor: "grey"
    }
  })
  
const PublicNavigator = createStackNavigator({
  Main:{
      screen:PublicBottom
  },
  Kostlist:{
      screen:Kostlist
  },
  Kostdetail:{
      screen:Kostdetail
  },
  Auth:{
      screen: Auth
  },
  login:{
      screen:Login
  },
  Register:{
      screen:Register
  }
},
{
  headerMode:'none'
}
)

const MainNavigator = createSwitchNavigator({
  PublicNavigator: {
    screen: PublicNavigator,
  },
  PrivateNavigator: {
    screen: PrivateNavigator,
  }
},
)

export default createAppContainer(MainNavigator);

