import {
  createStackNavigator
} from 'react-navigation'

import Booking from '../screen/Booking'
import Calender from '../screen/Calender'
import Bookinglist from '../screen/Bookinglist'
import Duration from '../screen/Duration'
import HomeScreen from '../screen/home/HomeScreen'

const BookingNavigator = createStackNavigator({
  Booking: {
    screen: Booking,
  },
  Calender: {
    screen: Calender
  },
  Bookinglist: {
    screen: Bookinglist
  },
  Duration:{
    screen: Duration
  },
  HomeScreen:{
    screen: HomeScreen
  }
}, {
  initialRouteName: "Booking",
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
})


export default BookingNavigator