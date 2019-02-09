import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome To CalendarJS </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Calendar;
