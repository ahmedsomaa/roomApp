import React, { Component } from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text } from 'react-native';
import AlertContainer from './alerts/AlertContainer';

import Login from './Login';
import Home from './Home';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      renderMainView = () => {
        if(this.props.user_id){
            return(
              <Home/>
            )
        } 
        else{
          return (
              <Login/>
          );
        }
      }   
    return (
       <View style = {{flex: 1}}>
       {renderMainView()}
        <AlertContainer/>
       </View> 
    )
  }
}

var mapStateToProps = (state) => {
    return{
        user_id: state.auth.user_id
    }
}

export default connect(mapStateToProps)(Main);
