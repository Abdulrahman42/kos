import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { DefaultTheme, Provider } from "react-native-paper";

import Home from "../screen/Public/HomePublic";
import Kostlist from "../screen/Kostlist";
import Kostdetail from "../screen/Kostdetail";
import Ads from "../screen/Private/Ads";
import PrivateNav from "./privateNavigation";
import PublicNav from "./publicNavigation";

import { theme } from "../style/styles";

const StackPublic = createStackNavigator(
  {
    PublicNav: PublicNav,
    Home: {
      screen: Home
    },
    Kostlist: {
      screen: Kostlist
    },
    Kostdetail: {
      screen: Kostdetail
    },
    Ads: {
      screen: Ads
    },
    PrivateNav: PrivateNav
  },
  {
    initialRouteName: "PrivateNav",
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
