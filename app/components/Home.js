import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text> Welcome from HomeJS </Text>
        <TouchableOpacity  onPress = {handleSubmit(onSignOut)}>
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
