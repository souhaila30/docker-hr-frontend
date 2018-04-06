import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Table, {TableCell, TableHead, TableRow} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import {Line} from 'react-chartjs-2';

var styles = {
  "appBarStyle": {
    "marginBottom": "30px",
    "marginLeft":"10px",
    "backgroundColor": "blue",
  },
   "textFieldStyle": {
        "marginTop": "50px",
        "marginLeft":"300px",
        "backgroundColor": "lightBlue",
    }
  }

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      "emailTextField":"",
      "data":[],
      "url":"",
      "hr":[],
      "hr_times":[],
    };
  }

  onEmailTextFieldChange = (event) =>{
    this.setState({"emailTextField": event.target.value});

  }
  onButtonClick = (event) => {
    console.log(this.state.emailTextField);
    this.props.onClickButton(this.state.nameTextField);
  }


  getData = () => {
    var newUrl ="http://vcm-3586.vm.duke.edu:5000/api/heart_rate/" + this.state.emailTextField
    axios.get(newUrl).then( (response) => {
      console.log(response);
      console.log(response.status);
    this.setState({"data":response.data});
    })
    return this.state.hr
  }    

  generateTable = () => {
    if (this.state.data.length === 0) {
        return [];
    }
    var tabledata = [];
    console.log(this.state.data)
    for (var i = 0; i < this.state.data[0].length; i++){
      tabledata.push(
        <TableRow>
            <TableCell> {this.state.data[0][i]} </TableCell>
            <TableCell> {this.state.data[1][i]} </TableCell>
        </TableRow>
      );
    }

    return tabledata;
  };

  createGraph = () => {

    var graph_data = {
        labels: this.state.data[1],
        datasets: [
        {
            label: " Heart Rate (bpm)",
            fill: false,
            lineTension: 0.1,
            backgroubackgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.data[0]
            }
        ]
    }
    return graph_data;
  };

    render() {
        var tabledata = this.generateTable();
        var graph_data = this.createGraph();
      return (
        <div>
        <AppBar position="static" style={styles.appBarStyle}>
            <Toolbar>
                <Typography variant="display3" gutterBottom align="right">
                    Heart Data User App
                </Typography>
            </Toolbar>
        </AppBar>
            
            <TextField style={styles.textFieldStyle}
                value={this.state.emailTextField}
                onChange={this.onEmailTextFieldChange}/>
            
            <Button variant="raised" onClick={this.getData}>
                Get User Heart Rates 
            </Button>
            
            <Table>
                    <TableHead>
                                <TableRow>
                                            <TableCell> Heart Rate(bpm) </TableCell>
                                            <TableCell> Time </TableCell>
                                </TableRow>
                    </TableHead>
                    {tabledata}
            </Table>

            <div>
                <h2> Heart Rate Measurements Graph</h2>
                <Line data={graph_data} />
            </div>
        </div>
      );
    }
  }

