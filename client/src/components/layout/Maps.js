import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Dropdown, DropdownButton} from 'react-bootstrap/';
import Iframe from 'react-iframe';
// import Button from 'react-toolbox/lib/button';



const Maps = () => (
  <Card style={{width: '800px'}}>
    <CardTitle
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
    <Iframe src="https://www.google.com/maps/d/embed?mid=1p6mQhsS5flYu4HUIPTOdcY2oX2MjOOga" width="800" height="800"></Iframe>
    <CardText></CardText>
    <CardActions>
      {/* <Button label="Action 1" />
      <Button label="Action 2" /> */}
    </CardActions>
  </Card>
);

// return <DIY />;

export default Maps;
