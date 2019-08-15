import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar  } from 'react-native-paper';

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.button}>
      <View>
      <Searchbar
        placeholder="Search"

      />
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
        marginBottom: 20,
        marginTop: 20,
        fontSize: 13,
        backgroundColor: '#eeeeee',
    }
})
