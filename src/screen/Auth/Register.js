import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button
} from "react-native";

import env from "../../env/env";
import Colors from "../../style/color";
import axios from "axios";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: ""
    };
  }

  onRegist = () => {
    this.actRegistAsync();
  };

  actRegistAsync = async () => {
    try {
      //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
      let tempUser = {
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password
      };
      console.warn(tempUser);
      await axios
        .post(env.host + "register", tempUser)
        .then(response => {
          alert("Daftar Berhasil");
          this.props.navigation.navigate("PublicBottom");
        })
        .catch(error => {
          alert(error);
        });
    } catch (e) {}
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.field}>
              <Text style={styles.text}>Username</Text>
              {/* <TextInput placeholder='Username' underlineColorAndroid={Colors.secondary}  style={styles.text} onChangeText={(fullname) => this.setState({ fullname })}></TextInput> */}
              <TextInput
                placeholder="Username"
                onChangeText={fullname => this.setState({ fullname })}
                style={styles.text}
              ></TextInput>
              <Text style={styles.text}>Email</Text>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid={Colors.secondary}
                style={styles.text}
                onChangeText={email => this.setState({ email })}
              ></TextInput>
              <Text style={styles.text}>Password</Text>
              <TextInput
                placeholder="password"
                underlineColorAndroid={Colors.secondary}
                style={styles.text}
                onChangeText={password => this.setState({ password })}
              ></TextInput>
            </View>
          </View>
        </ScrollView>
        <Button onpress={this.onRegist} title="Daftar"></Button>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <Text>
            Sudah mempunyai akun?{" "}
            <Text
              onPress={() => this.props.navigation.navigate("Login")}
              style={{ color: "#F95516" }}
            >
              Masuk disini
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 8,
    fontWeight: "bold"
  },
  field: {
    marginLeft: 8,
    marginTop: 30,
    marginBottom: 50,
    marginRight: 8
  }
});
