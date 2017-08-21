import React, { Component } from 'react';
import Quote from './Quote';
import logo from './logo.svg';
import './App.css';


//const element = (
 // <h1>
   // Hello, {user}! /^);

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text:''}
  }

  componentWillMount(){
    var firebase = require("firebase");
    var config = {
    apiKey: "AIzaSyCvwxQz4ZMtKyRFKgYBQXhoCg-JmXV6kT8",
    authDomain: "quoter-5284c.firebaseapp.com",
    databaseURL: "https://quoter-5284c.firebaseio.com",
    projectId: "quoter-5284c",
    storageBucket: "",
    messagingSenderId: "720892158342"
    };
    firebase.initializeApp(config);
    this.items = [];

    this.firebaseRef = firebase.database().ref();
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      console.log(dataSnapshot.val());
      this.items.push(dataSnapshot.val());
      this.setState({
        items: this.items
      });
    }.bind(this));

  }


  render() {
    var user = "Marley";
    
    return (
      <div className="App">
        <p className="App-intro">HELLOOOOOO
        </p>
        <h1>hi</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value ={this.state.text}/>
            <button>Submit!</button>
          </form>
        </div>

        <Quotelist items={this.state.items}/>
        <Quote/>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.firebaseRef.push({
      quoteText: this.state.text,
      id: Date.now()
    });
    /*var newItem = {
      quoteText: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));*/
  }
}

class Quotelist extends Component {
  render(){
    return(
      <ul>
        {this.props.items.map(item => (
          <Quote key={item.id} date={item.id} quoteText={item.quoteText}/>))}
      </ul>
      );
  }
}

export default App;
