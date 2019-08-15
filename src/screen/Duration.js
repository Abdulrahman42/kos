import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { Button } from 'react-native-paper'

export default class Duration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      
        <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />

</Picker>
<Button icon="camera" mode="contained" onPress={()=>{ this.props.navigation.navigate('Booking')}}>
    Press me
  </Button>
       
      </View>
    );
  }
}
