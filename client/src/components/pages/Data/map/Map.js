import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Dropdown, DropdownButton} from 'react-bootstrap/';
// import Button from 'react-toolbox/lib/button';
import diy from './images/diy.jpg';


const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const Maps = () => (
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar={diy}
      title="Select Your Location"
    />
    <CardMedia>
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button"className = "frisco">Frisco</Dropdown.Item>
      <Dropdown.Item as="button"className = "ouray">Ouray</Dropdown.Item>
      <Dropdown.Item as="button"className = "pagosa">Pagosa Springs</Dropdown.Item>
      <Dropdown.Item as="button"className = "salida">Salida</Dropdown.Item>
      <Dropdown.Item as="button"className = "steamboat">Steamboat Springs</Dropdown.Item>
    </DropdownButton>
    </CardMedia>
    <CardText>{dummyText}</CardText>
    <CardActions>
      {/* <Button label="Action 1" />
      <Button label="Action 2" /> */}
    </CardActions>
  </Card>
);

// return <DIY />;

export default Maps;
