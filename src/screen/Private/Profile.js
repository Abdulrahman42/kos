import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-community/async-storage";

import Colors from "../../style/color";

export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };

  logoutAsync = async () => {
    try {
      alert("Logout");
      await AsyncStorage.clear();
      this.props.navigation.navigate("PublicStack");
    } catch (e) {}
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            paddingTop: 20,
            justifyContent: "space-between",
            paddingRight: 20,
            paddingLeft: 20
          }}
        >
          <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
            <Icon name="ios-person" size={40} />
            <View style={{ flexDirection: "column", paddingLeft: 10 }}>
              {/* <Text>Dyah</Text>
                            <Text style={styles.Text}>999786</Text> */}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("EditProfile")}
          >
            <Text style={{ color: "silver", fontWeight: "bold" }}>
              Ubah Profile
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="ios-home" size={40} color={Colors.primary} />
            <Text style={styles.Text}>Kost Saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("BookingList")}
          style={styles.card}
        >
          <Icon name="ios-paper" size={30} color={Colors.primary} />
          <Text style={styles.Text}>Daftar Pesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => this.props.navigation.navigate("Iklan")}
        >
          <Icon name="ios-images" size={30} color={Colors.primary} />
          <Text style={styles.Text}>Data Iklan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="ios-create" size={30} color={Colors.primary} />
          <Text style={styles.Text}>Verifikasi Akun </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="ios-settings" size={30} color={Colors.primary} />
          <Text style={styles.Text}>Pengaturan</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Icon name="ios-call" size={30} color={Colors.primary} />
          <Text style={styles.Text}>Hubungi CS</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.logoutAsync()}
          style={styles.card}
        >
          <Icon name="ios-log-out" size={30} color={Colors.primary} />
          <Text style={styles.Text}>Keluar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 15,
    paddingLeft: 10,
    alignContent: "center"
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    height: 70,
    borderRadius: 4,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,

    elevation: 3
  }
});
