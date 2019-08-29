import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  TextInput,
  RadioButton,
  Appbar,
  Button,
  Searchbar
} from "react-native-paper";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

const { height } = Dimensions.get("window");

export default class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      address: "",
      city: "",
      address: "",
      type: "",
      price: "",
      phone: "",
      region: {
        latitude: -6.280229,
        longitude: 106.710818,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      },
      markerRegion: {
        latitude: -6.90389,
        longitude: 107.61861
      },
      screenHeight: 0
    };
  }
  handleRegionChange = region => {
    this.setState({
      region,
      data: {
        ...this.state.data,
        region: {
          latitude: region.latitude,
          longitude: region.longitude
        }
      }
    });
    if (this.marker) {
      this.marker._component.animateMarkerToCoordinate(region, 100);
    }
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  onAds = () => {
    this.actAdsAysync();
  };

  async componentWillMount() {
    const token = await AsyncStorage.getItem("userToken");
    this.setState({
      token: token
    });
  }

  actAdsAysync = async () => {
    // try {
    let tempUser = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude,
      photo: this.state.photo,
      type: this.state.type,
      price: this.state.price,
      owner_phone: this.state.owner_phone
    };
    await axios
      .post(env.host + "dorm", tempUser, {
        headers: {
          authorization: "Bearer " + AsyncStorage.getItem("userToken")
        }
      })
      .then(response => {
        alert(tempUser);
        this.props.navigation.navigate("PrivateNav");
      })
      .catch(error => {
        alert(error);
      });
  };
  onContentSizeChange = (ContentWidth, ContentHeight) => {
    this.setState({ screenHeight: ContentHeight });
  };
  render() {
    const { checked } = this.state;
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={{ flex: 1 }}>
        {/* <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Tambah Data Iklan" />
        </Appbar.Header> */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          onContentSizeChange={this.onContentSizeChange}
          scrollEnabled={scrollEnabled}
        >
          <View style={styles.container}>
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Nama Kost</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                underlineColorAndroid="#1BAA56"
                style={{ backgroundcolor: "white" }}
                mode="flat"
                theme={{
                  // roundness: 50,
                  colors: {
                    primary: "green",
                    underlineColor: "transparent"
                  }
                }}
                label="Masukan nama kost"
                value={this.state.title}
                onChangeText={title => this.setState({ title })}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Alamat Kost</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={{ backgroundColor: "white" }}
                keyboardType={"numeric"}
                style={(backgroundColor = "white")}
                mode="flat"
                theme={{
                  // roundness: 50,
                  colors: {
                    primary: "green",
                    underlineColor: "transparent"
                  }
                }}
                label="Masukan alamat kost"
                value={this.state.address}
                onChangeText={address => this.setState({ address })}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Nama Kota</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={{ backgroundcolor: "white" }}
                mode="flat"
                theme={{
                  // roundness: 50,
                  colors: {
                    primary: "green",
                    underlineColor: "transparent"
                  }
                }}
                label="Deskripsikan barang/jasa anda agar mudah dipahami"
                value={this.state.city}
                onChangeText={city => this.setState({ city })}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Search alamat</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <View style={styles.containers}>
                <MapView
                  style={styles.map}
                  region={this.state.region}
                  onRegionChangeComplete={this.handleRegionChange}
                >
                  <Marker.Animated
                    ref={marker => {
                      this.marker = marker;
                    }}
                    coordinate={this.state.markerRegion}
                  />
                </MapView>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <View style={{ width: "50%" }}>
                  <Text style={{}}>Latitude</Text>
                    <TextInput
                      underlineColorAndroid="#1BAA56"
                      style={{ backgroundColor: "white" }}
                      mode={"flat"}
                      placeholder={"latitude"}
                      maxLength={40}
                      value={this.state.region.latitude.toString()}
                    />
                  </View>
                  <View style={{ width: "50%" }}>
                  <Text style={{}}>Longitude</Text>
                    <TextInput
                      underlineColorAndroid="#1BAA56"
                      style={{ backgroundColor: "white" }}
                      mode={"flat"}
                      placeholder={"longitude"}
                      maxLength={40}
                      value={this.state.region.longitude.toString()}
                    />
                  </View>
                </View>
                <Text style={{ fontWeight: "bold" }}>Picture</Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Button
                  style={{
                    backgroundColor: "#1BAA56",
                    width: 150,
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    borderColor: "white"
                  }}
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                >
                  <Text style={{ fontSize: 10 }}>Tambah gambar</Text>
                </Button>
              </View>
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Tipe kost</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={{ backgroundcolor: "white" }}
                mode="flat"
                label="Masukan tipe kost"
                value={this.state.type}
                theme={{
                  // roundness: 50,
                  colors: {
                    primary: "green",
                    underlineColor: "transparent"
                  }
                }}
                onChangeText={type => this.setState({ type })}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Harga</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={{ backgroundcolor: "white" }}
                mode="flat"
                keyboardType="numeric"
                theme={{
                  // roundness: 50,
                  colors: {
                    primary: "green",
                    underlineColor: "transparent"
                  }
                }}
                label="Masukan harga"
                value={this.state.price}
                onChangeText={price => this.setState({ price })}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Nomor ponsel</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={{ backgroundcolor: "white" }}
                mode="flat"
                keyboardType="numeric"
                theme={{
                  // roundness: 50,
                  colors: {
                    primary: "green",
                    underlineColor: "transparent"
                  }
                }}
                label="Masukan no telepon/hp"
                value={this.state.phone}
                onChangeText={phone => this.setState({ phone })}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{ marginBottom: 0, paddingHorizontal: 10, paddingBottom: 10 }}
        >
          <Button
            style={{
              backgroundColor: "#F95516",
              height: 50,
              paddingHorizontal: 10
            }}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ fontSize: 20 }}>Submit</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  header: {
    backgroundColor: "#1BAA56"
  },
  containers: {
    
    marginVertical: 10,
    height: 200,
    paddingHorizontal: 5,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
