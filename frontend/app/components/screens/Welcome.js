import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  TouchableOpacity, 
  Dimensions
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Card} from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import backImg from '../../assets/home.png';
import calImg from '../../assets/cal.png';
import roomImg from '../../assets/meet-r.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPressCalendar=()=>{
    this.props.navigation.navigate("CalendarScreen");
}

onPressRoom=()=>{
    this.props.navigation.navigate("RoomScreen");
}

  
  render() {
    return (
      <ImageBackground source={backImg} style={styles.wallpaper}>
                <View style={styles.header}>
                    <View style={styles.options}>
                        <Text style={styles.headline}>Welcome</Text>
                        <Text style={styles.subHead}>Book a Meeting Room Anytime Anywhere </Text>
                        <Text style={styles.title} >Book Now By</Text>
                    </View>
                    <View style={styles.choices} >
                        <TouchableOpacity onPress={this.onPressCalendar}>
                            <Card containerStyle={styles.calCard}>
                                <View style={styles.options}>
                                    <Image
                                        style={styles.logo}
                                        source = {calImg}/>
                                    <Text style={styles.calTitle}>Calendar</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressRoom}>
                            <Card containerStyle={styles.roomCard}>
                                <View style={styles.options}> 
                                    <Image 
                                            style={styles.logo}
                                            source = {roomImg}/>
                                    <Text style={styles.roomTitle}>Room</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wallpaper:{
      width: '100%', 
      height: '100%'
  },
  logo:{
      height: 50,
      width: 50
  },
  header:{
      flex : 1,
      marginTop: DEVICE_HEIGHT/4,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
  },
  headline:{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center', 
      color : '#FF0101', 
      fontSize: 30, 
      marginTop: 20,
      fontWeight: 'bold',
  },
  subHead:{
      textAlign: 'center', 
      color : '#FF0101', 
      padding: 10,
      fontSize: 20, 
      marginTop: 10,
  },
  roomTitle:{
      textAlign: 'center', 
      color : '#FF0101', 
      padding: 10,
      fontSize: 20, 
      marginTop: 10,
  },
  calTitle:{
      textAlign: 'center', 
      color : 'white', 
      padding: 10,
      fontSize: 20, 
      marginTop: 10,
  },
  title:{
      textAlign: 'center', 
      color : '#FF0101', 
      padding: 10,
      fontSize: 20, 
      marginTop: 10,
      fontWeight: 'bold',
  },
  options:{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
  },
  choices:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
  },
  calCard:{
      width: 140,
      height: 160, 
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: '#FF0101'
  },
  roomCard:{
      width: 140,
      height: 160, 
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#FF0101',
      backgroundColor: 'white',
      shadowColor: '#FF0101'
  }
});
export default Home;
