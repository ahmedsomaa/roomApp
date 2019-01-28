import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserInput from './UserInput';
import {Button} from 'react-native-elements';
import {Field, reduxForm} from 'redux-form';
import {
  StyleSheet, 
  View, 
  Image , 
  ImageBackground, 
  Dimensions,
  KeyboardAvoidingView,
  Text
} from 'react-native';
import backgroundImg from '../assets/wall.png';
import logoImg from '../assets/logo-white.png';
import usernameImg from '../assets/username.png';
import passwordImg from '../assets/password.png';
import errorImg from '../assets/error.png';
import {loginUser, signupUser, authUser} from '../actions'


const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (values.email.indexOf('@vodafone.com') === -1) {
    errors.email = 'Invalid email address'
  }

  if(!values.password){
    errors.password = 'Password is required'
  } else if (values.password.length<8){
    errors.password = 'Password must be 8 characters or more'
  }
  return errors
}



const renderEmail = ({ input: { onChange, ...restInput }, meta: {touched, error, warning}}) => {
  return <View><UserInput onChangeText = {onChange}{...restInput} placeholder = 'email' source = {usernameImg} 
          autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/> 
          {touched && ((error && <View style={styles.errorForm}>
            <Image 
              source = {errorImg}
              style = {styles.errorIcon}/>
            <Text style= {styles.err}>{error}</Text></View>))}
          </View>
}

const renderPass = ({ input: { onChange, ...restInput }, meta: {touched, error, warning}}) => {
  return <View><UserInput onChangeText = {onChange}{...restInput} placeholder = 'password' source = {passwordImg} 
          autoCapitalize={'none'} secureTextEntry={true} returnKeyType={'done'} autoCorrect={false}/> 
          {touched && ((error && <View style={styles.errorForm}>
            <Image 
              source = {errorImg}
              style = {styles.errorIcon}/>
            <Text style= {styles.err}>{error}</Text></View>))}
          </View>
}


class Login extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    const submitForm = (values) => {
      console.log(values.email, values.password)
      this.props.dispatch(loginUser(values.email, values.password))

    }
    const {handleSubmit} = this.props;
    return (
      <ImageBackground source={backgroundImg} style = {styles.wallpaper}>
        <View style = {styles.logoContainer}>
          <Image 
            source={logoImg} 
            style={styles.logo} /> 
        </View>
        <KeyboardAvoidingView behavior = "padding" style={styles.inputContainer}>
          <Field 
            name={'email'} 
            component = {renderEmail}/> 
          <Field 
          name={'password'}
          component = {renderPass}/>
        <Button
          onPress = {handleSubmit(submitForm)}
          buttonStyle={styles.button}
          textStyle={styles.Text}
          title={`LOGIN`}
        />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  LogoContainer:{
    flex : 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DEVICE_HEIGHT/3
  },
  logo: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginTop: DEVICE_HEIGHT/3,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60
  },
  button: {
    width: DEVICE_WIDTH - 75,
    height: 50, 
    marginTop: 10, 
    backgroundColor: '#FF0101', 
    borderRadius: 50
},
Text:{
    textAlign: 'center', 
    color : 'white', 
    fontWeight : 'bold', 
},
errorForm: {
  flexDirection: "row",
  marginTop: 10,
  marginLeft: 30,
},
errorIcon: {
  height: 22,
  width: 22,
  marginTop: 10 
},
err: {
  color: 'white',
  fontSize: 16,
  marginTop: 10,
  marginLeft: 10,
  fontWeight: 'bold',
}
})

export default reduxForm({
  form: 'login',
  validate, 
})(Login);
