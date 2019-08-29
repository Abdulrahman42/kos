import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import Home from "../screen/Public/HomePublic";
import Wishlist from "../screen/wishlist/index";
import Chat from "../screen/Chat";
import Auth from "../screen/Auth/Auth";
import Colors from "../style/color";
// import Ads from '../screen/Private/Ads';

const PublicNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name="search" color={tintColor} size={25} />
        )
      }
    },
    Wishlist: {
      screen: Wishlist,
      navigationOptions: {
        tabBarLabel: "Wishlist",
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name="heart" color={tintColor} size={25} />
        )
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: "Chat",
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name="comment" color={tintColor} size={25} />
        )
      }
    },
    Auth: {
      screen: Auth,
      navigationOptions: {
        tabBarLabel: "Login",
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name="user" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondary,
      inactiveTintColor: "silver",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 6, height: 6 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 6,
        paddingTop: 10
      }
    }
  }
);

export default createAppContainer(PublicNav);
