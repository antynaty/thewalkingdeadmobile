/*import React from 'react';
import { StyleSheet,
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native'; 
import { stringify } from 'querystring'; 

import ModalDropdown from 'react-native-modal-dropdown';

const modalOptionsModule = ['A', 'B', 'C', 'D', 'E', 'F', 'G' ];


import Picker from 'react-native-picker';

/*
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
      const url = 'http://192.168.0.20:3001/perro/all/'
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
    // 192.168.1.159  23.45.42.23  192.168.0.20
      const url = 'http://192.168.0.20:3001/paseo/all/'
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
  renderItem = ({item}) => {
    return (

        <View style={styles.flatItem}> 
            <View style={styles.flatContent}>
 
                <Text style={styles.itemTextName}>
                    {item.horario}
                </Text>
 
                <Text style={styles.itemTextAbout}>
                    {item.dia}
                </Text>
 
                <Text style={styles.itemTextAbout}>
                    {item.estado}
                </Text>
            </View> 
        </View>
    ) 
  }
  renderSeparator = () => {
      return ( 
          <View
              style={{ height:2, width:'100%', backgroundColor:'white' }}
          >
          </View>
      )
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
  
            <ModalDropdown ref="dropdown_dia"
                        style={styles.dia}
                        options={modalOptionsModule}
                        defaultIndex={-1}
                        defaultValue={this.state.valorModulo}
                        onSelect={(idx, value) => this._dropdown_dia_onSelect(idx, value)}
            />
              
            <ModalDropdown ref="dropdown_mascota"
                          style={styles.mascota}
                          options={modalOptionsModule}
                          defaultIndex={-1}
                          defaultValue={this.state.valorMascota}
                          onSelect={(idx, value) => this._dropdown_mascota_onSelect(idx, value)}
            />
           </View>   
        </View>

      <View>
        <TouchableOpacity style={styles.subBtn}
                      onPress={()=> this.listarPaseos()}
        > 
          <Text style={{ color:'white', fontSize:21}} >
              Listar Paseo
          </Text> 
          <FlatList  
                    data = {this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
              /> 
        </TouchableOpacity>
        <ScrollView>
        </ScrollView>
      </View>
    </View>
    );
  }
} 
*/

/**
 * Bootstrap of PickerTest
 */

import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class MisPaseos extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            Horario: undefined,
            items: [
                {
                    label: 'A',
                    value: 'A',
                },
                {
                    label: 'B',
                    value: 'B',
                },
                {
                    label: 'C',
                    value: 'C',
                },
                {
                  label: 'D',
                  value: 'D',
              },
              {
                  label: 'E',
                  value: 'E',
              },
              {
                  label: 'F',
                  value: 'F',
              },
            ],
            Dias: undefined,
            items2: [
                {
                    label: 'Lunes',
                    value: 'Lunes',
                },
                {
                    label: 'Martes',
                    value: 'Martes',
                },
                {
                    label: 'Miercoles',
                    value: 'Miercoles',
                },
                {
                  label: 'Jueves ',
                  value: 'Jueves',
              },
              {
                label: 'Viernes',
                value: 'Viernes',
            },
            {
              label: 'Sabado',
              value: 'Sabado',
          },
          {
            label: 'Domingo',
            value: 'Domingo',
        },
            ],

            Perros: undefined,
            items3: [
                {
                    label: '1',
                    value: '1',
                },
                {
                    label: '2',
                    value: '2',
                },
                {
                    label: '3',
                    value: '3',
                },
                
            ],
        };
    }

    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                Horario: 'G',
            });
        }, 1000);

        // parent can also update the `items` prop
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat([{ value: 'G', label: 'G' }]),
            });
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Nombre</Text>
                <TextInput
                    ref={(el) => {
                        this.inputRefs.name = el;
                    }}
                    returnKeyType="next"
                    enablesReturnKeyAutomatically
                    onSubmitEditing={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    style={pickerSelectStyles.inputIOS}
                    blurOnSubmit={false}
                />



                                <View style={{ paddingVertical: 5 }} />

<Text>Cantidad de Perros</Text>
<RNPickerSelect
    placeholder={{
        label: 'Selecciona cantidad de perros...',
        value: null,
    }}
    items={this.state.items3}
    onValueChange={(value) => {
        this.setState({
            Perros: value,
        });
    }}
    onUpArrow={() => {
        this.inputRefs.name.focus();
    }}
    onDownArrow={() => {
        this.inputRefs.picker2.togglePicker();
    }}
    style={{ ...pickerSelectStyles }}
    value={this.state.Perros}
    ref={(el) => {
        this.inputRefs.picker = el;
    }}
/>

                <View style={{ paddingVertical: 5 }} />

                <Text>Elegir Horario</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Selecciona Horario...',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            Horario: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.Horario}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>Dia de tu paseo</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Seleccione Dia...',
                        value: null,
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            Dias: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.Dias}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>Comentarios</Text>
                <TextInput
                    ref={(el) => {
                        this.inputRefs.company = el;
                    }}
                    returnKeyType="go"
                    enablesReturnKeyAutomatically
                    style={pickerSelectStyles.inputIOS}
                    onSubmitEditing={() => {
                        Alert.alert('Success', 'Form submitted', [{ text: 'Okay', onPress: null }]);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});

 

/*const styles = StyleSheet.create({
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
  subBtn:{
    backgroundColor:'#6F8F37',
    justifyContent:'center',
    alignItems:'center',
    height:40
  },
});*/
