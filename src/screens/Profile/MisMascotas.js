import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';  
import { stringify } from 'querystring'; 
import { 
  Container, 
  Content, 
  Header,
  Left,
  Right,
  Card,
  CardItem
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
  listarMascota (){
      const url = 'http://23.45.42.23:3001/perro/all/1'
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
 
    const url = 'http://23.45.42.23:3001/user/create/perro/1/'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: new Header({
        'Content-Type': 'application/json'
      })
    }) 
    .then((response) => response.json() )
    .catch((error) => { console.log(error) })
  
  }
   
  render() {
    return ( 
      <Container style={styles.container}> 
              <Text> Mis Mascotas</Text>

              <TouchableOpacity   underlayColor='#fff' onPress={()=> this.listarMascota() }  >
                  <Text> Listar Mascota </Text>
              </TouchableOpacity>
              <View style={styles.formMascota}>
                <Text> Crear Mascotas</Text> 
                <TextInput placeholder="Nombre" placeholderTextColor="white"
                  onChangeText={(text)=>valoresMascota(text,'nombre')} 
                />
                
                <TextInput placeholder="Chip"  placeholderTextColor="white"
                  onChangeText={(text)=>valoresMascota(text,'Chip')}
                
                />
                
                <TextInput placeholder="Raza"  placeholderTextColor="white"
                  onChangeText={(text)=>valoresMascota(text,'raza')}
                
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
    height:40,
    color:'white'

  }
});
