import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card, Button, Appbar, TextInput,Image } from "react-native-paper";
// import { ScrollView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");
export default class Kostdetail_component extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Appbar.Header style={{ backgroundColor: "white" }}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
        </Appbar.Header>
        <ScrollView>
         
              {/* source={this.props.navigation.getParam("rowData").imageUrl} */}
            
            <Image />
            
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginRight: 10 }}>
                    {this.props.navigation.getParam("rowData").jenis}
                  </Text>
                  <Text style={{ color: "green" }}>{}</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>
                    {this.props.navigation.getParam("rowData").price}
                  </Text>
                </View>
                <View>
                  <Text>
                    {this.props.navigation.getParam("rowData").address}
                  </Text>
                </View>
              </View>
{/*          
          <View
            style={{
              marginBottom: 0,
              paddingHorizontal: 10,
              paddingBottom: 10
            }}> */}
     
        </ScrollView>
        <View
          style={{ marginBottom: 0, paddingHorizontal: 10, paddingBottom: 10 }}>
          <Button
            style={{
              backgroundColor: "#F95516",
              height: 55,
              paddingHorizontal: 10
            }}
            mode="contained">
            <Text style={{ fontSize: 20 }}>Booking</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 3.46,
    elevation: 9
  },
  header: {
    width: 280,
    backgroundColor: "#2980b9"
  },
  filter: {
    borderBottomWidth: 0,
    shadowColor: "#2980b9",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    borderRadius: 8,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    width: (width * 50) / 100,
    height: 60,
    marginBottom: 20
  }
});
