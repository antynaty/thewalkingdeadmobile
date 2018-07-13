import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 
import { stringify } from 'querystring'; 
import ModalDropdown from 'react-native-modal-dropdown';

import MapView from 'react-native-maps'


const modalOptionsModule = ['A', 'B', 'C', 'D', 'E', 'F', 'G' ];

class MisPaseos extends React.Component { 
  static navigationOptions = ({navigation}) => {
    return { 
        title: "Mis Paseos ", 
        headerStyle: { backgroundColor: '#89B43F' }
    }
}
  constructor (){
    super()
    this.state = {
        dataSource:[], 
        dataSourceMascotas:[],
        horario:'',
        nombreperro:'',
        dia:'',
        valorModulo: '',
        valorDia: '',
        valorMascota:''
    }
}
  componentWillMount (){

  }
  componentDidlMount (){
    this.postPaseo();
    this.listarPaseos ();
  }
  // CREAR PASEO
  postPaseo(correo,contrasena){
    let collection = {} 
    collection.horario=this.state.horario,
    collection.nombreperro=this.state.nombreperro,
    collection.dia=this.state.dia
    collection.email=correo,
    collection.password=contrasena

    console.warn(collection);
 
    const url = 'localhost:3001/paseo/create'
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
  // obtener mascota nombre para modal
  listarMascota (correo,contrasena){
    // 192.168.1.159  23.45.42.23
      const url = 'http://192.168.1.159:3001/perro/all/'
      fetch(url, {
        method: 'GET',
        headers: {
          email: correo,
          password: contrasena,
        },
      })
      .then((response) => response.json() )
      .then( ( responseJson)=> {
          this.setState({
            dataSourceMascotas: responseJson.data});
      })
      .catch((error) => {
          console.log(error)
      })
  }
  // HISTORIAL PASEOS
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


  // DEBUG
  _dropdown_modulo_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
    console.debug(`idx=${idx}, value='${value}'`);
  }
  _dropdown_dia_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
    console.debug(`idx=${idx}, value='${value}'`);
  }
  _dropdown_mascota_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
    console.debug(`idx=${idx}, value='${value}'`);
  }
  render() {
    return ( 
      <View style={styles.container}> 
        <Text style={styles.titulo} > Crear Paseo</Text>
        <View style={styles.column}>
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
          <View style={styles.cell}>
            <ModalDropdown ref="dropdown_dia"
                        style={styles.dia}
                        options={modalOptionsModule}
                        defaultIndex={-1}
                        defaultValue={this.state.valorModulo}
                        onSelect={(idx, value) => this._dropdown_dia_onSelect(idx, value)}
            />
            <TouchableOpacity onPress={() => {
              this.refs.dropdown_dia.select(0);
            }}>
              <Text style={styles.textButton}>
                Crear Paseo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cell}>
            <ModalDropdown ref="dropdown_mascota"
                          style={styles.mascota}
                          options={modalOptionsModule}
                          defaultIndex={-1}
                          defaultValue={this.state.valorMascota}
                          onSelect={(idx, value) => this._dropdown_mascota_onSelect(idx, value)}
            />
            <TouchableOpacity onPress={() => {
              this.refs.dropdown_mascota.select(0);
            }}>
              <Text style={styles.textButton}>
                Crear Paseo
              </Text>
            </TouchableOpacity>

          </View>
        </View>

      <View>
        <TouchableOpacity onPress={()=> this.listarPaseos()}
        > 
          <Text style={styles.titulo} >
              Listar Paseo
          </Text> 
        </TouchableOpacity>
        <ScrollView>
        </ScrollView>
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
  titulo:{
    textAlign: 'center',
    fontSize: 21,
    marginTop: 5,
    opacity:0.9,
    backgroundColor: '#8CC540'
  }, 
  column: {
    flex: 1,
    flexDirection: 'column',
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
