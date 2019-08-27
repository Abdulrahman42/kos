import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,

  ScrollView,
  Dimensions,
  TextInput
} from "react-native";
import { Appbar, Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import search from "../screen/Search";
import ActionSheet from 'react-native-actionsheet'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { FlatList } from 'react-native-gesture-handler';

import { ButtonFilter } from "./ButtonFilter";

const data = [
  {
    id: 1,
    title: "Mami kos",
    price: "RP. 550.000/bulan",
    address: "jalan ini",
    imageUrl:
      "https://static.mamikos.com/uploads/cache/data/style/2019-06-25/DfQmJE8f-540x720.jpg",
    jenis: "putri",
    room: "4 kamar tersisa"
  },
  {
    id: 2,
    title: "Mami kosan",
    price: "RP. 750.000",
    address: "jalan nan",
    imageUrl:
      "https://static.mamikos.com/uploads/cache/data/style/2019-08-14/oWDZ3FjH-540x720.jpg",
    jenis: "putra",
    room: "5 kamar tersisa"
  },
  {
    id: 3,
    title: "Mami kosan2",
    price: "RP. 850.000",
    address: "jalan majapahit",
    imageUrl:
      "https://static.mamikos.com/uploads/cache/data/style/2019-03-11/SqjXlQo1-540x720.jpg",
    room: "2 kamar tersisa",
    jenis: "putri"
  },
  {
    id: 4,
    title: "Papi kos",
    price: "RP. 8.150.000",
    address: "jalan merdeka",
    imageUrl:
      "https://static.mamikos.com/uploads/cache/data/style/2019-02-13/fJbnkQOz-540x720.jpg",
    room: "kosong",
    jenis: "putri"
  },
  {
    id: 5,
    title: "Oma kos",
    price: "RP. 1.150.000",
    address: "jalan jalan",
    imageUrl:
      "https://static.mamikos.com/uploads/cache/data/style/2019-02-13/fJbnkQOz-540x720.jpg",
    room: "10 kamar tersisa",
    jenis: "putri"
  }
];
const { width, height } = Dimensions.get("window");

export default class Kostlist_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    const { goBack } = this.props.navigation;
    const { width, height } = Dimensions.get("window");
    return (
      <View>
        <Appbar.Header style={{ backgroundColor: "white" }}>
          <Appbar.BackAction onPress={() => goBack()} />
          <View style={{ width: 300 }}>
            <TextInput placeholder={"search"} editable={true} maxLength={40} />
          </View>
        </Appbar.Header>
        <ScrollView>
          <FlatList
            keyExtractor={item => item.title}
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <Card style={styles.container}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Kostdetail", {
                      rowData: rowData
                    })
                  }
                  >
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                  </TouchableOpacity>
                    <Card.Actions>
                      <View>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ marginRight: 10 }}>putri</Text>
                          <Text style={{ color: "green" }}>{rowData.room}</Text>
                        </View>
                        <View>
                          <Text style={{ fontWeight: "bold" }}>
                            {rowData.price}
                          </Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                          <View style={{ width:'50%'}}>
                          <Text>{rowData.title}</Text>
                          </View>
                          <View style={{width:'50%', alignItems:'flex-end'}}>
                          <TouchableOpacity>
                          <EvilIcons name="heart" backgroundColor='red' borderRadius='30' size={25} />
                          </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Card.Actions>
                  </Card>
              );
            }}
          />
        </ScrollView>
        {/* <View style={{ flex: 1 }}>
          <View style={styles.filter}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  width: (width * 8) / 100,
                  marginTop: 18,
                  marginLeft: 5
                }}
              >
                <Icon name="ios-funnel" type="ionicon" color="#FF9800" />

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("filter")}
                  underlayColor="white"
                >
                  <View
                    style={{
                      width: (width * 14) / 100,
                      marginLeft: 4,
                      marginTop: 19
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>Filter</Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderLeftWidth: 0.7,
                    borderLeftColor: "#9E9E9E"
                  }}
                />
                <View
                  style={{
                    width: (width * 10) / 100,
                    marginTop: 18,
                    marginLeft: 0
                  }}
                />
                <Icon name="ios-redo" type="ionicon" color="#FF9800" />
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    width: (width * 14) / 100,
                    marginLeft: 4,
                    marginTop: 19
                  }}
                >
                  <Text style={{ fontSize: 16 }}>Sort</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 110, backgroundColor: '#00a663', height: 50, width: 150, marginBottom: 10, justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', paddingRight: 5, paddingLeft: 5, elevation: 1, borderRadius: 5 }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter') }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name='ios-list' color='white' size={30} />
                                    <Text style={{ color: 'white', fontSize: 15, marginTop: 5 }}>Filter</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity underlayColor='white' onPress={this.showActionSheet}>
                            <View>
                                <ActionSheet
                                    ref={o => this.ActionSheet = o}
                                    title={'Sort By'}
                                    options={['Termurah', 'Termahal', 'Terlaris',]}
                                    cancelButtonIndex={2}
                                    destructiveButtonIndex={1}
                                    onPress={(index) => { /* do something */ }}
                                />
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialIcons name='sort' color='white' size={30} />
                                    <Text style={{ color: 'white', fontSize: 15, marginTop: 5 }}>Sort</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    // width: 280,
    backgroundColor: "#2980b9"
  }
});
