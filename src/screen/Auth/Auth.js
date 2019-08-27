import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Appbar, Button } from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={{ alignItems: "center" }}>
            <EvilIcons name="share-google" size={100} />
          </View>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            {" "}
            Daftar
          </Button>
          <View>
            <Text style={styles.text}>
              Kamu belum masuk nih, yuk masuk untuk menikmati
            </Text>
            <Text style={styles.text}>fitur kosku lebih banyak</Text>
          </View>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => this.props.navigation.navigate("login")}
          >
            {" "}
            Masuk
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    backgroundColor: "white"
  },
  body: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
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
    marginHorizontal: 20,
    fontSize: 13,
    backgroundColor: "#F95516"
  }
});
