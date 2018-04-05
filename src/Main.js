import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      "emailTextField":"empty",
      "data":["nothing yet!!"],
      "url":"",
    };
  }

  onEmailTextFieldChange = (event) =>{
    this.setState({"emailTextField": event.target.value});

  }
  onButtonClick = (event) => {
    console.log(this.state.emailTextField);
    this.props.onClickButton(this.state.nameTextField);
  }


//  var newUrl ="http://vcm-3586.vm.duke.edu:5000/api/heart_rate/" + this.state.emailTextField

  getData = () => {
    var newUrl ="http://vcm-3586.vm.duke.edu:5000/api/heart_rate/" + this.state.emailTextField
    axios.get(newUrl).then( (response) => {
      console.log(response);
      console.log(response.status);
      this.setState({"data":response.data});
    })
    return this.state.data
  }
  
  generateTable = () => {
    var TableData = [];
    for (var i = 0; i < this.state.data.length; i++){
      TableData.push(
        <TableRow>
            <TableCell> this.state.data[0] </TableCell>
            <TableCell> this.state.data[1] </TableCell>
        </TableRow>
      )
    };

    return TableData;
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
            
            var TableData = this.generateTable();
            <Table>
                    <TableHead>
                                <TableRow>
                                            <TableCell> Heart Rate(bpm) </TableCell>
                                            <TableCell> Time </TableCell>
                                </TableRow>
                    </TableHead>
                    {TableData}
            </Table>
        </div>
      );
    }
  }

