import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import ReactTable from 'react-table'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

var styles = {
  "dataStyle": {
        "marginTop":"20px",
        "marginbottom":"20px",
        "color":"blue",
  }
}

class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {email : "none",
          url: "http://vcm-3586.vm.duke.edu:5000/api/heart_rate/",
          data: ['nothing yet']
        };
    

    changeEmail(email) {this.setState({email})};
    completeUrl = this.state.url + this.state.email

    getRequest = () => {
            axios.get(completeUrl).then( (response) => {
                    console.log(response);
                    console.log(response.status);
                    this.setState({"data": response.data});
            })
    }
        
    render() {
      return (
            <div>
                <Button variant='raised' onClick={this.getRequest}>
                    Get Heart Rate Data
                </Button>

                <div style={styles.dataStyle}>
                    {this.state.data}
                </div>
        </div>
      )                
    }
};

export default FetchData;

