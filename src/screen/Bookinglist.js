import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Appbar } from 'react-native-paper';

export default class Bookinglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
      header:null
  };

  

  render() {
    return (
      <View >
        <View>

        <Appbar.Header>
        <Appbar.BackAction
          onPress={()=>{ this.props.navigation.navigate('HomeScreen')}}
        />
        <Appbar.Content
          title="Title"
          subtitle="Subtitle"
        />
      </Appbar.Header>
        </View>
        <Card style={{flex:1, width:100,backgroundColor:'blue' }}>
          <View style={{flex:1, }}>
            <View style={styles.card}>
              <Card.Cover style={{width: 100, height: 100}} source={{ uri: 'https://picsum.photos/700' }} />
            </View>
            {/* <View style={{backgroundColor:'red'}}>
              <Text>Maman</Text>
            </View> */}
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
  container:{
    flex:1,
    // flexDirection:'row',
    marginHorizontal: 10,
    marginVertical:10,
  },
  card:
  {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,

  }
})