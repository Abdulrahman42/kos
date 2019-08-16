import React, { Component } from 'react'
import { View } from 'react-native'
import { Calendar} from 'react-native-calendars'

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
        this.props.navigation.navigate('Booking', { bookingDate : day.dateString } )
      }
    render() {
        return (
            <View>
               <Calendar
                onDayPress={this.onDayPress} 
                hideExtraDays
                markedDates={{[this.state.selected]: {selected: true}}}
                    theme={{
            selectedDayBackgroundColor: 'green',
            todayTextColor: 'green',
            arrowColor: 'green',
          }}
        />
            </View>
        )
    }
}




