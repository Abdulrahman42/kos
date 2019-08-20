import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import{Button} from 'react-native-paper'

export default class Calenders extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
      }
    onDayPress(day) {
        this.setState({
          selected: day.dateString
        });
        // this.props.navigation.navigate('Booking', { bookingDate : day.dateString } )
      }
    render() {
        return (
            <View>
              <View style={{marginLeft:10, marginTop:10}}>

              <Text style={{fontWeight:'bold',fontSize:15}}>Mulai Kost Kapan?</Text>
              <Text>{this.state.selected}</Text>
              </View>
               <Calendar
               hideDayNames={true}
                onDayPress={this.onDayPress} 
                hideExtraDays
                markedDates={{[this.state.selected]: {selected: true}}}
                    theme={{
            selectedDayBackgroundColor: '#1BAA56',
            todayTextColor: '#1BAA56',
            arrowColor: '#1BAA56',
          }}
        />
         <Button style={style.button} mode="contained" onPress={() => this.props.navigation.navigate('Booking', { bookingDate : this.state.selected} )}>
    Save
  </Button>
            </View>
        )
    }
}


const style= StyleSheet.create({
   button:{
     backgroundColor:'#1BAA56',
     marginHorizontal:10
     
   }
})

