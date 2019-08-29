import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { DefaultTheme, Provider } from "react-native-paper";

import Login from "../screen/Auth/Login";
import Register from "../screen/Auth/Register";
import Home from "../screen/Public/HomePublic";
import Kostlist from "../screen/Kostlist";
import Kostdetail from "../screen/Kostdetail";
import PublicNav from "./publicNavigation";
import PrivateNav from "./privateNavigation";

const StackPublic = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    PrivateNav: {
      screen: PrivateNav
    },
    Home: {
      screen: Home,
      headerMode: "none"
    },
    Kostlist: {
      screen: Kostlist
    },
    Kostdetail: {
      screen: Kostdetail,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#00a663"
        },
        headerTintColor: "white"
      }
    },
    PublicNav: {
      screen: PublicNav
    }
  },
  {
    initialRouteName: "PublicNav",
    headerMode: "none"
  }
);

class PublicStack extends Component {
  render() {
    return (
      <Provider theme={theme}>
        <PublicStack />
      </Provider>
    );
  }
}

export default StackPublic;
