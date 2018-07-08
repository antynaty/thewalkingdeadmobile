import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 
import { stringify } from 'querystring'; 

import MapView from 'react-native-maps'



class MisPaseos extends React.Component { 
  constructor (){
    super()
    this.state = {
        dataSource:[],
        comentario:'',
        horario:'',
    }
}
  componentWillMount (){

  }
  componentDidlMount (){
    this.postPaseo();
  }
  postPaseo(){
    let collection = {}
    collection.comentario=this.state.comentario,
    collection.horario=this.state.horario 

    console.warn(collection);
 
    const url = 'http://192.168.1.159:3001/1 '
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }) 
    .then((response) => response.json() )
    .catch((error) => { console.log(error) })
  
  }

  render() {
    return ( 
      <View style={styles.container}> 
        <Text> Crear Paseo </Text>

        <View style={styles.formMascota}>
          <Text> Crear Paseo </Text>
          <TextInput placeholder="Modulo" placeholderTextColor="black"
            onChangeText={(text)=>this.valoresMascota(text,'horario')} 
          /> 
          <TextInput placeholder="Dia"  placeholderTextColor="black"
            onChangeText={(text)=>this.valoresMascota(text,'dia')}
          
          />  
          <TextInput placeholder="Comentario"  placeholderTextColor="black"
            onChangeText={(text)=>this.valoresMascota(text,'comentario')}
          
          />  
          <TouchableOpacity  style={styles.subBtn}
            onPress={()=> this.postPaseo() }
          >
            <Text> Crear Paseo </Text>
          </TouchableOpacity> 
        </View>
          {/* <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
              <MapView.Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
              }}
              />

            </MapView> */}
           
      </View>
    );
  }
} 

export default MisPaseos;
 

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
});
