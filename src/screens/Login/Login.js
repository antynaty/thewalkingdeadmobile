import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import {createStackNavigator} from 'react-navigation';

class Login extends React.Component {
  static navigationOptions = {
    header : null 
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../../images/doge.png')} 
                />
            <Text style={styles.title}> The Walking Doge</Text>
            </View>
            <View style={styles.infoContainer}>
                <LoginForm  navigation={this.props.navigation} />
            </View>
      </KeyboardAvoidingView>
    );
  }
} 

export default Login;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8CC540',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 250, // ancho
    height: 265
  },
  title:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    opacity:0.9
  }
 
});
