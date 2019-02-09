import React, { Component } from 'react';
import UserInput from '../customs/UserInput';   // customized TextInput
import {Button} from 'react-native-elements';
import {
  StyleSheet, 
  View, 
  Image , 
  ImageBackground, 
  Dimensions,
  KeyboardAvoidingView,
  Text
} from 'react-native';

// powerful form to hanlde login form
import {Field, reduxForm} from 'redux-form';

// api to handle login
import {loginUser} from '../../actions'


// images and icons
import backgroundImg from '../../assets/wall.png';
import logoImg from '../../assets/logo-white.png';
import usernameImg from '../../assets/username.png';
import passwordImg from '../../assets/password.png';
import errorImg from '../../assets/error.png';


// validation on user's input
const validate = values => {
  const errors = {}

  // no email provided
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (values.email.indexOf('@vodafone.com') === -1) {  // email doesn't belong to domain [vodafone]
    errors.email = 'Invalid email address'
  }

  // no password provided
  if(!values.password){
    errors.password = 'Password is required'
  } else if (values.password.length<8){             // password length must be 8 characters at least
    errors.password = 'Password must be 8 characters or more'
  }
  return errors
}

// redux-form Filed gives the option to render a customized component for the field...that's how email would be rendered
const renderEmail = ({ input: { onChange, ...restInput }, meta: {touched, error}}) => {
  return <View><UserInput onChangeText = {onChange}{...restInput} placeholder = 'email' source = {usernameImg} 
          autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/> 
          {touched && ((error && <View style={styles.errorForm}>
            <Image 
              source = {errorImg}
              style = {styles.errorIcon}/>
            <Text style= {styles.err}>{error}</Text></View>))}
          </View>
}

// how password field is rendered handling errors
const renderPass = ({ input: { onChange, ...restInput }, meta: {touched, error}}) => {
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

    // sign in button handle
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
