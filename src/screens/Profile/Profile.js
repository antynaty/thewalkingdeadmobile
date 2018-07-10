import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'; 

import EditarPerfil from './EditarPerfil';
import MisMascotas from './MisMascotas';
import MisPaseos from './MisPaseos';
import LoginForm from '../Login/LoginForm';

class Profile extends React.Component {
  static navigationOptions = {
    header : null 
  }
  render() {
      const {navigation} = this.props;
      const email = navigation.getParam('email','NO-EMAIL');
      const password = navigation.getParam('password','NO-PASSWORD');
    return ( 
      
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.fotoContainer}> 
              </View>
              <Text> NOMBRE USUARIO</Text>
          </View>
          <View style={styles.center}>  
                <TouchableOpacity  
                  underlayColor='#fff'
                  onPress={()=>  this.props.navigation.navigate('EditarPerfil',{
                    email: email,
                    password: password, 
                  })
                 }
                >
                  <Text> Editar Perfil </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  underlayColor='#fff'
                  onPress={()=>  this.props.navigation.navigate('MisPaseos',{
                    email: email,
                    password: password, 
                  }) 
                }
                >
                  <Text> Mis Paseos </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  underlayColor='#fff'
                  onPress={()=>  this.props.navigation.navigate('MisMascotas',{
                    email: email,
                    password: password, 
                  })
                 }
                >
                  <Text> Mis Mascotas </Text>
                </TouchableOpacity>      

          </View>
      </View>
    );
  }
} 

export default Profile;
 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  map:{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',

  },
  header:{
    height: '45%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#9EE384'
  },
  fotoContainer:{
    width: 140,
    height:140,
    borderRadius:100,
    borderWidth:4,
    borderColor:'#fff',
    backgroundColor:'#eee'
  },
  center:{  
    justifyContent: 'center',
    alignItems:'center',
  }
 
});
