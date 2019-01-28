import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import {connect} from 'react-redux';
import Alert from './Alert';

class AlertContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    renderAlerts = () => {
      return this.props.alerts.map((alert)=>{
        return (
          <Alert alert={alert} key={alert.id}/>
        )
      })
    }
    return (
      <View style={styles.container}>
        {renderAlerts()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts
  }
}

export default connect(mapStateToProps)(AlertContainer);
