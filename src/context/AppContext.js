import app from 'firebase/app';
// import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
export const AppContext = React.createContext()

const firebaseConfig = {
    apiKey: "AIzaSyBiX_Ob5hiiQ8kaNuC1f7o5yDpVfM4QJSM",
    authDomain: "doordiedemo.firebaseapp.com",
    databaseURL: "https://doordiedemo.firebaseio.com",
    projectId: "doordiedemo",
    storageBucket: "doordiedemo.appspot.com",
    messagingSenderId: "429244637624",
    appId: "1:429244637624:web:04d1264eb282faba4faf4d",
    measurementId: "G-04L0R1YTF2"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);
//   firebase.analytics();


export default class Context extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 'this is from the Context!'
        }
        this.actions = {

        }
    }

    async componentDidMount() {
    }
    render() {
        return (
            <AppContext.Provider value={{ ...this.state, ...this.actions }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }


}
