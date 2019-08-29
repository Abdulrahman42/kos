import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import PublicStack from './src/navigation/publicStack'
import PrivateStack from './src/navigation/privateStack'
import CheckStack from './src/navigation/checkStack'
import { YellowBox } from 'react-native';
const AppNavigator = createSwitchNavigator({
  PrivateStack: PrivateStack,
  PublicStack: {
    screen: PublicStack,
    navigationOptions: {
      header: null,
    }
  },
  CheckStack: {
    screen: CheckStack,
    navigationOptions: {
      header: null,
    }
  }
}, {
    initialRouteName: 'CheckStack'
  })
  YellowBox.ignoreWarnings(['ViewPagerAndroid']);
const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
export default App;