import {
    createMaterialTopTabNavigator
} from 'react-navigation'

import Favorite from '../screen/wishlist/Favorite'
import See_it from '../screen/wishlist/See_it'

const WishlishNavigator = createMaterialTopTabNavigator({
    Favorite: {
        screen: Favorite,
        NavigationOption: {
          title: 'Wishlist'
        }
    },
    See_it: {
        screen: See_it,
        NavigationOption: {
          title: 'Wishlist'
        }
    }
}, {
    initialRouteName: "See_it",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#1BAA56'
        }
    }
});

export default WishlishNavigator