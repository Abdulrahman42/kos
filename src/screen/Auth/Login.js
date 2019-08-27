import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

import EvilIcons from "react-native-vector-icons/EvilIcons";

const userinfo = { username: "admin", password: "password" };
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userToken: "",
      User: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  isLogin = async () => {
    try {
      let User = {
        email: this.state.email,
        password: this.state.password
      };

      await axios
        .post("https:skut-kost-api.herokuapp.com/api/v1/login", User)
        .then(res => {
          if (typeof res.data.token !== "undefined") {
            alert("Login Success");
            AsyncStorage.setItem("userToken", res.data.token);
            this.props.navigation.navigate("PrivateNavigator");
          } else {
            alert("Email or Password went wrong");
          }
        })
        .catch(error => {
          alert(error);
        });
    } catch (e) {}
  };
  // _lslogin= async ()=>{
  //   this.state.name
  //   if(this.state.name == 'maman'&& this.state.password == '1234'){
  //     this.props.navigation.navigate('PrivateNavigator')
  //     // alert('anda berhasil')
  //   }else{
  //     alert('salah')
  //   }
  // }
  componentDidMount() {
    this.isLogin();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "center" }}>
          <View style={{ flex: 1 }}>
            <TextInput
              mode="outlined"
              label="Masukan Nama"
              value={this.state.name}
              theme={{
                // roundness: 50,
                colors: {
                  primary: "green",
                  underlineColor: "transparent"
                }
              }}
              onChangeText={name => this.setState({ name })}
            />
            <TextInput
              mode="outlined"
              label="Masukan Sandi"
              secureTextEntry
              value={this.state.password}
              theme={{
                // roundness: 50,
                colors: {
                  primary: "green",
                  underlineColor: "transparent"
                }
              }}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <Button
            style={{ backgroundColor: "#F95516" }}
            mode="contained"
            onPress={this.isLogin}
          >
            Login
          </Button>
          <View>
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
      </View>
    );
  }
  _login = async () => {
    if (
      userinfo.username === this.state.name &&
      userinfo.password === this.state.password
    ) {
      await AsyncStorage.setItem("isLoggedIn", "1");
      this.props.navigation.navigate("Profile");
      // alert('username pass')
    } else {
      // alert('username or password is incorrect')
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
