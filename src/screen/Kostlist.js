import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Kostlist_component from '../component/Kostlist_component';

export default class Kostlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
         header: null
    };
  render() {
    return (
      <View>
        <Kostlist_component/>
      </View>
    );
  }
}
