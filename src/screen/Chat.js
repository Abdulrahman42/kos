import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <Appbar.Header style={styles.header}>
          <Appbar.Content title={<Text style={styles.title}>Chat</Text>} />
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "white",
    borderBottomColor: "#1BAA56",
    borderBottomWidth:1
  },
  slideshow: {
    flex: 1,
    marginBottom: 10
  },
  line: {
    padding: 0,
    backgroundColor: "#f2f0f0",
    width: 900,
    height: 10
  },
  body: {
    backgroundColor: "white",
    paddingHorizontal: 15
  },
  title: {
    fontWeight: "bold",
    color: "#00b16a"
  },
  textHeader: {
    width: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 13,
    backgroundColor: "#eeeeee"
  }
});
