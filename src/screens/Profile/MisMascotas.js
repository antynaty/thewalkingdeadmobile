import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, } from 'react-native';  
import { stringify } from 'querystring'; 


import { 
  Container, 
  Content,  
} from 'native-base'; 
class MisMascotas extends React.Component { 
  constructor (){
    super()
    this.state = {
        dataSource:[],
        nombre:'',
        Chip:'',
        raza:''
    }
}
  componentWillMount (){

  }
  componentDidlMount (){
    this.listarMascota();
  }
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
              dataSource: responseJson.data});
      })
      .catch((error) => {
          console.log(error)
      })
  }
  valoresMascota(text, field){ 
    if (field == 'nombre'){
      this.setState({
        nombre:text,
      })
    } else if (field == 'Chip'){
      this.setState({
        Chip:text,
      })
    } else if (field == 'raza'){
      this.setState({
        raza:text,
      }) 
    }
  }
  postMascota(){
    let collection = {}
    collection.nombre=this.state.nombre,
    collection.Chip=this.state.Chip,    
    collection.raza=this.state.raza
    console.warn(collection);
 
    const url = 'http://192.168.1.159:3001/user/create/perro/1/'
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
  renderItem = ({item}) => {
    return (

        <View style={styles.flatItem}> 
            <View style={styles.flatContent}>
 
                <Text style={styles.itemTextName}>
                    {item.nombre}
                </Text>
 
                <Text style={styles.itemTextAbout}>
                    {item.Chip}
                </Text>
 
                <Text style={styles.itemTextAbout}>
                    {item.raza}
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
  render() {
    const {navigation} = this.props;
      const email = navigation.getParam('email','NO-EMAIL');
      const password = navigation.getParam('password','NO-PASSWORD');
    return ( 
      <Container style={styles.container}> 
              <Text> Mis Mascotas</Text>

              <TouchableOpacity   underlayColor='#fff' onPress={()=> this.listarMascota(email,password) }  >
                  <Text> Listar Mascota </Text>

              </TouchableOpacity>
              {/* {this.listMascota}  */}
              <FlatList  
                    data = {this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
              />  
              <View style={styles.formMascota}>
                <Text> Crear Mascotas</Text> 
                <TextInput placeholder="Nombre" placeholderTextColor="white"
                  onChangeText={(text)=>this.valoresMascota(text,'nombre')} 
                /> 
                <TextInput placeholder="Chip"  placeholderTextColor="white"
                  onChangeText={(text)=>this.valoresMascota(text,'Chip')}
                
                /> 
                <TextInput placeholder="Raza"  placeholderTextColor="white"
                  onChangeText={(text)=>this.valoresMascota(text,'raza')}
                
                /> 
                <TouchableOpacity  style={styles.subBtn}
                  onPress={()=> this.postMascota() }
                >
                  <Text> Crear Mascota </Text>
                </TouchableOpacity> 
              </View>
              <Content>
              </Content>
              <Content>
              </Content>
      </Container>
    );
  }
}  
export default MisMascotas;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  formMascota:{ 
    backgroundColor: '#8CC540'
  },
  subBtn:{
    backgroundColor:'#014601',
    justifyContent:'center',
    alignItems:'center',
    height:40
  },
  showMascota:{
  }
});
