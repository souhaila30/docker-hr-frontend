import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      "emailTextField":"empty",
      "data":["nothing yet!!"],
    };
  }

  onEmailTextFieldChange = (event) =>{
    this.setState({"emailTextField": event.target.value});

  }
  onButtonClick = (event) => {
    console.log(this.state.emailTextField);
    this.props.onClickButton(this.state.nameTextField);
  }


  url ="http://vcm-3586.vm.duke.edu:5000/api/heart_rate/"

  getData = () => {
    axios.get(${url}${this.state.emailTextField}).then( (response) => {
      console.log(respose);
      console.log(response.status);
      this.setState({"data":response.data});
    })
  }

    render() {
      return (
        <div>
            <TextField
                value={this.state.emailTextField}
                onChange={this.onEmailTextFieldChange}/>

            <Button variant="raised" onClick={this.getData}>
                Get Heart Rates 
            </Button>

            <div>
                {this.state.data}
            </div>
        </div>
      );
    }
  }

