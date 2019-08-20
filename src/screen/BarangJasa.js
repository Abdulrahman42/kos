import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Appbar} from 'react-native-paper'

export default class BarangJasa extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <Appbar.Header>
        <Appbar.BackAction
          onPress={()=>{ this.props.navigation.navigate('search')
        }}
        />
        <Appbar.Content
          title="Iklan Barang & Jasa"
        />
      </Appbar.Header>
      <View>

      </View>
      </View>
    );
  }
}
