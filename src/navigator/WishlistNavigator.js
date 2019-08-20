import {
    createMaterialTopTabNavigator, createStackNavigator
} from 'react-navigation'

import Favorite from '../screen/wishlist/Favorite'
import See_it from '../screen/wishlist/See_it'

const TabScreen = createMaterialTopTabNavigator({
    Favorit: {
        screen: Favorite
    },
    Diliat: {
        screen: See_it
    }
},
{
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#F8F8F8',
    style: {
      backgroundColor: '#1BAA56',
    },
    labelStyle: {
      textAlign: 'center',
    },
    indicatorStyle: {
      borderBottomColor: '#87B56A',
      borderBottomWidth: 2,
    },
  },
}
);

//making a StackNavigator to export as default
const WishlishNavigator = createStackNavigator({
TabScreen: {
  screen: TabScreen,
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#1BAA56',
    },
    headerTintColor: '#FFFFFF',
    title: 'Wishlist',
  },
},
});

export default WishlishNavigator

