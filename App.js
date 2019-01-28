import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import {configureStore} from './app/store';
import Main from './app/components/Main';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {configureStore()}>
        <Main/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
