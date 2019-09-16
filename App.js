/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// https://firebase.google.com/docs/functions/callable-reference

// https://facebook.github.io/react-native/docs/network

// https://firebase.google.com/docs/functions/callable-reference


//https://stackoverflow.com/questions/42995433/how-firebase-cloud-functions-handle-http-post-method

// https://stackoverflow.com/questions/51066434/firebase-cloud-functions-difference-between-onrequest-and-oncall/51477892#51477892

// youtube.com/watch?v=3LH5QJQKX-Q

//https://stackoverflow.com/questions/42560168/typescript-2-2-express-req-res-implicitly-any

//https://stackoverflow.com/questions/34508081/how-to-add-typescript-definitions-to-express-req-res?rq=1

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firebase from 'react-native-firebase'

const httpsCallable = firebase.functions().httpsCallable('myTestFX');

const httpsCallable_custom = firebase.functions().httpsCallable('myTestFX_customHTTPSs');


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      
      some: 'default',
      url_test :'default',
      testPuppeteer_2 :'default',

    }

  }

  /////////////////////////// 

  
  _testPuppeteer = () =>{

    
    //fetch('https://us-central1-febwhatsapp.cloudfunctions.net/helloWorld', )
    fetch('https://us-central1-febv2firebasewhatsapp.cloudfunctions.net/testPuppeteer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
      'body': JSON.stringify({
  
          'data' :'hey bro'
  
      })
    }  
    ).then((datathis)=>datathis.json())
    .then((datathis2)=>{

      try{

        console.log('HERE 56 ', datathis2)

        this.setState({



        })

      }catch{


      }

      try{

        console.log('HERE 55 ', JSON.stringify(datathis2))

      }catch{


      }

      
      

    }).catch(e=>{
  
      
      console.log('HERE 3')
  
      console.log(e.code);
      console.log(e.message);
      console.log(e.details.foo);
  
  
  
    })






  } /////////// ..> end puppeteer cloud function


  /////////// ..> test puppeteer

  _testPuppeteer_2 = () =>{

    
    //fetch('https://us-central1-febwhatsapp.cloudfunctions.net/helloWorld', )
    fetch('https://us-central1-febv2firebasewhatsapp.cloudfunctions.net/testPuppeteer_2', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
      'body': JSON.stringify({
  
          'data' :'skincarisma cosrx salicylic acid daily gentle cleanser ingredient_list'
  
      })
    }  
    ).then((datathis)=>datathis.json())
    .then((datathis2)=>{

      try{

        console.log('HERE 56 ', datathis2)

        this.setState({



        })

      }catch{


      }

      try{

        console.log('HERE 55 ', JSON.stringify(datathis2))

      }catch{


      }

      
      

    }).catch(e=>{
  
      
      console.log('HERE 3')
  
      console.log(e.code);
      console.log(e.message);
      console.log(e.details.foo);
  
  
  
    })






  } /////////// ..> end puppeteer_2 cloud function


  /////////////////////// >>>>>>>>>>>>


  _test2 = () =>{

    console.log('checkk test')

    this.setState({
  
        some:'working'
    })
  
    //fetch('https://us-central1-febwhatsapp.cloudfunctions.net/helloWorld', )
    fetch('https://us-central1-febv2firebasewhatsapp.cloudfunctions.net/helloWorld_2', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
      'body': JSON.stringify({
  
          'data' :'hey bro'
  
      })
    }  
    ).then((datathis)=>datathis.json())
    .then((datathis2)=>{

      try{

        console.log('HERE 56 ', datathis2)

      }catch{


      }

      try{

        console.log('HERE 55 ', JSON.stringify(datathis2))

      }catch{


      }

      
      

    }).catch(e=>{
  
      
      console.log('HERE 3')
  
      console.log(e.code);
      console.log(e.message);
      console.log(e.details.foo);
  
  
  
    })

  }
 

  /////////////////// >>>>>>>>>>


  ///////// >>  END function  >>>



  render() {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>


        <Text style={{ alignSelf: 'center', margin: 10 }}>h_world2 : {this.state.some}</Text>
        <View style={{ width: 120, alignSelf: 'center' }}>
          <Button title='basic cloud' onPress={() => { this._test2(); }}></Button>
        </View>

        <View style={{ margin: 15 }}></View>

        
        <Text style={{ alignSelf: 'center', margin: 10 }}>test puppeteer : {this.state.url_test}</Text>
        <View style={{ width: 120, alignSelf: 'center' }}>
          <Button title='get url cloudFX' onPress={() => { this._testPuppeteer(); }}></Button>
        </View>


        <View style={{ margin: 15 }}></View>

        
        <Text style={{ alignSelf: 'center', margin: 10, width:'95%', backgroundColor:'yellow' }}>test puppeteer V2 : {this.state.testPuppeteer_2}</Text>
        <View style={{ width: 120, alignSelf: 'center' }}>
          <Button title='test puppeteer 2' onPress={() => { this._testPuppeteer_2(); }}></Button>
        </View>


      </View>
    );

  };
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
