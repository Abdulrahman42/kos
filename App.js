import React from 'react';
import { createBottomTabNavigator, createAppContainer , createMaterialTopTabNavigator} from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import HomeScreen from './src/screen/HomeScreen';
import Favorite from './src/screen/Favorite';
import LoginScreen from './src/screen/LoginScreen';
import Diliat from './src/screen/Diliat';
import WishlistScreen from './src/screen/WishlistScreen';
import Chat from './src/screen/Chat';
import Navigator from './src/screen/Navigator';
import Calender from './src/screen/Calender';
const MainScreenNavigator = createMaterialTopTabNavigator({

  Favorite: { 
    screen: Favorite, 
  },
  Diliat: { 
    screen: Diliat 
  },
},
    {
      initialRouteName: "Diliat",
      defaultNavigationOptions:{
        headerStyle:{
          backgroundColor:'#1BAA56'
        }
      }
    }
);


const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <EvilIcons name="search" color={tintColor} size={25}/>
      )
    } 
  },
  Wishlist: { 
    screen: MainScreenNavigator,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <EvilIcons name="heart" color={tintColor} size={25}/>
      )
    } 
  },
  Chat: { 
    screen: Calender,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <EvilIcons name="comment" color={tintColor} size={25}/>
      )
    } 
  },
  Login: { 
    screen: LoginScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <EvilIcons name="user" color={tintColor} size={25}/>
      ) 
    }
  }
  },
  {
  initialRouteName: "Home",
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
 }
);

export default createAppContainer(TabNavigator);