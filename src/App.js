import React from 'react';
//import ReactDOM from "react-dom";
import './App.css';
import EmailField from './emailfield.js';
import Title from './hello.js';
import FetchData from './FetchData.js';
import Header from './Header.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        title:"Heart Rate Monitor",
        };
    };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Title />
        <EmailField />
        <FetchData />
      </div>
    );
  }
}


export default App;
