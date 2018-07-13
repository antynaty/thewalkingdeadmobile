import React from 'react';
import { 
    StyleSheet, 
    TextInput, 
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    KeyboardAvoidingView,
    Button
} from 'react-native';
import createStackNavigator from 'react-navigation';
import Login from './Login';
import * as firebase from 'firebase'; 
import { stringify } from 'querystring';  

class LoginForm extends React.Component {
    static navigationOptions = {
        header : null 
    }
    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            password: '',
            response: ''
        }
        this.signUp = this.signUp.bind(this)
        this.login = this.login.bind(this)
    }

    componentWillMount (){
        var config = {
            apiKey: "AIzaSyBfR7sFJkHu19WjzIkcR6FKL98M_fvyYn0",
            authDomain: "walkingdodge.firebaseapp.com",
            databaseURL: "https://walkingdodge.firebaseio.com",
            projectId: "walkingdodge",
            storageBucket: "walkingdodge.appspot.com",
            messagingSenderId: "700345645357"
        };
        firebase.initializeApp(config);
    }
    renderSeparator = () => {
        return ( 
            <View
                style={{ height:2, width:'100%', backgroundColor:'#8CC540' }}
            >
            </View>
        )
    }
    async signUp(){
        try {
            let collection = {}
            collection.nombre=this.state.nombre,
            collection.apellido=this.state.apellido,    
            collection.telefono=this.state.telefono,
            collection.email=this.state.email,
            collection.password=this.state.password
            console.warn(collection);
 
            const url = '192.168.0.13:3001/user/'
            fetch(url, {
            method: 'POST',
            body: JSON.stringify(collection),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            })
            .then(async (listo) => {
                if(listo) {
                await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                this.setState({
                response: 'Cuenta creada exitosamente'
            });
            
            setTimeout(()=>{
                this.props.navigation.navigate('DrawerNavigator',{
                    email: this.state.email,
                    password: this.state.password, 
                });
            }, 100)
                }
                else {
                    res.status(400).json({
                        status: 0,
                        statusCode: 'paseo/error',
                        description: "No se pudo crear el paseo"
                    });
                }
            })
            // await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            // this.setState({
            //     response: 'Cuenta creada exitosamente'
            // })
            
            // setTimeout(()=>{
            //     this.props.navigation.navigate('Home')
            // }, 100)
        } catch(error){
            this.setState({
                response: error.toString()
            })
        } 
    }

    async login(){

      const email = this.state.email;
      const password =  this.state.password;
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            this.setState({
            response: 'usario conectado'
            })
            setTimeout(()=>{
                this.props.navigation.navigate('DrawerNavigator' ,{
                    email: email,
                    password: password, 
                  })

            }, 100)
        } catch(error){
            this.setState({
                response: error.toString()
            })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholderTextColor="grey"
                    placeholder="Nombre"
                    maxLength = {10}
                    style={styles.input}
                    onChangeText={(nombre)=> this.setState({nombre})} />
                <TextInput 
                    placeholderTextColor="grey"
                    placeholder="Apellido"
                    maxLength = {10}
                    style={styles.input}
                    onChangeText={(apellido)=> this.setState({apellido})}/>
                <TextInput 
                    placeholderTextColor="grey"
                    placeholder="Telefono"
                    maxLength = {10}
                    style={styles.input}
                    onChangeText={(telefono)=> this.setState({telefono})}/>    
                <TextInput 
                    placeholderTextColor="grey"
                    placeholder="Email"
                    maxLength = {20} 
                    style={styles.input}
                    onChangeText={(email)=> this.setState({email})}/>
                <TextInput 
                    placeholderTextColor="grey"
                    placeholder="Contraseña"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(password)=> this.setState({password})}/>    
                <TouchableOpacity 
                    onPress={this.login}
                    style={styles.buttonContainer }>
                <Text
                    style={ styles.buttonText }>Login</Text>
                </TouchableOpacity>
                {this.renderSeparator()}
                <TouchableOpacity
                    onPress={this.signUp}
                    style={ styles.buttonContainer }>
                    <Text style={ styles.buttonText }>
                        Registrarse
                    </Text>
                </TouchableOpacity>
          </View>
        );
    }
}
 
export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        position:'absolute',
        left: 0,
        right:0,
        bottom:2
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        //backgroundColor: '#EFFBFB',
        height:40,
        marginBottom:10, 
        paddingHorizontal: 10
    },
    buttonContainer: {
        padding: 15,
        backgroundColor:'#77A43B',
    },
    buttonText: {
        color:'#000000',
        textAlign:'center',
        fontSize: 18
    },
    loginButton: {
        // color:'#000000',
        textAlign:'center',
        fontSize: 18
    }
});