import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {unauthUser} from '../actions/authActions';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signOut = () => {
    this.props.dispatch(unauthUser)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text> Welcome from HomeJS </Text>
        <TouchableOpacity onPress={this.signOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})

export default Home;
