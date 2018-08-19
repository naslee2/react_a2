import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponet/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: ''
  }
  inputChangeHandler = (event) =>{
    this.setState({text: event.target.value});
  }

  deleteCharHandler = (index) =>{
    const textch = this.state.text.split('');
    textch.splice(index, 1); //removes textch from array
    const updatedText = textch.join('');
    this.setState({text: updatedText})
  }

  render() {
    const charList = this.state.text.split('').map((ch, index) =>{
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>;
      //to turn into js arrays, use .split(), splits string into each char
    });

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.text}/>
        <p>{this.state.text}</p>
        <Validation inputLength={this.state.text.length}/>

        {charList}
      </div>
      
    );
  }
}

export default App;
