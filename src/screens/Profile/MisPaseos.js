import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 
import { stringify } from 'querystring'; 
import ModalDropdown from 'react-native-modal-dropdown';

import MapView from 'react-native-maps'


const modalOptionsModule = ['Modulo A', 'Modulo B', 'Modulo C', 'Modulo D', 'Modulo E', 'Modulo F', 'Modulo G' ];

class MisPaseos extends React.Component { 
  static navigationOptions = ({navigation}) => {
    return { 
        title: "Mis Paseos " 
    }
}
  constructor (){
    super()
    this.state = {
        dataSource:[],
        comentario:'',
        horario:'',
        valorModulo: ''
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
 
    const url = 'http://192.168.1.159:3001/paseo/1 '
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
  listarPaseos (){
    // 192.168.1.159  23.45.42.23
      const url = 'http://192.168.1.159:3001/paseo/all/'
      fetch(url)
      .then((response) => response.json() )
      .then( ( responseJson)=> {
          this.setState({
              dataSource: responseJson.data});
      })
      .catch((error) => {
          console.log(error)
      })
  }
  _dropdown_modulo_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
    console.debug(`idx=${idx}, value='${value}'`);
  }
  render() {
    return ( 
      <View style={styles.container}> 
        <Text> Crear Paseo</Text>
        <View style={styles.row}>
          <View style={styles.cell}>
            <ModalDropdown ref="dropdown_modulo"
                          style={styles.modulo}
                          options={modalOptionsModule}
                          defaultIndex={-1}
                          defaultValue={this.state.valorModulo}
                          onSelect={(idx, value) => this._dropdown_modulo_onSelect(idx, value)}
            />
            <TouchableOpacity onPress={() => {
              this.refs.dropdown_modulo.select(0);
            }}>
              <Text style={styles.textButton}>
                Crear Paseo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text> Listar Paseos</Text>
        <View>
        </View>
      </View>
    );
  }
} 

export default MisPaseos;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
  },
  modulo: {
    flex: 1,
    top: 32,
    left: 8,
  },
  dropdown_6: {
    flex: 1,
    left: 8,
  },
  map:{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',

  },
});
