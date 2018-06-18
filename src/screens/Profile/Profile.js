import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'; 

import EditarPerfil from './EditarPerfil';
import MisMascotas from './MisMascotas';
import MisPaseos from './MisPaseos';

class Profile extends React.Component {
  static navigationOptions = {
    header : null 
  }
  render() {
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
                  onPress={()=>  this.props.navigation.navigate('EditarPerfil') }
                >
                  <Text> Editar Perfil </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  underlayColor='#fff'
                  onPress={()=>  this.props.navigation.navigate('MisPaseos') }
                >
                  <Text> Mis Paseos </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  underlayColor='#fff'
                  onPress={()=>  this.props.navigation.navigate('MisMascotas') }
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
