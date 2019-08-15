import { createStackNavigator, createAppContainer } from 'react-navigation'

import Chat from './Chat'
import Calender from './Calender'

const Navigator = createStackNavigator({
    Chat:{
        screen: Chat

    },
    Calender:{
        screen:Calender
    }
})


export default Navigator