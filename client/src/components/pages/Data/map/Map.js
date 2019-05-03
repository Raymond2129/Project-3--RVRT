import React from 'react';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import { Dropdown, DropdownButton} from 'react-bootstrap/';


let Map = React.createClass({ getInitialState:function(){
  return{ showResults:false};
},
onClick: function() {
  this.setState({ showResults:true});
},
render: function(){
  return(
    <div>
    <input type = "submit" value = "Search" onClick = {this.onClick}/>
      {this.state.showResults? <Results /> : null}
    </div>
    )
  }
});

let Results = React.createClass({ render: function(){
  return(
    <div id = "results" className = "search-results">XYZ </div>
  )
}
});
function DisplayMap(props){
  return(

        <Card style={{width: '350px'}}>
        <CardTitle {...Map} width = "350" height = "480"
        />
        <CardMedia>
          <DropdownButton id="dropdown-item-button" title="Select Your Location">
            <Dropdown.Item as="button"className = "frisco">Frisco</Dropdown.Item>
            <Dropdown.Item as="button"className = "ouray">Ouray</Dropdown.Item>
            <Dropdown.Item as="button"className = "pagosa">Pagosa Springs</Dropdown.Item>
            <Dropdown.Item as="button"className = "salida">Salida</Dropdown.Item>
            <Dropdown.Item as="button"className = "steamboat">Steamboat Springs</Dropdown.Item>
          </DropdownButton>
        </CardMedia>

        <CardMedia iframe src="" width="640" height="480">This is where the map should be
        </CardMedia>
        </Card>

  )};



export default DisplayMap;
