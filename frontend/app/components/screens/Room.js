import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {FETCHR_URL} from '../../api';
import {
    StyleSheet, 
    RefreshControl, 
    ScrollView , 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {fetchRooms} from '../../actions';



class RoomItem extends Component {
    render(){
        return(
            <TouchableOpacity onPress={console.log('heading to the room')}>
                <Card
                    containerStyle = {styles.cardContainer}
                    //title={this.props.text}
                    image={
                        source= {uri: this.props.uri}
                    }>
                    <Text style={{marginBottom: 5, fontSize: 20, alignSelf: 'center'}}>
                        {this.props.text}
                    </Text>
                </Card>
            </TouchableOpacity>
        )
    }
}

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
        refreshing: false,

    };
  }

  componentWillMount() {
    this.props.dispatch(fetchRooms()).then((res) => {
        console.log(res)
    })
  }

  renderRooms = () => {
    //console.log('renderRooms')
    axios.get(FETCHR_URL).then((res) => {
        console.log(res.data)
        var Rooms = res.data
        return Rooms.map((room) => {
            return(
                <RoomItem key = {room._id} text = {room.room_id} uri = {room.Uri}/>
            )
        })
    }).catch((err) => {
        console.log(err)
    })
    //this.props.dispatch(fetchRooms())
    //console.log(this.props.rooms)
    /* return this.props.rooms.map((room) => {
        return (
            <RoomItem key = {room._id} text = {room.roomID} id = {room._id} uri = {room.picUri}/>
        )
    }) */
}

  render() {
    
      console.log('rooms', this.props.rooms)
    return (
      <View style = {styles.container}>
        <ScrollView 
            refreshControl ={
                <RefreshControl
                    onRefresh = {this.onRefresh} 
                    refreshing = {this.props.refreshing}/>
            }
            contentContainerStyle={styles.scrollViewContainer}
            automaticallyAdjustContentInsets= {true}>
            {this.renderRooms()}
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    RoomContainer:{
        padding: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: -1,
        borderColor: '#ccc',
    },
    cardContainer:{
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        shadowColor: '#FF0101'
    }
})

var mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(Room);
