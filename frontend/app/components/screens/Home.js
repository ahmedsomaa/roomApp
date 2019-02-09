import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeScreen from './Welcome';
import CalendarScreen from './Calendar';
import RoomScreen from './Room';
import {Dimensions} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator></AppNavigator>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;

const Navigator = createStackNavigator({
  WelocomeScreen: {screen: WelcomeScreen, navigationOptions: {header:null}},
  CalendarScreen: {screen: CalendarScreen, navigationOptions: {header:null}},
  RoomScreen: {screen: RoomScreen, navigationOptions :
    {
      title : 'Meeting Rooms',
      headerTintColor: 'white',
      headerTitleStyle:{
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        textAlign: "center",
        justifyContent: 'center',
        flex: 1,
        fontWeight: 'bold',
        textAlignVertical: 'center'
      },
      headerStyle: {
        backgroundColor: '#E00000',
      }
    }
  }
})
const AppNavigator = createAppContainer(Navigator);
