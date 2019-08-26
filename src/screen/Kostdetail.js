import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Kostdetail_component from '../component/Kostdetail_component'

export default class Kostdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Kostdetail_component navigation={this.props.navigation}/>
      </View>
    );
  }
}
