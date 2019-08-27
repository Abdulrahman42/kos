import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import UserNavigator from '../navigator/UserNavigator';
import HomeScreen from '../screen/home/HomeScreen';
import Kostlist from '../screen/Kostlist';
import Kostdetail from '../screen/Kostdetail';
import Booking from '../screen/Booking';
import Ads from '../screen/Ads';

const UserStack = createStackNavigator({
  UserNavigator: UserNavigator,
  HomeScreen: HomeScreen,
  Kostlist: Kostlist,
  Kostdetail: Kostdetail,
  Ads: Ads,
  Booking: Booking,
}, {
    initialRouteName: "UserNaigator",
    headerMode: 'none'
  });


//export default App;
export default UserStack;