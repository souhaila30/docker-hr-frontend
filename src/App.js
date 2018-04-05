import React from 'react';
import ReactDOM from "react-dom";
import './App.css';

//import EmailField from './emailfield.js';
import Title from './hello.js';
//import FetchData from './FetchData.js';
//import Header from './Header.js';
//import TableOutput from './CreateTable.js';
import Main from './Main.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Main />
      </div>
    );
  }
}


export default App;
