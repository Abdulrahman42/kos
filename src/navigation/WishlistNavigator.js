import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

import Favorite from "../screen/wishlist/Favorite";
import See_it from "../screen/wishlist/See_it";

const TabScreen = createMaterialTopTabNavigator(
  {
    Favorit: {
      screen: Favorite
    },
    Diliat: {
      screen: See_it
    }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#F8F8F8",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        textAlign: "center",
        color: "#1BAA56"
      },
      indicatorStyle: {
        borderBottomColor: "#1BAA56",
        borderBottomWidth: 1
      }
    }
  }
);

const WishlishNavigator = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#FFFFFF"
      },
      headerTintColor: "#1BAA56",
      title: "Wishlist"
    }
  }
});

export default WishlishNavigator;
