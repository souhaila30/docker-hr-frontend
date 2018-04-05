import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
//import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
/*
import ReactTable from 'react-table'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
*/
//import EmailField from './emailfield.js'

var styles = {
  "dataStyle": {
        "marginTop":"120px",
        "marginbottom":"20px",
        "color":"blue",
  }
}

var url = ""

class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {
          "emailTextField": "sa@duke.edu",
          "data": ['nothing yet'],
        };
    }
    
    url= "http://vcm-3586.vm.duke.edu:5000/api/heart_rate/"
    
    onEmailTextFieldChange = (event) => {
      this.setState({"emailTextField":event.target.value});
    }

    onButtonClick = (event) => {
      console.log(this.state.emailTextField);
    }

        url  =`url ${this.state.emailTextField}`
        getData = () => {
            axios.get(url).then( (response) => {
                    console.log(response);
                    console.log(response.status);
                    this.setState({"data": response.data});
            })
        }

    render() {
      return (
            <div>
                <TextField
                    value={this.state.emailTextField}
                    onChange={this.onEmailTextFieldChange}/>

                <Button variant="raised" onClick={this.onButtonClick}>
                    Get Heart Rate Data
                </Button>

                <div style={styles.dataStyle}>
                    {url}
                    {this.state.data}
                </div>
            </div>
      )                
    }
}

export default FetchData;
