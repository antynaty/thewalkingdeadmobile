import * as firebase from 'firebase'

class Firebase {
    static init(){
        firebase.initializeApp({
            apiKey: "AIzaSyBfR7sFJkHu19WjzIkcR6FKL98M_fvyYn0",
            authDomain: "walkingdodge.firebaseapp.com",
            databaseURL: "https://walkingdodge.firebaseio.com",
            storageBucket: "walkingdodge.appspot.com",
        });
    }
}

module.exports = Firebase