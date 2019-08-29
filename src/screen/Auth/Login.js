import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

import env from "../../env/env";
import Colors from "../../style/color";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userToken: "",
      tmpUSer: ""
    };
  }

  isLogin = async () => {
    try {
      let tempUser = {
        email: this.state.email,
        password: this.state.password
      };

      await axios
        .post(env.host + "login", tempUser)
        .then(response => {
          if (typeof response.data.token !== "undefined") {
            alert("Login Success");
            AsyncStorage.setItem("userToken", response.data.token);
            // console.warn(response.data.token);
            this.props.navigation.navigate("PrivateStack");
          } else {
            alert("Email or Password went wrong");
          }
        })
        .catch(error => {
          alert(error);
        });
    } catch (e) {}
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={style.borderTextInput}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            style={style.inputField}
          ></TextInput>
        </View>
        <View style={style.borderTextInput}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            style={style.inputField}
          ></TextInput>
        </View>
        <Button onPress={this.isLogin} title="Masuk" color="#00a663"></Button>

        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <Text>
            Anda belum mempunyai akun?{" "}
            <Text
              onPress={() => this.props.navigation.navigate("Register")}
              style={{ color: "#F95516" }}
            >
              Daftar disini
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  borderTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    borderColor: "grey",
    marginBottom: 10
  },
  inputField: {
    width: 300,
    height: 40,
    color: Colors.secondary,
    textAlign: "center"
  },
  login: {
    fontSize: 40
  }
});
