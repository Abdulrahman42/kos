import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import HomeNavigator from './src/navigator/HomeNavigator';
import WishlishNavigator from './src/navigator/WishlistNavigator';
import BookingNavigator from './src/navigator/BookingNavigator';
import HomeScreen from './src/screen/home/HomeScreen';
import Profile from './src/screen/profile/Profile';
import Setting from './src/screen/Setting';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: ({
        tintColor
      }) => ( <
        EvilIcons name = "search"
        color = {
          tintColor
}
        size = {
          25
        }
        />
      )
    }
  },
  Wishlist: {
    screen: WishlishNavigator,
    navigationOptions: {
      tabBarIcon: ({
        tintColor
      }) => ( <
        EvilIcons name = "heart"
        color = {
          tintColor
        }
        size = {
          25
        }
        />
      )
    }
  },
  Chat: {
    screen: BookingNavigator,
    navigationOptions: {
      tabBarIcon: ({
        tintColor
      }) => ( <
        EvilIcons name = "comment"
        color = {
          tintColor
        }
        size = {
          25
        }
        />
      )
    }
  },
  Profile: {
    screen: Setting,
    navigationOptions: {
      tabBarIcon: ({
        tintColor
      }) => ( <
        EvilIcons name = "user"
        color = {
          tintColor
        }
        size = {
          25
        }
        />
      )
    }
  }
}, {
  initialRouteName: "Chat",
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

export default createAppContainer(TabNavigator);