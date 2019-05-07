import React from 'react';
import { Card, CardTitle, CardMedia, CardActions } from 'react-toolbox/lib/card';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import van from './images/van.jpg';

export default class Maps extends Components{
  constructor(props){
    super(props);
    this.handleClickDataTown = this.handleClickDataTown.bind(this);
    this.onChangeDataTown = this.onChangeDataTown.bind(this);

    this.state = {
      town:
    };
toggleDropdown = (e) =>

  })
}

  }
}
const Maps = (props) => (

  <Card style={{width: '250px'}}>
    <CardTitle
      avatar={van}
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia>

      <DropdownButton id="dropdown-item-button" title="Dropdown button" key={props.id} onClick = {()=> props.handleClick(props.id, props.clicked)}>
      <Dropdown.Item as="button">Frisco</Dropdown.Item>
      <Dropdown.Item as="button">Ouray</Dropdown.Item>
      <Dropdown.Item as="button">Pagosa Springs</Dropdown.Item>
      <Dropdown.Item as="button">Salida</Dropdown.Item>
      <Dropdown.Item as="button">Steamboat Springs</Dropdown.Item>
    </DropdownButton>
    </CardMedia>
    <div className = "card" id = "img-card">
    <div className = "img-container">
    <img
      id = {props.id}
      src = {props.image}
      alt = {props.town}
      />
    </div>
    </div>
    <CardActions>
      {/* <Button label="Action 1" />
      <Button label="Action 2" /> */}
    </CardActions>
  </Card>
);

// return <DIY />;

export default Maps;
