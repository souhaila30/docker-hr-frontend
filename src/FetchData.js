import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';

class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {
          "data": ["Nothing yet"],
        };
    }

    getRequest = () => {
            axios.get("http://vcm-3586.vm.duke.edu:5000/api/heart_rate/").then( (response) => {
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

                <div>
                    {this.state.data}
                </div>
            </div>
      )
    }
}

export default FetchData;
